import { useMutation } from "@tanstack/react-query";
import { authApi } from "@/shared/api/auth";
import { TLogin } from "@/shared/lib/types";
import { setLogin } from "./loginSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useAuthActions = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Login = useMutation({
    mutationFn: ({ email, password }: TLogin) =>
      authApi.login({ email, password }),
    onSuccess: (param) => {
      param.data && navigate("/home");
      dispatch(setLogin(param.data));
    },
  });

  return {
    Login,
  };
};
