import config from '@visma/public.config';
import Keycloak from 'keycloak-js';

export default Keycloak(config.keycloak);
