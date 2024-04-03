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
  const { setFieldsValue } = form;
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
          Qabul qiluvchining ismi:
        </span>
        <span>{receiverData.name}</span>
      </div>
      <div className="flex gap-3 items-center text-sm mb-10">
        <span className="font-semibold">Telefon raqami:</span>
        <span>{receiverData.phoneNumber}</span>
      </div>
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
      <div
        onClick={() =>
          setFieldsValue({
            "message": `Assalomu alaykum, o'quvchi. \n\nKelayotgan oy uchun kursga to'lovni qilishingizni eslatib o'taman.`,
          })
        }
        className="bg-[#f0efef] dark:bg-[var(--dark-background-800)] rounded-lg p-2 cursor-pointer"
      >
        Assalomu alaykum, o'quvchi. Kelayotgan oy uchun kursga
        to'lovni qilishingizni eslatib o'taman.
      </div>
    </div>
  );
};

export default SMSForm;
