import sharp from 'sharp';

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0a0a0a"/>
  <text x="600" y="280" font-family="Times New Roman, Times, serif" font-size="120" font-weight="400" fill="white" text-anchor="middle" letter-spacing="4">OTZ</text>
  <text x="600" y="380" font-family="Arial, sans-serif" font-size="36" fill="#a0a0a0" text-anchor="middle" letter-spacing="2">AI Consulting &amp; Implementation</text>
  <text x="600" y="440" font-family="Arial, sans-serif" font-size="24" fill="#707070" text-anchor="middle">Miami, Florida</text>
</svg>`;

async function generateOgImage() {
  const svgBuffer = Buffer.from(svgContent);

  await sharp(svgBuffer)
    .jpeg({ quality: 90 })
    .toFile('./public/og-image.jpg');

  console.log('Generated og-image.jpg (1200x630)');
}

generateOgImage();
