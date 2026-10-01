const sharp = require('sharp');

async function createPerfectHeroImage() {
  // 1. First make sure test_phone_top has clean feathered bottom
  const phoneTopMeta = await sharp('public/images/test_phone_top.png').metadata();
  const phoneTopWidth = 1122;
  // resize test_phone_top to 1122 width
  const resizedTop = await sharp('public/images/test_phone_top.png')
    .resize(phoneTopWidth, null)
    .png()
    .toBuffer();

  const resizedMeta = await sharp(resizedTop).metadata();
  const rHeight = resizedMeta.height; // ~537

  // Create an SVG linear gradient alpha mask for feathering the bottom 50px
  const maskSvg = `
  <svg width="${phoneTopWidth}" height="${rHeight}">
    <defs>
      <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="1" />
        <stop offset="85%" stop-color="#ffffff" stop-opacity="1" />
        <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
      </linearGradient>
    </defs>
    <rect width="${phoneTopWidth}" height="${rHeight}" fill="url(#fade)" />
  </svg>`;

  const maskBuffer = await sharp(Buffer.from(maskSvg)).png().toBuffer();

  // Apply feather mask to the top overlay
  const featheredTop = await sharp(resizedTop)
    .ensureAlpha()
    .composite([{ input: maskBuffer, blend: 'dest-in' }])
    .png()
    .toBuffer();

  // Now composite onto test_hero_gold_recolor.png
  await sharp('public/images/test_hero_gold_recolor.png')
    .composite([{ input: featheredTop, top: 0, left: 0 }])
    .png({ compressionLevel: 8 })
    .toFile('public/images/heroimage.png');

  console.log('Clean feathered heroimage.png created!');

  // Update phoneview.png
  await sharp('public/images/test_phone_recolor.png')
    .png({ compressionLevel: 8 })
    .toFile('public/images/phoneview.png');

  console.log('phoneview.png updated!');
}

createPerfectHeroImage().catch(console.error);
