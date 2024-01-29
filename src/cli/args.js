const argValues = process.argv.slice(2);

const parseArgs = () => {
  const data = [];
  for (let i = 0; i < argValues.length; i += 2) {
    data.push(`${argValues[i].slice(2)} is ${argValues[i + 1]}`);
  }
  console.log(data.join(', '));
};

parseArgs();
