import fs from 'fs/promises';
import { dirname, join } from 'path';

const __dirname = dirname(new URL(import.meta.url).pathname);

const filePath = join(__dirname, 'files', 'fileToRead.txt');

const isFileExist = async (path) => {
  try {
    await fs.stat(path);
    return true;
  } catch (error) {
    return false;
  }
};
const read = async () => {
  if (!(await isFileExist(filePath))) {
    throw new Error('FS operation failed');
  }

  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    console.log(fileContent);
  } catch (error) {}
};

await read();
