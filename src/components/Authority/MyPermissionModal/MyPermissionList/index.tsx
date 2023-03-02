import { useGetMyPermissionQuery } from "quries/permission/permission.query";
import { Permission } from "types/permission/permission.type";
import { MyPermissionLi, MyPermissionUl } from "./style";

const MyPermissionList = () => {
  const { data: myPermissionData } = useGetMyPermissionQuery({
    suspense: true,
  });
  return (
    <MyPermissionUl>
      {myPermissionData?.data.map((permission: Permission, index: number) => {
        return (
          <MyPermissionLi key={index}>
            {"- "}
            {permission.permission}
          </MyPermissionLi>
        );
      })}
    </MyPermissionUl>
  );
};

export default MyPermissionList;
