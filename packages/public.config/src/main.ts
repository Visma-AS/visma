import { merge } from 'lodash';
import { config } from './loadRuntimeConfig.js';

Object.freeze(config);

type Hostname = string;
type ConfigListItem = Config | ConfigItem;

export type Config = { [x: string]: any };
export type ConfigItem = [Hostname, Config];
export type ConfigList = ConfigListItem[];

const safe = (hostname: string) => `.${hostname}`;
const currentHostnameSafe = safe(globalThis.location.hostname);

export default (config as ConfigList)
  .map(
    (config): ConfigItem =>
      Array.isArray(config) ? config : [globalThis.location.hostname, config]
  )
  .map(([hostname, config]): ConfigItem => [safe(hostname), config])
  .filter(
    ([hostnameSafe]) =>
      hostnameSafe === currentHostnameSafe ||
      currentHostnameSafe.endsWith(hostnameSafe)
  )
  .reduce((config, [, overrides]) => merge(config, overrides), {}) as Config;
