import { useKeycloak } from '@react-keycloak/web';

export default function useCurrentuser() {
  const { keycloak } = useKeycloak();
  return keycloak.idTokenParsed;
}
