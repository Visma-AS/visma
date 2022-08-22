import { readdir } from 'fs/promises';

console.log(
  `::set-output name=matrix::${JSON.stringify({
    package: await readdir('packages'),
    // package: [
    //   'eslint-config-super-template',
    //   'formatjs-scripts',
    //   'public.config',
    //   'react-app-locale-utils',
    //   'react-app-super-template',
    //   'react-intl-bundled-messages',
    //   'tsconfig',
    //   'vite-plugin-super-template',
    // ],
  })}`
);
