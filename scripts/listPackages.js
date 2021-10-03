import { readdir } from 'fs/promises';

console.log(
  `::set-output name=matrix::${JSON.stringify({
    package: await readdir('packages'),
  })}`
);
