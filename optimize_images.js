import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const inputDir = './public/pre';

async function optimizeImages() {
  try {
    const files = await fs.readdir(inputDir);
    const imageFiles = files.filter(f => f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png'));

    for (const file of imageFiles) {
      const filePath = path.join(inputDir, file);
      const tempPath = path.join(inputDir, `temp_${file}`);
      
      console.log(`Optimizing ${file}...`);
      
      // Load image, resize if width > 1600, compress JPEG
      await sharp(filePath)
        .resize({ width: 1600, withoutEnlargement: true })
        .jpeg({ quality: 80, progressive: true })
        .toFile(tempPath);
        
      // Replace original with optimized version
      await fs.rename(tempPath, filePath);
      console.log(`Successfully optimized ${file}`);
    }
    
    console.log("All images optimized!");
  } catch (err) {
    console.error("Error optimizing images:", err);
  }
}

optimizeImages();
