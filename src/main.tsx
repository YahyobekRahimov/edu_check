import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import store from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ConfigProvider
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
          darkItemBg: "#925FE2",
          colorText: "white",
        },
      },
    }}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </ConfigProvider>
);
