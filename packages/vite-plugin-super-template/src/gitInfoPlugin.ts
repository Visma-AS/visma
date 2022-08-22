import { Plugin } from 'vite';

import { execSync } from 'child_process';

function git(command: string) {
  return JSON.stringify(
    execSync(`git ${command}`, { encoding: 'utf8' }).trim()
  );
}

const gitInfoPlugin: Plugin = {
  name: '@visma/vite-plugin-super-template-git-info',
  config: () => ({
    define: {
      'ENV.GIT_VERSION': git('describe --always'),
      'ENV.GIT_AUTHOR_DATE': git('log -1 --format=%aI'),
    },
  }),
};

export default gitInfoPlugin;
