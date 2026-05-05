import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = process.cwd();
const TARGET_DIRS = ['public/imagen', 'public/images'];
const SOURCE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png']);
const QUALITY = 72;
const MAX_WIDTH = 1600;
const DELETE_ORIGINAL = process.argv.includes('--delete');

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

async function convert(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!SOURCE_EXTENSIONS.has(ext)) return null;

  const outputPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const image = sharp(filePath);
  const metadata = await image.metadata();

  const pipeline = metadata.width && metadata.width > MAX_WIDTH
    ? image.resize({ width: MAX_WIDTH, withoutEnlargement: true })
    : image;

  await pipeline.webp({ quality: QUALITY, effort: 6 }).toFile(outputPath);

  if (DELETE_ORIGINAL) {
    await fs.unlink(filePath);
  }

  return { input: filePath, output: outputPath };
}

async function run() {
  let converted = 0;
  let skipped = 0;

  for (const dir of TARGET_DIRS) {
    const absDir = path.join(ROOT, dir);
    try {
      await fs.access(absDir);
    } catch {
      continue;
    }

    const files = await walk(absDir);
    for (const file of files) {
      const result = await convert(file);
      if (result) {
        converted += 1;
        console.log(`converted: ${path.relative(ROOT, result.input)} -> ${path.relative(ROOT, result.output)}`);
      } else {
        skipped += 1;
      }
    }
  }

  console.log(`done: ${converted} converted, ${skipped} skipped${DELETE_ORIGINAL ? ', originals deleted' : ''}`);
}

run().catch((error) => {
  console.error('conversion error:', error);
  process.exit(1);
});
