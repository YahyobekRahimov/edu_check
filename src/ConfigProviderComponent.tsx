import { ConfigProvider } from "antd";
import { ReactNode } from "react";
import { useAppSelector } from "./hooks/redux-hooks";

export default function ConfigProviderComponent({
  children,
}: {
  children: ReactNode;
}) {
  const isDark = useAppSelector((state) => state.isDark);
  return (
    <ConfigProvider
      theme={{
        cssVar: true,
        token: {
          colorPrimary: `${isDark ? "#2b30ea" : "#925fe2"}`,
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
            colorIcon: `${isDark && "white"}`,
            colorFillQuaternary: `${isDark && "white"}`,
            colorTextQuaternary: `${isDark && "white"}`,
          },
          Form: {
            labelColor: "inherit",
          },
          Table: {
            rowHoverBg: "rgba(195, 157, 255, 0.274)",
            headerColor: "#925FE2",
          },
          DatePicker: {
            colorText: `${isDark && "var(--white-text)"}`,
            colorTextSecondary: `${isDark && "var(--white-text)"}`,
            colorTextTertiary: `${isDark && "var(--white-text)"}`,
            colorTextQuaternary: `${isDark && "var(--white-text)"}`,
            colorTextDisabled: `${
              isDark ? "rgba(255,255,255,0.3)" : "rgba(0, 0, 0, 0.5)"
            }`,
            colorTextBase: `${isDark && "var(--white-text)"}`,
            colorTextHeading: `${isDark && "var(--white-text)"}`,
            colorTextPlaceholder: `${isDark && "var(--white-text)"}`,
            colorTextDescription: `${isDark && "var(--white-text)"}`,

            colorIcon: `${isDark && "rgba(255,255,255,0.5)"}`,
            colorIconHover: `${isDark && "white"}`,

            cellHoverBg: `${isDark && "rgba(255,255,255,0.1)"}`,
          },
          Tabs: {
            colorText: `${isDark && "var(--white-text)"}`,
          },
          InputNumber: {
            colorBgContainer: `${
              isDark && "var(--dark-background-800)"
            }`,
          },
          Button: isDark
            ? {
                colorTextSecondary: "var(--white-text)",
                defaultHoverBg: "transparent",
                defaultColor: "var(--white-text)",
                defaultActiveBg: "transparent",
                colorTextDisabled: "rgba(255,255,255,0.3)",
                borderColorDisabled: "rgba(255,255,255,0.1)",
              }
            : {
                colorPrimaryBg: "var(--primary-color)",
                colorPrimary: "var(--primary-color)",
              },
          Divider: isDark
            ? {
                marginLG: 10,
                colorSplit: "rgba(255,255,255,0.3)",
              }
            : {
                marginLG: 10,
              },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
