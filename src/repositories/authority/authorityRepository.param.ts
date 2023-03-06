export interface getPermissionByMemberParam {
  memberId: string;
}

export interface postAssignPermissionParam {
  memberId: string;
  permission: string;
}

export interface deletePermissionParam {
  memberId: string;
  permission: string;
}

export interface postAllAssignPermissionParam {
  memberId: string;
  permissions: string[];
}

export interface deleteAllPermissionParam {
  memberId: string,
  permissions: string[]
}