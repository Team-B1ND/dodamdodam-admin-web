import { useGetMyPermissionQuery } from "quries/permission/permission.query";
import { Permission } from "types/permission/permission.type";
import { MyPermissionLi, MyPermissionUl } from "./style";

const MyPermissionList = () => {
  const { data: myPermissionData } = useGetMyPermissionQuery({
    suspense: true,
  });
  return (
    <MyPermissionUl>
      {myPermissionData?.data.map((permission: Permission) => {
        return (
          <MyPermissionLi key={permission.id}>
            {"- "}
            {permission.permission}
          </MyPermissionLi>
        );
      })}
    </MyPermissionUl>
  );
};

export default MyPermissionList;
