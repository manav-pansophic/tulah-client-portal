import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Toastify } from "@pansophictech/toast";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <Toastify
        props={{
          position: "top-right",
          duration: 2000,
          expand: false,
          richColors: true,
          visibleToasts: 2,
        }}
      />
    </Provider>
  </StrictMode>
);
