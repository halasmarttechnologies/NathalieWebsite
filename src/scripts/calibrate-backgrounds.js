const sharp = require('sharp');
const fs = require('fs');

async function calibrateImage(inputPath, outputPath, isMobile = false) {
  const img = sharp(inputPath);
  const meta = await img.metadata();
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  const outBuf = Buffer.from(data);

  // Target ratios from uploaded reference image media_1790347340899.jpg:
  // Target average in body background: R=246, G=241, B=234
  // Target cards background: R=247, G=241, B=234
  // Warmth in uploaded image is: (R - B) = ~12
  // But in phoneview: (R - B) was 37!
  // In heroimage: (R - B) was 23-26!

  let adjustedCount = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];

      const minVal = Math.min(r, g, b);
      const maxVal = Math.max(r, g, b);

      // Only adjust light canvas background pixels:
      // Dark ribbons have minVal < 90
      // Gold trim has high saturation: (maxVal - minVal) / maxVal > 0.35 and minVal < 150
      // Light background has minVal > 150 and low-to-moderate saturation
      if (minVal > 160 && maxVal > 190) {
        // This is light canvas / background
        // Calculate lightness
        const lum = 0.299 * r + 0.587 * g + 0.114 * b;
        
        // Weight factor based on luminance: smoothly blend in from 160 to 200
        const weight = Math.min(1, Math.max(0, (minVal - 160) / 35));

        if (weight > 0) {
          // In uploaded image:
          // When lum is around 242 (target #f6f1ea):
          // R = lum + 4
          // G = lum - 1
          // B = lum - 8
          // Notice: in uploaded image, R-B is around 12 to 14, NEVER 25 to 37!
          // Let's compute target R, G, B for this luminance:
          const targetR = Math.min(255, Math.round(lum + 4 * (lum / 242)));
          const targetG = Math.min(255, Math.round(lum - 1 * (lum / 242)));
          const targetB = Math.min(255, Math.round(lum - 8 * (lum / 242)));

          // Blend with original using weight
          outBuf[idx] = Math.round(r * (1 - weight) + targetR * weight);
          outBuf[idx + 1] = Math.round(g * (1 - weight) + targetG * weight);
          outBuf[idx + 2] = Math.round(b * (1 - weight) + targetB * weight);
          adjustedCount++;
        }
      }
    }
  }

  console.log(`Calibrated ${inputPath}: ${adjustedCount} pixels adjusted out of ${width * height}`);

  await sharp(outBuf, { raw: { width, height, channels } })
    .png({ compressionLevel: 8 })
    .toFile(outputPath);
  
  console.log(`Saved calibrated image to ${outputPath}`);
}

async function run() {
  // First backup originals if not backed up
  if (!fs.existsSync('public/images/heroimage-original.png')) {
    fs.copyFileSync('public/images/heroimage.png', 'public/images/heroimage-original.png');
  }
  if (!fs.existsSync('public/images/phoneview-original.png')) {
    fs.copyFileSync('public/images/phoneview.png', 'public/images/phoneview-original.png');
  }

  await calibrateImage('public/images/heroimage-original.png', 'public/images/heroimage.png', false);
  await calibrateImage('public/images/phoneview-original.png', 'public/images/phoneview.png', true);
}

run().catch(console.error);
