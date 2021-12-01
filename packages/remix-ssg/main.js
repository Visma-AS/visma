#!/usr/bin/env node

import spawn from 'cross-spawn';
import spawnWithKill from 'cross-spawn-with-kill';
import fs from 'fs-extra';
import waitOn from 'wait-on';

const { browserBuildDirectory, publicPath } = new Function(
  `const module = {};${await fs.readFile(
    'remix.config.js'
  )};return module.exports`
)();

const server = spawnWithKill('npm', ['start'], { stdio: 'inherit' });

const resources = ['/', ...process.argv.slice(2)].map(
  (path) => 'http://localhost:3000' + path
);

await waitOn({ resources });

const target = 'deploy';

spawn.sync('rm', ['-rf', target], { stdio: 'inherit' });

spawn.sync(
  'wget',
  [
    '--directory-prefix',
    target,
    '--recursive',
    '--no-parent',
    '--input',
    '--no-http-keep-alive',
    '--no-host-directories',
    '--level=inf',
    ...resources,
  ],
  { stdio: 'inherit' }
);

await fs.copy(browserBuildDirectory, target + publicPath);

server.kill();
