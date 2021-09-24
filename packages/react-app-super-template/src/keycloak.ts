import Keycloak from 'keycloak-js';
import config from './publicConfig.js';

export default Keycloak(config.keycloak);
