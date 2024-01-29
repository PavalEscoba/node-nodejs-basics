import fs from 'fs/promises';
import path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const isFileExist = async (path) => {
  try {
    await fs.stat(path);
    return true;
  } catch (error) {
    return false;
  }
};

const fileToDelete = path.join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
  if (!(await isFileExist(fileToDelete))) {
    throw new Error('FS operation failed');
  } else {
    try {
      await fs.unlink(fileToDelete);
      console.log('file was removed successfuly');
    } catch (error) {}
  }
};

await remove();
