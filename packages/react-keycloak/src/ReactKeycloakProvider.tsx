import { ReactKeycloakProvider } from '@react-keycloak/web';
import type { PropsWithAxios } from './withAxiosAuthorizationHeaderUpdater.js';
import withAxiosAuthorizationHeaderUpdater from './withAxiosAuthorizationHeaderUpdater.js';
import withPageRefreshSupport from './withPageRefreshSupport/index.js';
import type { PropsWithLocalStorageKey } from './withPageRefreshSupport/withLocalStorageKeyContext.js';

export default withPageRefreshSupport(
  withAxiosAuthorizationHeaderUpdater(ReactKeycloakProvider)
) as (props: Props) => JSX.Element;

interface Props extends PropsWithLocalStorageKey, PropsWithAxios {}
