import { useKeycloak } from '@react-keycloak/web';

export default function useHasRole({
  realm,
  resource = {},
}: {
  realm: string | string[];
  resource: {
    [x: string]: string | string[];
  };
}) {
  const { keycloak } = useKeycloak();
  return keycloak.authenticated
    ? testMaybeArray(realm, (role) => keycloak.hasRealmRole(role)) ||
        Object.entries(resource).some(([resource, role]) =>
          testMaybeArray(role, (role) =>
            keycloak.hasResourceRole(role, resource)
          )
        )
    : false;
}

const testMaybeArray = (
  role: string | string[],
  test: (...args: any[]) => boolean
) => (Array.isArray(role) ? role.some(test) : test(role));
