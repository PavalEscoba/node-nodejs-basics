import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
const calculateHash = async () => {
  const hash = crypto.createHash('sha256');
  const hashStream = fs.createReadStream(filePath);

  hashStream.on('data', (data) => {
    hash.update(data);
  });

  hashStream.on('error', () => {
    throw new Error('smth went wrong with hashing');
  });

  hashStream.on('end', () => {
    const hashHEX = hash.digest('hex');
    console.log(hashHEX);
  });
};

await calculateHash();
