const sharp = require('sharp');
const path = require('path');

const srcPath = 'C:/Users/Laptop House/.gemini/antigravity-ide/brain/d29d669e-44d8-430f-8b13-57c948c0edbc/.user_uploaded/media_1789741578969.jpg';
const outPath = path.resolve('public/images/exact-clone-background.jpg');

async function createFeatheredBackground() {
  const { data, info } = await sharp(srcPath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels;
  const buf = Buffer.from(data);

  const getPixel = (x, y) => {
    const idx = (Math.max(0, Math.min(height - 1, y)) * width + Math.max(0, Math.min(width - 1, x))) * channels;
    return [buf[idx], buf[idx + 1], buf[idx + 2]];
  };

  const setPixel = (x, y, r, g, b) => {
    if (x < 0 || x >= width || y < 0 || y >= height) return;
    const idx = (y * width + x) * channels;
    buf[idx] = r;
    buf[idx + 1] = g;
    buf[idx + 2] = b;
  };

  // Sample parchment color at coordinate (x, y)
  const getParchmentColor = (x, y) => {
    const dx = (x - 410) / 410;
    const dy = (y - 450) / 400;
    const dist = Math.min(1.2, Math.sqrt(dx * dx + dy * dy));
    const r = Math.round(250 - dist * 10);
    const g = Math.round(245 - dist * 15);
    const b = Math.round(239 - dist * 20);
    return [r, g, b];
  };

  const paintFeatheredBox = (x1, y1, x2, y2, feather, colorFunc) => {
    for (let y = y1 - feather; y <= y2 + feather; y++) {
      for (let x = x1 - feather; x <= x2 + feather; x++) {
        let dist = 0;
        if (x >= x1 && x <= x2 && y >= y1 && y <= y2) {
          dist = Math.min(x - x1, x2 - x, y - y1, y2 - y);
        } else {
          continue;
        }

        const alpha = Math.min(1, dist / feather);
        if (alpha <= 0) continue;

        const [origR, origG, origB] = getPixel(x, y);
        const [targetR, targetG, targetB] = colorFunc(x, y);

        const newR = Math.round(origR * (1 - alpha) + targetR * alpha);
        const newG = Math.round(origG * (1 - alpha) + targetG * alpha);
        const newB = Math.round(origB * (1 - alpha) + targetB * alpha);

        setPixel(x, y, newR, newG, newB);
      }
    }
  };

  // 1. Clean the top ribbon text completely
  // The dark satin header spans from y=0 to y=72 across x=30 to x=685
  paintFeatheredBox(30, 0, 685, 68, 8, (x, y) => {
    const factor = y / 68;
    return [
      Math.round(14 + factor * 8),
      Math.round(15 + factor * 9),
      Math.round(18 + factor * 10),
    ];
  });

  // 2. Clean quote area (x: 250 to 535, y: 72 to 160)
  paintFeatheredBox(250, 72, 535, 160, 14, getParchmentColor);

  // 3. Clean bio text area completely (x: 52 to 468, y: 165 to 772)
  paintFeatheredBox(52, 165, 468, 772, 10, getParchmentColor);

  // 4. Clean portrait & expertise area completely (x: 470 to 754, y: 140 to 772)
  paintFeatheredBox(470, 140, 754, 772, 10, getParchmentColor);

  // 5. Clean cards inner text and icons completely (cards sit from y=758 to 935)
  // Card 1 text: x: 38 to 272, y: 765 to 888
  paintFeatheredBox(38, 765, 272, 888, 4, () => [250, 246, 239]);
  // Card 2 text: x: 295 to 528, y: 765 to 888
  paintFeatheredBox(295, 765, 528, 888, 4, () => [250, 246, 239]);
  // Card 3 text: x: 550 to 785, y: 765 to 888
  paintFeatheredBox(550, 765, 785, 888, 4, () => [250, 246, 239]);

  // Upscale to high-res 1638 x 2048 with Lanczos3
  await sharp(buf, { raw: { width, height, channels } })
    .resize(1638, 2048, { kernel: 'lanczos3' })
    .jpeg({ quality: 98 })
    .toFile(outPath);

  console.log('Exact clone background created at:', outPath);
}

createFeatheredBackground().catch(console.error);
