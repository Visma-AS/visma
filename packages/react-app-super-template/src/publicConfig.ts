import { merge } from 'lodash';
import type { Config, ConfigItem, ConfigList } from 'public.config';
import config from 'public.config';

// If the hostname matches or current is a subdomain of the config, later config
// is merged to earlier.
// Without the hostname config always matches.

const safe = (hostname: string) => `.${hostname}`;
const currentHostnameSafe = safe(window.location.hostname);

export default (config as ConfigList)
  .map(
    (config): ConfigItem =>
      Array.isArray(config) ? config : [window.location.hostname, config]
  )
  .map(([hostname, config]): ConfigItem => [safe(hostname), config])
  .filter(
    ([hostnameSafe]) =>
      hostnameSafe === currentHostnameSafe ||
      currentHostnameSafe.endsWith(hostnameSafe)
  )
  .reduce((config, [, overrides]) => merge(config, overrides), {}) as Config;
