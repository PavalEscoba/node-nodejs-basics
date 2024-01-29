const envVariables = process.env;

const parseEnv = () => {
  const data = Object.entries(envVariables)
    .filter(([key, value]) => {
      if (key.startsWith('RSS_')) {
        return [key, value];
      }
    })
    .map(([key, value]) => `${key}=${value}`)
    .join('; ');

  console.log(data);
};

parseEnv();
