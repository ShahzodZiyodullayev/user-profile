import { createBrowserRouter, Navigate } from "react-router-dom";
import { BaseLayout } from "./layouts/base-layout";
import { Registration } from "@/pages/registration";
import { ReactElement } from "react";
import { Profile } from "@/pages/profile";
import { EditProfile } from "@/pages/edit-profile";
import { useDispatch, useSelector } from "react-redux";
import { TSession } from "@/shared/lib/types";
import { logout } from "@/entities/login/model";

type AuthGuardProps = {
  children: ReactElement;
};

function AuthGuard({ children }: AuthGuardProps) {
  const { auth } = useSelector((state: { auth: TSession }) => state);

  const isAuthenticated = auth.isAuthenticated;

  if (!isAuthenticated) {
    const dispatch = useDispatch();
    dispatch(logout());
    return <Navigate to="login" />;
  }

  return children;
}

export const Router = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="home" />, // Root yo'lini /home'ga yo'naltirish
    },
    {
      // element: baseLayout,
      // errorElement: <div>Error happened</div>,
      // loader: async () => {
      //   return await featureToggleLoader(appStore.dispatch);
      // },
      children: [
        {
          path: "login",
          element: <Registration />,
        },
      ],
    },
    {
      element: (
        <AuthGuard>
          <BaseLayout />
        </AuthGuard>
      ),
      errorElement: <div>error</div>,
      children: [
        {
          path: "home",
          element: <Profile />,
        },
        {
          path: "edit-profile",
          element: <EditProfile />,
        },
      ],
    },
  ]);
};
