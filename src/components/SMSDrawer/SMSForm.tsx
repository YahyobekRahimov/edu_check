import { Form, Input, Button } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useRef } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../hooks/redux-hooks";
import { setSMSDrawer } from "../../redux/isPaymentModalOpenSlice";

const { TextArea } = Input;

const SMSForm = () => {
  const [form] = useForm();
  const dispatch = useAppDispatch();
  const textAreaRef = useRef(null);

  const isDrawerOpen = useAppSelector(
    (state) => state.isPaymentModalOpen.SMSDrawer.isOpen
  );

  if (isDrawerOpen && textAreaRef.current) {
    setTimeout(() => {
      // @ts-ignore
      textAreaRef.current.focus();
    }, 0);
  }

  const onFinish = (values: any) => {
    // Handle form submission here, such as sending the SMS message
    console.log("SMS content:", values.message);
    // Reset form fields after submission
    dispatch(setSMSDrawer(false));
    form.resetFields();
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item
        name="message"
        label="SMS Xabarni kiriting"
        rules={[
          { required: true, message: "Iltimos, xabarni kiriting" },
        ]}
      >
        <TextArea
          ref={textAreaRef}
          rows={4}
          placeholder="SMS xabar..."
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Yuborish
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SMSForm;
