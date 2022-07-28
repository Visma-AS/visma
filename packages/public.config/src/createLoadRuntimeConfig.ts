import axios from 'axios';
import createInit from './createInit.js';

export default function createLoadRuntimeConfig(
  init: ReturnType<typeof createInit>
) {
  return async function loadRuntimeConfig(url: string) {
    const finalUrl = new Function(
      ...Object.keys(globalThis.location),
      `return \`${url}\``
    )(...Object.values(globalThis.location));

    let config;

    try {
      config = (await axios(finalUrl)).data;
    } catch {}

    init({ config });
  };
}
