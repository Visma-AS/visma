import Keycloak from 'keycloak-js';

export default new Keycloak(globalThis.ENV?.KEYCLOAK);
