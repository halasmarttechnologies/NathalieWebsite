const sharp = require('sharp');
const path = require('path');

const srcPath = 'C:/Users/Laptop House/.gemini/antigravity-ide/brain/d29d669e-44d8-430f-8b13-57c948c0edbc/.user_uploaded/media_1789741578969.jpg';
const outPath = path.resolve('public/images/master-background-clean.jpg');

async function createMasterBackground() {
  const { data, info } = await sharp(srcPath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels;
  const buf = Buffer.from(data);

  const setPixel = (x, y, r, g, b) => {
    if (x < 0 || x >= width || y < 0 || y >= height) return;
    const idx = (y * width + x) * channels;
    buf[idx] = r;
    buf[idx + 1] = g;
    buf[idx + 2] = b;
  };

  const getParchment = (x, y) => {
    // Smooth radial parchment gradient centered around (420, 360)
    const dx = (x - 420) / 400;
    const dy = (y - 360) / 360;
    const dist = Math.min(1, Math.sqrt(dx * dx + dy * dy));
    const r = Math.round(250 - dist * 9);
    const g = Math.round(245 - dist * 13);
    const b = Math.round(238 - dist * 18);
    return [r, g, b];
  };

  // 1. Clean the top dark satin area where logo, nav, and lang buttons are
  // Sample the dark satin background: smooth deep obsidian [18, 19, 23]
  for (let y = 8; y <= 66; y++) {
    for (let x = 40; x <= 678; x++) {
      // Create a smooth dark satin fill with slight vertical gradient
      const factor = y / 66;
      const dr = Math.round(14 + factor * 10);
      const dg = Math.round(15 + factor * 11);
      const db = Math.round(18 + factor * 12);
      setPixel(x, y, dr, dg, db);
    }
  }

  // 2. Clean Quote area (x: 270 to 520, y: 78 to 155)
  for (let y = 78; y <= 155; y++) {
    for (let x = 270; x <= 520; x++) {
      const [pr, pg, pb] = getParchment(x, y);
      setPixel(x, y, pr, pg, pb);
    }
  }

  // 3. Clean Bio column area (x: 75 to 468, y: 175 to 745)
  for (let y = 175; y <= 745; y++) {
    for (let x = 75; x <= 468; x++) {
      const [pr, pg, pb] = getParchment(x, y);
      setPixel(x, y, pr, pg, pb);
    }
  }

  // 4. Clean Portrait area (x: 472 to 749, y: 144 to 473)
  for (let y = 144; y <= 473; y++) {
    for (let x = 472; x <= 749; x++) {
      const [pr, pg, pb] = getParchment(x, y);
      setPixel(x, y, pr, pg, pb);
    }
  }

  // 5. Clean Expertise card area (x: 472 to 750, y: 476 to 745)
  for (let y = 476; y <= 745; y++) {
    for (let x = 472; x <= 750; x++) {
      const [pr, pg, pb] = getParchment(x, y);
      setPixel(x, y, pr, pg, pb);
    }
  }

  // 6. Save upscaled pristine background (1638x2048)
  await sharp(buf, { raw: { width, height, channels } })
    .resize(1638, 2048, { kernel: 'lanczos3' })
    .jpeg({ quality: 97 })
    .toFile(outPath);

  console.log('Clean master background created at:', outPath);
}

createMasterBackground().catch(console.error);
