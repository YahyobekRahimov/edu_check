import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import en_US from "antd/locale/en_US";
import { App as AntApp } from "antd";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AntApp>
    <ConfigProvider
      locale={en_US}
      theme={{
        cssVar: true,
        token: {
          colorPrimary: "#925FE2",
          fontFamily: "Poppins",
        },
        components: {
          Layout: {
            siderBg: `rgb(51, 65, 85)`,
            lightSiderBg:
              "linear-gradient(0deg, #925FE2 80.26%, rgba(146, 95, 226, 0.00) 143.39%, #E2D4F7 143.39%)",
          },
          Menu: {
            darkItemBg: "rgb(51, 65, 85)",
            itemHoverBg: "#a771ff",
            darkItemHoverBg: "rgb(73, 89, 111)",
            darkItemSelectedBg: "#2b30ea",
            colorText: "white",
          },
          Select: {
            selectorBg: "white",
            colorText: "black",
          },
          Form: {
            labelColor: "inherit",
          },
          Table: {
            rowHoverBg: "rgba(195, 157, 255, 0.274)",
            headerColor: "#925FE2",
          },
        },
      }}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </ConfigProvider>
  </AntApp>
);
