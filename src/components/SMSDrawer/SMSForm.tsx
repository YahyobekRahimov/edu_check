import { Form, Input, Button, App } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useRef, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../hooks/redux-hooks";
import { setSMSDrawer } from "../../redux/ModalSlice";
import { PlusOutlined } from "@ant-design/icons";
import TemplateInput from "./TemplateInput";

const { TextArea } = Input;

const SMSForm = () => {
  const [templateMessages, setTemplateMessages] = useState<string[]>(
    []
  );
  const [form] = useForm();
  const { setFieldsValue } = form;
  const dispatch = useAppDispatch();
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const { message, modal } = App.useApp();

  const receiverData = useAppSelector(
    (state) => state.ModalSlice.userData
  );

  const onFinish = (values: any) => {
    // Handle form submission here, such as sending the SMS message
    console.log("SMS content:", values.message);
    // Reset form fields after submission
    modal.confirm({
      content: (
        <div>
          Shu SMSni {receiverData.name}ga jo'natishga ishonchingiz
          komilmi?
        </div>
      ),
      okText: "Ha",
      cancelText: "Yo'q",
      onOk: () => {
        message.success(
          `${receiverData.name}ga xabaringiz yuborildi`
        );
        dispatch(setSMSDrawer(false));
        form.resetFields();
      },
      onCancel: () => {},
    });
  };

  const handleAddTemplate = () => {
    setTemplateMessages([...templateMessages, ""]);
  };

  const handleDeleteTemplate = (message: string) => {
    const index = templateMessages.lastIndexOf(message);
    let newArr = [...templateMessages];
    newArr.splice(index, 1);
    setTemplateMessages(newArr);
  };

  const handleUpdateTemplate = (
    prevMessage: string,
    newMessage: string
  ) => {
    let newArr = [...templateMessages];
    const index = newArr.lastIndexOf(prevMessage);
    newArr.splice(index, 1, newMessage);
    setTemplateMessages(templateMessages);
  };

  const handleSetMessage = (message: string) => {
    setFieldsValue({
      message: message,
    });
  };

  return (
    <div className="dark:text-[rgba(255,255,255,0.85)] z-20">
      <div className="flex gap-3 items-center text-sm my-2">
        <span className="font-semibold">Qabul qiluvchi:</span>
        <span>{receiverData.name}</span>
      </div>
      {receiverData.phoneNumber ? (
        <div className="flex gap-3 items-center text-sm mb-10">
          <span className="font-semibold">Telefon raqami:</span>
          <span>{receiverData.phoneNumber}</span>
        </div>
      ) : (
        ""
      )}

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
            rows={5}
            placeholder="SMS xabar..."
          />
        </Form.Item>
        <div className="flex items-center justify-between">
          <Form.Item>
            <Button htmlType="reset">O'chirish</Button>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Yuborish
            </Button>
          </Form.Item>
        </div>
      </Form>
      <div>
        <Button
          type="primary"
          className="block ml-auto mb-5"
          onClick={handleAddTemplate}
        >
          <PlusOutlined className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        {templateMessages.map((message, index) => (
          <TemplateInput
            handleSetMessage={handleSetMessage}
            message={message}
            index={index}
            handleDeleteTemplate={handleDeleteTemplate}
            handleUpdateTemplate={handleUpdateTemplate}
          />
        ))}
      </div>
    </div>
  );
};

export default SMSForm;
