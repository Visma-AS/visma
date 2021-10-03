import publicConfig from '@visma/public.config/raw';
import axios from 'axios';
import invariant from 'tiny-invariant';

const toArray = <T>(data: T | T[]) => (Array.isArray(data) ? data : [data]);

export const config = toArray(publicConfig);

export default async function loadRuntimeConfig(url: string) {
  invariant(
    !Object.isFrozen(config),
    'You should not load the runtime config after the config has already been read. Use `await loadRuntimeConfig(url)` before import from `@visma/public.config`'
  );

  const finalUrl = new Function(
    ...Object.keys(globalThis.location),
    `return \`${url}\``
  )(...Object.values(globalThis.location));

  let data;

  try {
    data = (await axios(finalUrl)).data;
  } catch {}

  if (data) {
    config.push(...toArray(data));
  }
}
