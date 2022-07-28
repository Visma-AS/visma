export type Env = typeof process.env;

const configs = [process.env, (globalThis as unknown as { ENV: Env }).ENV];

export default configs;
