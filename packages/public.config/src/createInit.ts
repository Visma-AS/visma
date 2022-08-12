import merge from 'deepmerge-json';
import { mapKeys, mapValues } from 'lodash-es';

type Config = Record<string, any>;
type Hostname = string;

type ConfigByHostname = [Hostname, Config];
type ConfigOption = Config | ConfigByHostname;

export interface Options {
  // load && await loadRuntimeConfig()
  config?: ConfigOption | ConfigOption[];
  prefix?: string | string[];
}

export const defaultOptions = {
  prefix: ['REACT_APP_', 'VITE_'],
  config: [],
};

const toArray = <T>(data: T | T[]) => (Array.isArray(data) ? data : [data]);

const overrides = ([
  hostname,
  { HOSTNAME_OVERRIDES = [], ...config },
]: ConfigByHostname) => [
  [hostname, config] as ConfigByHostname,
  ...toArray(HOSTNAME_OVERRIDES).map(toConfigByHostname).map(toHostnameSafe),
];

const toConfigByHostname = (config: ConfigOption): ConfigByHostname =>
  Array.isArray(config)
    ? config
    : [globalThis.location?.hostname ?? '', config];

const hostnameSafe = (hostname: Hostname) => `.${hostname}`;

const toHostnameSafe = ([
  hostname,
  config,
]: ConfigByHostname): ConfigByHostname => [hostnameSafe(hostname), config];

const matchCurrentHostname = ([hostnameSafe]: ConfigByHostname) =>
  hostnameSafe === currentHostnameSafe ||
  currentHostnameSafe.endsWith(hostnameSafe);

const config = ([, config]: ConfigByHostname) => config;

const withoutPrefix =
  (prefixes: string[]) =>
  ([hostname, config]: ConfigByHostname): ConfigByHostname =>
    [
      hostname,
      mapKeys(config, (_value, key) => {
        const prefix = prefixes.find((prefix) => key.startsWith(prefix));
        return prefix ? key.slice(prefix.length) : key;
      }),
    ];

const jsonParseSafe = ([
  hostname,
  config,
]: ConfigByHostname): ConfigByHostname => [
  hostname,
  mapValues(config, (value) => {
    try {
      return JSON.parse(value!);
    } catch {
      return value;
    }
  }),
];

const currentHostnameSafe = hostnameSafe(globalThis.location?.hostname ?? '');

export default function createInit(configs: ConfigOption[]) {
  return function init(options?: Options) {
    const prefixes = toArray(options?.prefix ?? defaultOptions.prefix);

    const configOptions: ConfigOption[] = toArray(
      options?.config ?? defaultOptions.config
    );

    (globalThis as unknown as { ENV: Config }).ENV = [
      ...configs,
      ...configOptions,
    ]
      .filter(Boolean)
      .map(toConfigByHostname)
      .map(toHostnameSafe)
      .map(withoutPrefix(prefixes))
      .map(jsonParseSafe)
      .flatMap(overrides)
      .filter(matchCurrentHostname)
      .map(config)
      .reduce((config, overrides) => merge(config, overrides), {});
  };
}
