export type Role = string;
export type Roles = Role[];
export type RoleOrRoles = Role | Role[];
export type RoleOrRolesMaybe = RoleOrRoles | undefined;
export type ResourceRoles = { [x: string]: RoleOrRoles };
export type Resource = RoleOrRolesMaybe | ResourceRoles;
export type RealmAndResourceRoles<Resource = RoleOrRoles> = {
  realm?: RoleOrRoles;
  resource?: Resource;
};
export type RealmAndResourceRolesType = RealmAndResourceRoles<Resource>;
export type RealmAndResourceRolesTypeType =
  | RealmAndResourceRoles
  | RealmAndResourceRolesType
  | RoleOrRolesMaybe;
