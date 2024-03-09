import React, { ReactNode, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.jpg";
import HeaderComponent from "../components/Header/Header";

const { Header, Sider, Content } = Layout;

const App: ({ children }: { children: ReactNode }) => ReactNode = ({
  children,
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout
      style={{
        minHeight: "100vh",
        padding: "1.25rem",
        background: "white",
      }}
    >
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ borderRadius: "1rem" }}
      >
        <div className="demo-logo-vertical  flex justify-center items-center p-[2rem]">
          <img
            src={Logo}
            alt="Logo"
            className="w-[5rem] rounded-full"
          />
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              // icon: <Groups />,
              label: "Guruhlar",
              onClick: () => navigate("/"),
            },
            {
              key: "2",
              // icon: <Students />,
              label: "O'quvchilar",
              onClick: () => navigate("/students"),
            },
            {
              key: "3",
              // icon: <Payments />,
              label: "To'lovlar tarixi",
              onClick: () => navigate("/payments"),
            },
            {
              key: "4",
              label: "Profil sozlamalari",
              onClick: () => navigate("/settings"),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
          }}
        >
          <Button
            type="text"
            icon={
              collapsed ? (
                <MenuUnfoldOutlined />
              ) : (
                <MenuFoldOutlined />
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
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
