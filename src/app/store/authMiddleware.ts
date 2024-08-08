import { Middleware } from "@reduxjs/toolkit";
import { logout } from "@/entities/login/model/loginSlice";
import { JwtPayload, jwtDecode } from "jwt-decode";

export const authMiddleware: Middleware = (store) => (next) => (action) => {
  const token = store.getState()?.auth?.accessToken;

  if (token) {
    try {
      const { exp } = jwtDecode<JwtPayload>(token);

      if (Date.now() >= (exp as number) * 1000) {
        store.dispatch(logout());
      }
    } catch (error) {
      console.error("Token decoding error", error);
    }
  }

  return next(action);
};
