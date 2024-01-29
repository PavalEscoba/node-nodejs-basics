import fs from 'fs';
import path from 'path';
import { stdin } from 'process';
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const writableFilePath = path.join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
  // Write your code here
  const writeStream = fs.createWriteStream(writableFilePath);
  stdin.pipe(writeStream);
};

await write();
