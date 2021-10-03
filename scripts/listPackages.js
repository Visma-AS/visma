import fg from 'fast-glob';

const packages = [];

for (const packagePath of await fg('packages/*/package.json')) {
  const { name } = (await import(`../${packagePath}`)).default;

  packages.push(name);
}

console.log(JSON.stringify({ package: packages }));
