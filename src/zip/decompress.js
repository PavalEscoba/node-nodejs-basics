import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const outputFile = path.join(__dirname, 'files', 'fileToCompress.txt');
const inputFile = path.join(__dirname, 'files', 'archive.gz');

const decompress = async () => {
  const gunzipStream = zlib.createGunzip();
  const archivedReadStream = fs.createReadStream(inputFile);
  const textStream = fs.createWriteStream(outputFile);

  archivedReadStream.pipe(gunzipStream).pipe(textStream);

  textStream.on('finish', () => {
    console.log('File decompressed successfully.');
  });
};

await decompress();
