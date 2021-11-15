import { useKeycloak } from '@react-keycloak/web';

export default function useCurrentUser() {
  const { keycloak } = useKeycloak();
  return keycloak.idTokenParsed;
}
