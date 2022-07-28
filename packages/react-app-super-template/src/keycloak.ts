import Keycloak from 'keycloak-js';

export default Keycloak(globalThis.ENV?.KEYCLOAK);
