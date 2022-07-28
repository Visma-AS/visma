import createLoadRuntimeConfig from './createLoadRuntimeConfig.js';
import init from './esm.init.js';

const loadRuntimeConfig = createLoadRuntimeConfig(init);

export default loadRuntimeConfig;
