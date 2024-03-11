import { Form, Input, Button, message } from "antd";
import ThemeSwitcher from "../../components/ThemeSwitcher/ThemeSwitcher";

export default function Login() {
  const onFinish = (values: string) => {
    console.log("Received values:", values);
    message.success("You are logged in");
    // Here you can handle login logic, such as API calls, authentication, etc.
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
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            className="dark:text-[var(--white-text)]"
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item className="dark:text-[var(--white-text)]">
            <Button type="primary" htmlType="submit" block>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </main>
    </div>
  );
}
