import configs, { Env } from './configs.js';

configs.splice(-1, 0, (import.meta as unknown as { env: Env }).env);

export default configs;
