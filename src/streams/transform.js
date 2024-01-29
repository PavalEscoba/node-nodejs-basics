import { Transform } from 'stream';
const transform = async () => {
  const reversedStream = new Transform({
    transform: function (chunk, encoding, cb) {
      const reversedArray = chunk.toString().split('');
      const lastChar = reversedArray.pop();
      const reversedChunk = reversedArray.reverse().concat(lastChar).join('');
      cb(null, reversedChunk);
    },
  });
  process.stdin.pipe(reversedStream).pipe(process.stdout);
};

await transform();
