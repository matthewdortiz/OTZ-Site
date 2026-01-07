import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const ASSETS_DIR = './public/assets';
const QUALITY = 80;
const MAX_WIDTH = 1920; // Max width for large images

async function optimizeImages() {
  const files = fs.readdirSync(ASSETS_DIR).filter(f => f.endsWith('.png') || f.endsWith('.jpg'));

  console.log(`Found ${files.length} images to optimize\n`);

  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const file of files) {
    const inputPath = path.join(ASSETS_DIR, file);
    const outputPath = path.join(ASSETS_DIR, file.replace(/\.(png|jpg)$/, '.webp'));

    const originalSize = fs.statSync(inputPath).size;
    totalOriginal += originalSize;

    try {
      const image = sharp(inputPath);
      const metadata = await image.metadata();

      // Resize if wider than MAX_WIDTH
      let pipeline = image;
      if (metadata.width > MAX_WIDTH) {
        pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
      }

      await pipeline
        .webp({ quality: QUALITY })
        .toFile(outputPath);

      const newSize = fs.statSync(outputPath).size;
      totalOptimized += newSize;

      const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
      console.log(`${file}: ${(originalSize/1024/1024).toFixed(2)}MB → ${(newSize/1024/1024).toFixed(2)}MB (${savings}% smaller)`);
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }

  console.log(`\n${'='.repeat(60)}`);
  console.log(`Total: ${(totalOriginal/1024/1024).toFixed(2)}MB → ${(totalOptimized/1024/1024).toFixed(2)}MB`);
  console.log(`Savings: ${((totalOriginal - totalOptimized)/1024/1024).toFixed(2)}MB (${((totalOriginal - totalOptimized)/totalOriginal*100).toFixed(1)}%)`);
}

optimizeImages();
