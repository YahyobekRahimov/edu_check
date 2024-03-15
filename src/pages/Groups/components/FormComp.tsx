import { DatePicker, Form, Input, Radio, Select } from "antd";

function FormComp() {
  return (
    <Form
    id="guruhQosh"
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
      <Form.Item
        label="Kurslar"
        name="kurslar"
        rules={[{ required: true, message: "Please input!" }]}
      >
        <Select>
          <Radio value="a">Inglis-tili</Radio>
          <Radio value="b">Rus-tili</Radio>
          <Radio value="c">Matimatika</Radio>
          <Radio value="d">Fizika</Radio>
        </Select>
      </Form.Item>
      <Form.Item
        label="O'qituvchi"
        name="teacher"
        rules={[{ required: true, message: "Please input!" }]}
      >
        <Select>
          <Radio value="a">Teshaboyev A</Radio>
        </Select>
      </Form.Item>
      <Form.Item
        label="Ochilgan sana"
        rules={[{ required: true, message: "Please input!" }]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        label="Xonalar"
        name="rooms"
        rules={[{ required: true, message: "Please input!" }]}
      >
        <Select>
          <Radio value="a">4/203</Radio>
          <Radio value="b">3/405</Radio>
          <Radio value="c">4/102</Radio>
        </Select>
      </Form.Item>
    </Form>
  );
}

export default FormComp;
