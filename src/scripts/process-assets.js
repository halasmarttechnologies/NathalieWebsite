const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const srcPath = 'C:/Users/Laptop House/.gemini/antigravity-ide/brain/d29d669e-44d8-430f-8b13-57c948c0edbc/.user_uploaded/media_1789741578969.jpg';
const outDir = path.resolve('public/images/exact');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function extract() {
  const metadata = await sharp(srcPath).metadata();
  console.log('Source metadata:', metadata);

  // 1. High quality portrait crop (inside the gold frame)
  // Coordinates in 819x1024:
  // Let's crop from left: 474, top: 145, width: 274, height: 326
  await sharp(srcPath)
    .extract({ left: 474, top: 145, width: 274, height: 326 })
    .resize(548, 652, { kernel: 'lanczos3' })
    .jpeg({ quality: 95 })
    .toFile(path.join(outDir, 'nathalie-portrait.jpg'));
  console.log('Portrait extracted');

  // 2. Icon 1 - Individual (Card 1 icon)
  await sharp(srcPath)
    .extract({ left: 132, top: 772, width: 38, height: 42 })
    .resize(76, 84, { kernel: 'lanczos3' })
    .png()
    .toFile(path.join(outDir, 'icon-individual.png'));

  // 3. Icon 2 - Couples (Card 2 icon)
  await sharp(srcPath)
    .extract({ left: 387, top: 772, width: 44, height: 42 })
    .resize(88, 84, { kernel: 'lanczos3' })
    .png()
    .toFile(path.join(outDir, 'icon-couples.png'));

  // 4. Icon 3 - Family (Card 3 icon)
  await sharp(srcPath)
    .extract({ left: 641, top: 772, width: 48, height: 42 })
    .resize(96, 84, { kernel: 'lanczos3' })
    .png()
    .toFile(path.join(outDir, 'icon-family.png'));

  // 5. Arrow Button
  await sharp(srcPath)
    .extract({ left: 130, top: 888, width: 40, height: 40 })
    .resize(80, 80, { kernel: 'lanczos3' })
    .png()
    .toFile(path.join(outDir, 'arrow-button.png'));

  // 6. Language Switcher
  await sharp(srcPath)
    .extract({ left: 616, top: 10, width: 58, height: 42 })
    .resize(116, 84, { kernel: 'lanczos3' })
    .png()
    .toFile(path.join(outDir, 'lang-switcher.png'));

  console.log('All exact components extracted successfully');
}

extract().catch(console.error);
