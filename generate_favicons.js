const fs = require('fs');
const path = require('path');
const Jimp = require('jimp');

async function createFavicons() {
  const srcPath = path.join(__dirname, 'public', 'logo-198x213.png');

  // Create the standard PNG favicons
  const sizes = [16, 32, 96, 192];
  const image = await Jimp.read(srcPath);

  for (const size of sizes) {
    const resized = image.clone().resize(size, Jimp.AUTO);
    // Ensure standard PNG sizes
    const targetFilename = size === 192 ? `android-icon-192x192.png` : `favicon-${sizexsize}.png`.replace('size', size).replace('size', size);

    await resized.writeAsync(path.join(__dirname, 'public', targetFilename));
    console.log(`Created ${targetFilename}`);
  }

  // Create a 32x32 proper favicon.ico containing transparent PNG data
  // Modern browsers actually accept PNG formatted data inside the ICO container
  console.log('Creating favicon.ico...');
  const icoImage = image.clone().resize(32, 32);
  const pngBuffer = await icoImage.getBufferAsync(Jimp.MIME_PNG);

  // Manually construct an ICO header wrapping the PNG
  const icoHeader = Buffer.alloc(6);
  icoHeader.writeUInt16LE(0, 0); // Reserved
  icoHeader.writeUInt16LE(1, 2); // Type 1 = ICO
  icoHeader.writeUInt16LE(1, 4); // Number of images

  const icoDir = Buffer.alloc(16);
  icoDir.writeUInt8(32, 0); // Width
  icoDir.writeUInt8(32, 1); // Height
  icoDir.writeUInt8(0, 2);  // Color count
  icoDir.writeUInt8(0, 3);  // Reserved
  icoDir.writeUInt16LE(1, 4); // Color planes
  icoDir.writeUInt16LE(32, 6); // Bits per pixel
  icoDir.writeUInt32LE(pngBuffer.length, 8); // Size of image data
  icoDir.writeUInt32LE(22, 12); // Offset of image data (6 + 16)

  const fullIco = Buffer.concat([icoHeader, icoDir, pngBuffer]);
  fs.writeFileSync(path.join(__dirname, 'public', 'favicon.ico'), fullIco);
  console.log('Created transparent favicon.ico');
}

createFavicons().catch(console.error);
