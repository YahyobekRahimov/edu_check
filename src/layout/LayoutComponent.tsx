import React, { ReactNode, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.jpg";
import HeaderComponent from "../components/Header/Header";
import { useAppSelector } from "../hooks/redux-hooks";

const { Header, Sider, Content } = Layout;

const App: ({ children }: { children: ReactNode }) => ReactNode = ({
  children,
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const isDark = useAppSelector((state) => state.isDark);

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
        className="dark:bg-[var(--dark-background-800)]"
      >
        <div
          className={`demo-logo-vertical flex justify-center items-center py-[2rem] dark:bg-[var(--dark-background-800)] rounded-[1rem] dark:rounded-tr-none`}
          style={
            collapsed
              ? { paddingLeft: "0.5rem", paddingRight: "0.5rem" }
              : { paddingLeft: "2rem", paddingRight: "2rem" }
          }
        >
          <img
            src={Logo}
            alt="Logo"
            className="w-[70%] rounded-full"
          />
        </div>
        <Menu
          theme={isDark ? "dark" : "light"}
          mode="inline"
          defaultSelectedKeys={["1"]}
          className={` ${
            isDark ? "" : "bg-sidebar-menu-gradient"
          } text-white font-semibold dark:bg-[var(--dark-background-800)]`}
          items={[
            {
              key: "1",
              icon: (
                <svg
                  width={20}
                  height={20}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM17.3628 15.2332C20.4482 16.0217 22.7679 18.7235 22.9836 22H20C20 19.3902 19.0002 17.0139 17.3628 15.2332ZM15.3401 12.9569C16.9728 11.4922 18 9.36607 18 7C18 5.58266 17.6314 4.25141 16.9849 3.09687C19.2753 3.55397 21 5.57465 21 8C21 10.7625 18.7625 13 16 13C15.7763 13 15.556 12.9853 15.3401 12.9569Z"></path>
                </svg>
              ),
              label: "Guruhlar",
              onClick: () => navigate("/"),
            },
            {
              key: "2",
              icon: (
                <svg
                  width={20}
                  height={20}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2 0 9 12 16 22 10.1667V17.5H24V9L12 2ZM3.99902 13.4905V18.0001C5.82344 20.429 8.72812 22.0001 11.9998 22.0001 15.2714 22.0001 18.1761 20.429 20.0005 18.0001L20.0001 13.4913 12.0003 18.1579 3.99902 13.4905Z"></path>
                </svg>
              ),
              label: "O'quvchilar",
              onClick: () => navigate("/students"),
            },
            {
              key: "3",
              icon: (
                <svg
                  width={20}
                  height={20}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.0049 10.9998V19.9998C22.0049 20.5521 21.5572 20.9998 21.0049 20.9998H3.00488C2.4526 20.9998 2.00488 20.5521 2.00488 19.9998V10.9998H22.0049ZM22.0049 6.99979H2.00488V3.99979C2.00488 3.4475 2.4526 2.99979 3.00488 2.99979H21.0049C21.5572 2.99979 22.0049 3.4475 22.0049 3.99979V6.99979Z"></path>
                </svg>
              ),
              label: "To'lovlar tarixi",
              onClick: () => navigate("/payments"),
            },
            {
              key: "4",
              icon: (
                <svg
                  width={20}
                  height={20}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9.95401 2.2106C11.2876 1.93144 12.6807 1.92263 14.0449 2.20785C14.2219 3.3674 14.9048 4.43892 15.9997 5.07103C17.0945 5.70313 18.364 5.75884 19.4566 5.3323C20.3858 6.37118 21.0747 7.58203 21.4997 8.87652C20.5852 9.60958 19.9997 10.736 19.9997 11.9992C19.9997 13.2632 20.5859 14.3902 21.5013 15.1232C21.29 15.7636 21.0104 16.3922 20.6599 16.9992C20.3094 17.6063 19.9049 18.1627 19.4559 18.6659C18.3634 18.2396 17.0943 18.2955 15.9997 18.9274C14.9057 19.559 14.223 20.6294 14.0453 21.7879C12.7118 22.067 11.3187 22.0758 9.95443 21.7906C9.77748 20.6311 9.09451 19.5595 7.99967 18.9274C6.90484 18.2953 5.63539 18.2396 4.54272 18.6662C3.61357 17.6273 2.92466 16.4164 2.49964 15.1219C3.41412 14.3889 3.99968 13.2624 3.99968 11.9992C3.99968 10.7353 3.41344 9.60827 2.49805 8.87524C2.70933 8.23482 2.98894 7.60629 3.33942 6.99923C3.68991 6.39217 4.09443 5.83576 4.54341 5.33257C5.63593 5.75881 6.90507 5.703 7.99967 5.07103C9.09364 4.43942 9.7764 3.3691 9.95401 2.2106ZM11.9997 14.9992C13.6565 14.9992 14.9997 13.6561 14.9997 11.9992C14.9997 10.3424 13.6565 8.99923 11.9997 8.99923C10.3428 8.99923 8.99967 10.3424 8.99967 11.9992C8.99967 13.6561 10.3428 14.9992 11.9997 14.9992Z"></path>
                </svg>
              ),

              label: "Sozlamalar",
              onClick: () => navigate("/settings"),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
          }}
          className="bg-white mx-[1rem] dark:mx-0 dark:bg-[var(--dark-background-800)] flex items-center justify-between rounded-lg dark:rounded-none"
        >
          <Button
            type="text"
            icon={
              collapsed ? (
                <MenuUnfoldOutlined className="dark:text-[#4D79FF]" />
              ) : (
                <MenuFoldOutlined className="dark:text-[#4D79FF]" />
              )
            }
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
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
                  background: colorBgContainer,
                }
          }
          className="p-6"
        >
          <div
            style={{ borderRadius: borderRadiusLG }}
            className="my-6 mx-4 h-full overflow-auto dark:text-white dark:bg-[var(--dark-background-800)] min-h-[280px] max-h-screen"
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
