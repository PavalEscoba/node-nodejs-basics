import fs from 'fs';
import path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  const readStream = fs.createReadStream(filePath);
  readStream.pipe(process.stdout);
  readStream.on('error', (err) => {
    console.log('error', err);
  });
  readStream.on('end', () => {
    console.log('\n');
  });
};

await read();
