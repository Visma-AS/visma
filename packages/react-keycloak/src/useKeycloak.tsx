import { useKeycloak as useReactKeycloak } from '@react-keycloak/web';
import { produce } from 'immer';
import type { KeycloakPromise } from 'keycloak-js';
import { useLocalStorageKey } from './withPageRefreshSupport/withLocalStorageKeyContext.js';

export default function useKeycloak() {
  const current = useReactKeycloak();
  const _logout = current.keycloak.logout.bind(current.keycloak);
  const KEY = useLocalStorageKey();

  return produce(current, (draft) => {
    draft.keycloak.logout = function logout(...args) {
      if (KEY) {
        localStorage.removeItem(KEY);
      }
      _logout(...args);
    } as (...args: any[]) => KeycloakPromise<void, void>;
  });
}
