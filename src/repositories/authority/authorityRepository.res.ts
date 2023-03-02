import { Permission } from "types/permission/permission.type";

export interface getMyPermissionResponse extends Response {
  data: Permission[];
}
