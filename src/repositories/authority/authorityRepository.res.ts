import { Permission } from "types/permission/permission.type";

export interface getPermissionResponse extends Response {
  data: Permission[];
}
