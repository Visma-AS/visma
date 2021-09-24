declare module 'api' {
  export const clientPromise: Promise<any>;
}

declare module 'public.config' {
  type Hostname = string;
  type ConfigListItem = Config | ConfigItem;

  export type Config = { [x: string]: any };
  export type ConfigItem = [Hostname, Config];
  export type ConfigList = ConfigListItem[];

  const config: ConfigList;

  export default config;
}
