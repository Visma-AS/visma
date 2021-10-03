import { createRequire } from 'module';
import path from 'path';

const require = createRequire(import.meta.url);

const paths = [
  path.resolve('./public.config'),
  '@visma/public.config/lib/default.js',
];

let raw: string;

for (const path of paths) {
  try {
    raw = require.resolve(path);
    break;
  } catch {}
}

export default {
  '@visma/public.config/raw': raw!,
};
