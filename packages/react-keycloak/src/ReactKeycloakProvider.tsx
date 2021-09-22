import { ReactKeycloakProvider } from '@react-keycloak/web';
import withAxiosAuthorizationHeaderUpdater from './withAxiosAuthorizationHeaderUpdater.js';
import withPageRefreshSupport from './withPageRefreshSupport/index.js';

export default withPageRefreshSupport(
  withAxiosAuthorizationHeaderUpdater(ReactKeycloakProvider)
);
