import { userApi } from "@/shared/api/user";
import { userKeys } from "@/shared/config";
import { useQuery } from "@tanstack/react-query";

export const useUser = (userId?: string) => {
  const UserData = useQuery({
    ...userKeys.userData(userId),
    queryFn: () => userApi.user(userId),
  });

  return UserData;
};
