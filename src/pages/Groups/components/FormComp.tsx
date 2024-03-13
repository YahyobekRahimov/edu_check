import {
  
  Form,
  Input,
 
} from "antd";

function FormComp() {
  return (
    <Form
      layout="vertical"
      style={{ maxWidth: "100%", width: "100%" }}
    >
      <Form.Item
        label={"Guruh nomi"}
        className="w-full mt-6 dark:text-[var(--white-text)]"
        name={"guruh"}
        rules={[{ required: true, message: "Please input!" }]}
      >
        <Input className="w-full" />
      </Form.Item>
    </Form>
  );
}

export default FormComp;
