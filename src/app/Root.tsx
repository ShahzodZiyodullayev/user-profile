import { RouterProvider } from "react-router-dom";
import { Router } from "./app-router";
import { withProviders } from "./prooviders";

const _Root = () => {
  document.addEventListener("wheel", () => {
    const activeElement = document.activeElement as HTMLInputElement;
    if (activeElement && activeElement.type === "number") {
      activeElement.blur();
    }
  });

  return <RouterProvider router={Router()} />;
};

export const Root = withProviders(_Root);
