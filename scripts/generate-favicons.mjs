import sharp from 'sharp';

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <rect width="100" height="100" fill="white"/>
  <text x="50" y="62" font-family="Times New Roman, Times, serif" font-size="36" font-weight="400" fill="#1a1a1a" text-anchor="middle" letter-spacing="1">OTZ</text>
</svg>`;

const sizes = [
  { name: 'favicon.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'icon-192.png', size: 192 },
  { name: 'icon-512.png', size: 512 },
];

async function generateFavicons() {
  const svgBuffer = Buffer.from(svgContent);

  for (const { name, size } of sizes) {
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(`./public/${name}`);
    console.log(`Generated ${name} (${size}x${size})`);
  }
}

generateFavicons();
