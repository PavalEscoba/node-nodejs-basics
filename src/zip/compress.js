import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const initialFilePath = path.join(__dirname, 'files', 'fileToCompress.txt');
const archivedFilePath = path.join(__dirname, 'files', 'archive.gz');

const compress = async () => {
  const gZip = zlib.createGzip();
  const readInitFileStream = fs.createReadStream(initialFilePath);
  const writeArchiveFileStream = fs.createWriteStream(archivedFilePath);

  readInitFileStream.pipe(gZip).pipe(writeArchiveFileStream);

  writeArchiveFileStream.on('finish', () => {
    console.log('File compressed successfully.');
  });
};

await compress();
