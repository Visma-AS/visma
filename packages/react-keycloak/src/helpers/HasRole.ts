import renderChildrenOrFallback from '@postinumero/react-auth/lib/renderChildrenOrFallback.js';
import { useKeycloak } from '@react-keycloak/web';
import type { RoleOrRolesMaybe } from './index.js';
import useHasRole from './useHasRole.js';

const reservedPropNames = ['fallback', 'children', 'realm', 'resource'];

export default renderChildrenOrFallback(
  useHasRole,
  ({ realm, resource, ...roles }) => {
    const { keycloak } = useKeycloak();
    const propRoles = Object.entries(roles)
      .filter(([role]) => !reservedPropNames.includes(role))
      .filter(([, value]) => Boolean(value))
      .map(([role]) => role)
      .map((role) =>
        reservedPropNames.some((propName) => role.startsWith(propName))
          ? // "fallbackRole" ==> "fallback"
            role.slice(0, -4)
          : role
      );

    const toArray = (value: RoleOrRolesMaybe, getUnknown: () => any) =>
      value
        ? typeof value === 'string'
          ? [value, ...propRoles]
          : Array.isArray(value)
          ? [...value, propRoles]
          : getUnknown()
        : propRoles;

    return {
      realm: toArray(realm, () => propRoles),
      resource: toArray(resource, () =>
        keycloak.clientId
          ? {
              ...resource,
              [keycloak.clientId]: toArray(
                resource[keycloak.clientId],
                () => propRoles
              ),
            }
          : resource
      ),
    };
  }
);
