import { ReactNode, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Layout, Button, theme } from "antd";
import HeaderComponent from "../components/Header/Header";
import { useAppSelector } from "../hooks/redux-hooks";
import BottomNavigation from "./BottomNavigation/BottomNavigation";
import SideBar from "./SideBar/SideBar";
import { getCookie } from "../utils/cookies";

const { Header, Sider, Content } = Layout;

const App: ({ children }: { children: ReactNode }) => ReactNode = ({
  children,
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { borderRadiusLG },
  } = theme.useToken();
  const isDark = useAppSelector((state) => state.isDark);
  if (getCookie("access_token") || getCookie("refresh_token"))
    return (
      <Layout
        style={{
          padding: "1.25rem",
          height: "100vh",
        }}
        className="dark:bg-[var(--dark-background-900)]"
      >
        <Sider
          theme={isDark ? "dark" : "light"}
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{ borderRadius: borderRadiusLG }}
          className="dark:bg-[var(--dark-background-800)] lg:block hidden"
        >
          <SideBar collapsed={collapsed} />
        </Sider>
        <BottomNavigation />
        <Layout>
          <Header
            style={
              isDark
                ? {
                    background: "var(--dark-background-800)",
                    padding: 0,
                  }
                : {
                    padding: 0,
                  }
            }
            className="bg-header-gradient min-h-[64px] md:ml-[1.5rem] dark:p-0 py-2 dark:mx-0 flex items-center justify-between rounded-lg dark:rounded-none"
          >
            <Button
              type="text"
              icon={
                collapsed ? (
                  <MenuUnfoldOutlined className="text-white dark:text-[#4D79FF]" />
                ) : (
                  <MenuFoldOutlined className="text-white dark:text-[#4D79FF]" />
                )
              }
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
              className="hidden lg:block"
            />
            <HeaderComponent />
          </Header>
          <Content
            style={
              isDark
                ? {
                    background: "var(--dark-background-900)",
                  }
                : {
                    background: "#f5f5f5",
                  }
            }
            className="md:pl-6 pt-6"
          >
            <div
              style={{
                borderRadius: borderRadiusLG,
              }}
              className="h-full bg-white overflow-auto scrollToTopNow dark:text-white dark:bg-[var(--dark-background-800)] min-h-[280px] max-h-screen pb-20 lg:p-0"
            >
              {children}
            </div>
          </Content>
        </Layout>
      </Layout>
    );
};

export default App;
