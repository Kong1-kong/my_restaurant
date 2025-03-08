const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/images');
const outputDir = inputDir;

// 确保输出目录存在
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 处理单个图片
async function processImage(inputPath) {
  const filename = path.basename(inputPath, path.extname(inputPath));
  
  // 生成 WebP 版本
  await sharp(inputPath)
    .webp({ quality: 80 })
    .toFile(path.join(outputDir, `${filename}.webp`));
  
  // 生成移动端版本
  await sharp(inputPath)
    .resize(768, null, { withoutEnlargement: true })
    .jpeg({ quality: 80, progressive: true })
    .toFile(path.join(outputDir, `${filename}-mobile.jpg`));
  
  // 优化原始图片
  await sharp(inputPath)
    .jpeg({ quality: 85, progressive: true })
    .toFile(path.join(outputDir, `${filename}-optimized.jpg`));
  
  // 替换原始文件
  fs.renameSync(
    path.join(outputDir, `${filename}-optimized.jpg`),
    path.join(outputDir, `${filename}.jpg`)
  );
}

// 处理目录中的所有图片
async function processDirectory() {
  const files = fs.readdirSync(inputDir);
  
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const inputPath = path.join(inputDir, file);
      console.log(`Processing ${file}...`);
      await processImage(inputPath);
    }
  }
}

// 运行优化
processDirectory().catch(console.error); 