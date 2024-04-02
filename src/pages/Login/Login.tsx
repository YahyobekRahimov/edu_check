import { Form, Input, Button, App } from "antd";
import ThemeSwitcher from "../../components/ThemeSwitcher/ThemeSwitcher";
import axios from "axios";
import { setCookie } from "../../utils/cookies";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { message } = App.useApp();
  const navigate = useNavigate();
  const onFinish = async (values: string) => {
    setError("");
    setLoading(true);

    try {
      const baseURL = import.meta.env.VITE_API_BASE_URL;
      const response = await axios.post(
        `${baseURL}/api/login/token/`,
        values
      );
      setCookie("access_token", response.data.access_token, 10);
      setCookie("refresh_token", response.data.refresh_token, 10);
      setLoading(false);
      message.success("You are logged in");
      navigate("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
      // @ts-ignore
      setError(error.response.data.error);
    }
  };

  return (
    <div className="h-screen dark:bg-[var(--dark-background-800)]">
      <div className="hidden">
        <ThemeSwitcher />
      </div>
      <main className="text-black dark:text-[var(--white-text)] flex justify-center items-center h-full">
        <Form
          name="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          layout="vertical"
          className="w-[85%] md:max-w-md p-8 bg-white dark:bg-[var(--dark-background-900)] rounded-lg shadow-md flex flex-col gap-4"
        >
          <h2 className="text-2xl font-semibold mb-4 dark:text-[var(--white-text)]">
            Login
          </h2>
          <Form.Item
            className="dark:text-[var(--white-text)]"
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Iltimos, elektron pochta kiriting!",
              },
              {
                type: "email",
                message: "Iltimos, haqiqiy elektron pochta kiriting!",
              },
            ]}
            validateStatus={error ? "error" : "success"}
          >
            <Input autoFocus={true} />
          </Form.Item>

          <Form.Item
            className="dark:text-[var(--white-text)]"
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please, input your password!",
              },
            ]}
            validateStatus={error ? "error" : "success"}
          >
            <Input.Password />
          </Form.Item>

          <div className="text-red-500">{error}</div>

          <Form.Item className="dark:text-[var(--white-text)]">
            <Button
              loading={loading}
              type="primary"
              htmlType="submit"
              block
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </main>
    </div>
  );
}
