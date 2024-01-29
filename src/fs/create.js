import fs from 'fs/promises';
import path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const filePath = path.join(__dirname, 'files', 'fresh.txt');
const fileContent = 'I am fresh and young';
const isFileExist = async (path) => {
  try {
    await fs.stat(path);
    return true;
  } catch (error) {
    return false;
  }
};

const create = async () => {
  const fileStats = await isFileExist(filePath);
  if (fileStats) {
    throw new Error('FS operation failed');
  } else {
    try {
      await fs.writeFile(filePath, fileContent);
      console.log('file created');
    } catch (error) {}
  }
};

await create();
