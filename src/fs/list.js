import fs from 'fs/promises';
import path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const folderPath = path.join(__dirname, 'files');

const isFolderExist = async (path) => {
  try {
    await fs.access(path);
    return true;
  } catch (error) {
    return false;
  }
};

const list = async () => {
  if (!(await isFolderExist(folderPath))) {
    throw new Error('FS operation failed');
  }
  try {
    const files = await fs.readdir(folderPath);
    const filesNamesArray = files.map((file) => file);
    console.log(filesNamesArray);
  } catch (error) {}
};

await list();
