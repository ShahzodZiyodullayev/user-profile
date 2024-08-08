import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { Root } from "./app/Root";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { worker } from "@/mocks/browser";

// worker.start();

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <Root />
    </Provider>
  </QueryClientProvider>,
);
