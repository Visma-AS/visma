import { useKeycloak } from '@react-keycloak/web';
import type {
  RealmAndResourceRolesType,
  RealmAndResourceRolesTypeType,
  Resource,
  ResourceRoles,
  Role,
  RoleOrRoles,
  RoleOrRolesMaybe,
  Roles,
} from './index.js';

export default function useHasRole(
  realmAndResourceRoles: RealmAndResourceRolesTypeType
) {
  const { keycloak } = useKeycloak();

  const hasResourceRole = (resourceRoles: ResourceRoles) =>
    Object.entries(resourceRoles).some(([resource, role]) =>
      testMaybeArray(role, (role) => keycloak.hasResourceRole(role, resource))
    ) ?? false;

  const toResourceRoles = (roles: Roles) =>
    keycloak.clientId ? { [keycloak.clientId]: roles } : {};

  const hasResource = (resource: Resource) =>
    resource
      ? hasResourceRole(
          typeof resource === 'string'
            ? toResourceRoles([resource])
            : Array.isArray(resource)
            ? toResourceRoles(resource)
            : resource
        )
      : false;

  const testRealmAndResourceRoles = ({
    realm,
    resource,
  }: RealmAndResourceRolesType) =>
    (realm
      ? testMaybeArray(realm, (role) => keycloak.hasRealmRole(role))
      : false) || hasResource(resource);

  return keycloak.authenticated && realmAndResourceRoles
    ? testRealmAndResourceRoles(
        typeof realmAndResourceRoles === 'string'
          ? toRealmAndResourceRoles([realmAndResourceRoles])
          : Array.isArray(realmAndResourceRoles)
          ? toRealmAndResourceRoles(realmAndResourceRoles)
          : realmAndResourceRoles
      )
    : false;
}

const toRealmAndResourceRoles = (role: RoleOrRolesMaybe) => ({
  realm: role,
  resource: role,
});

const testMaybeArray = (role: RoleOrRoles, test: (role: Role) => boolean) =>
  Array.isArray(role) ? role.some(test) : test(role);
