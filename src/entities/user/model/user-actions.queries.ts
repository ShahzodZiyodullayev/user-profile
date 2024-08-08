import { userApi } from "@/shared/api/user";
import { useMutation } from "@tanstack/react-query";
import { setUser } from "./userSlice";
import { useDispatch } from "react-redux";

export const useUserActions = () => {
  const dispatch = useDispatch();

  const updateUser = useMutation({
    mutationFn: (value: FormData) => userApi.userUpdate(value),
    onSuccess: ({ data }) => {
      dispatch(setUser(data));
    },
  });

  return {
    updateUser,
  };
};
