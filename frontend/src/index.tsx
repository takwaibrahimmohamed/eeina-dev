import { createRoot } from "react-dom/client";
import { App } from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";

createRoot(document.getElementById("app") as HTMLElement).render(
   <Provider store={store}>
      <App />
   </Provider>
);
