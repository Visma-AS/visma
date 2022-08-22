import * as merge from 'deepmerge-json';

const objectMap = <FromValue, ToValue>(
  obj: { [key: string]: FromValue },
  fn: (
    [key, value]: [key: string, value: FromValue],
    index: number
  ) => [string, ToValue]
) => Object.fromEntries(Object.entries(obj).map(fn));

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
      objectMap(config, ([key, value]) => {
        const prefix = prefixes.find((prefix) => key.startsWith(prefix));
        return [prefix ? key.slice(prefix.length) : key, value];
      }),
    ];

const jsonParseSafe = ([
  hostname,
  config,
]: ConfigByHostname): ConfigByHostname => [
  hostname,
  objectMap(config, ([key, value]) => {
    try {
      return [key, JSON.parse(value!)];
    } catch {
      return [key, value];
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
      .reduce(
        (config, overrides) =>
          (typeof merge === 'function' ? merge : merge.default)(
            config,
            overrides
          ),
        {}
      );
  };
}
