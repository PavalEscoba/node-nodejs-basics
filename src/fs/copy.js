import fs from 'fs/promises';
import path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const isDirExist = async (path) => {
  try {
    await fs.access(path);
    return true;
  } catch (error) {
    return false;
  }
};

const inputDir = path.join(__dirname, 'files');
const outputDir = path.join(__dirname, 'files_copy');

const condition =
  (await !isDirExist(inputDir)) || (await isDirExist(outputDir));

const copy = async () => {
  if (condition) {
    throw new Error('FS operation failed');
  } else {
    try {
      const inputDirContent = await fs.readdir(inputDir);
      await fs.mkdir(outputDir);
      inputDirContent.forEach(async (file) => {
        try {
          const sourcePath = path.join(inputDir, file);
          const destPath = path.join(outputDir, file);
          await fs.copyFile(sourcePath, destPath);
        } catch (error) {
          throw new Error('FS copy operation failed');
        }
      });
      console.log('copy operation finished');
    } catch (error) {
      throw new Error('FS operation failed');
    }
  }
};

await copy();
