import LoginReducer from "@/entities/login/model/loginSlice";
import UserReducer from "@/entities/user/model/userSlice";
import { configureStore } from "@reduxjs/toolkit";
import { authMiddleware } from "./authMiddleware";

export const store = configureStore({
  reducer: {
    auth: LoginReducer,
    user: UserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});

export type AppDispatch = typeof store.dispatch;
