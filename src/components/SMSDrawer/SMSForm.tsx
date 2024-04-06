import { Form, Input, Button, App } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useRef } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../hooks/redux-hooks";
import { setSMSDrawer } from "../../redux/ModalSlice";

const { TextArea } = Input;

const SMSForm = () => {
  const [form] = useForm();
  const dispatch = useAppDispatch();
  const textAreaRef = useRef(null);
  const { message, modal } = App.useApp();

  const isDrawerOpen = useAppSelector(
    (state) => state.ModalSlice.SMSDrawer.isOpen
  );
  const receiverData = useAppSelector(
    (state) => state.ModalSlice.userData
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

  return (
    <div className="dark:text-[rgba(255,255,255,0.85)] z-20">
      <div className="flex gap-3 items-center text-sm my-2">
        <span className="font-semibold">
          Qabul qiluvchi:
        </span>
        <span>{receiverData.name}</span>
      </div>
      { receiverData.phoneNumber ? 
       <div className="flex gap-3 items-center text-sm mb-10">
        <span className="font-semibold">Telefon raqami:</span>
        <span>{receiverData.phoneNumber}</span>
      </div> : ""
      }
      
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
    </div>
  );
};

export default SMSForm;
