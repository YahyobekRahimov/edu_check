import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import { App as AntApp } from "antd";
import ConfigProviderComponent from "./ConfigProviderComponent.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AntApp>
    <Provider store={store}>
      <ConfigProviderComponent>
        <App />
      </ConfigProviderComponent>
    </Provider>
  </AntApp>
);
