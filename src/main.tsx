import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ConfigProvider
    theme={{
      cssVar: true,
      token: {
        colorPrimary: "#925FE2",
      },
      components: {
        Layout: {
          siderBg: `linear-gradient(0deg, #925FE2 80.26%, rgba(146, 95, 226, 0.00) 143.39%, #E2D4F7 143.39%)`,
        },
        Menu: {
          darkItemBg: "#925FE2",
        },
      },
    }}
  >
    <App />
  </ConfigProvider>
);
