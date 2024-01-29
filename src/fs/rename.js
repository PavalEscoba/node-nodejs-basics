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

const wrongFileName = path.join(__dirname, 'files', 'wrongFilename.txt');
const rightFileName = path.join(__dirname, 'files', 'properFilename.md');

const isWrongApsentAndRightNot =
  !(await isFileExist(wrongFileName)) && (await isFileExist(rightFileName));

const rename = async () => {
  if (isWrongApsentAndRightNot) {
    throw new Error('FS operation failed');
  } else {
    try {
      await fs.rename(wrongFileName, rightFileName);
    } catch (error) {}
  }
};

await rename();
