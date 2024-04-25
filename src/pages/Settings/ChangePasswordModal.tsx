import { Input, Modal } from "antd";
import {
  useAppDispatch,
  useAppSelector,
} from "../../hooks/redux-hooks";
import { setChangePasswordModal } from "../../redux/ModalSlice";
import { Form } from "antd";
import { useRef } from "react";
import { useForm } from "antd/es/form/Form";

export default function ChangePasswordModal() {
  const dispatch = useAppDispatch();
  const [form] = useForm();
  const currentPasswordRef = useRef<any>(null);
  const isModalOpen = useAppSelector(
    (state) => state.ModalSlice.changePasswordModal.isOpen
  );

  const handleCancel = () => {
    dispatch(setChangePasswordModal(false));
    setTimeout(() => {
      form.resetFields();
    }, 1000);
  };
  const handleFinish = () => {
    console.log(form.getFieldsValue());
    dispatch(setChangePasswordModal(false));
    setTimeout(() => {
      form.resetFields();
    }, 1000);
  };
  const handleOk = () => {
    const errors = form.getFieldsError();
    const isError = errors.some((input) => input.errors.length > 0);
    if (!isError) {
      handleFinish();
    }
  };

  return (
    <Modal
      open={isModalOpen}
      title="Parolni o'zgartirish"
      onOk={handleOk}
      onCancel={handleCancel}
      okText="O'zgartirish"
      cancelText="Bekor qilish"
      afterOpenChange={() => currentPasswordRef?.current?.focus()}
    >
      <Form
        name="changingPassword"
        preserve={false}
        onFinish={handleFinish}
        form={form}
        className="mt-10"
      >
        <Form.Item
          name="currentPassword"
          rules={[
            {
              required: true,
              message: "Iltimos, hozirgi parolingizni kiriting!",
            },
            {
              min: 8,
              message:
                "Parol eng kamida 8 ta belgidan tashkil topgan!",
            },
          ]}
          hasFeedback
        >
          <Input.Password
            type="text"
            ref={currentPasswordRef}
            placeholder="Amaldagi parol"
          />
        </Form.Item>
        <Form.Item
          hasFeedback
          name="newPassword"
          rules={[
            {
              required: true,
              message: "Yangi parolingizni kiriting!",
            },
            {
              min: 8,
              message:
                "Yangi Parol eng kamida 8 ta belgidan tashkil topgan!",
            },
          ]}
        >
          <Input.Password type="text" placeholder="Yangi parol" />
        </Form.Item>
        <Form.Item
          hasFeedback
          name="confirmNewPassword"
          dependencies={["newPassword"]}
          rules={[
            {
              required: true,
              message: "Yangi parolni tasdiqlang!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (
                  !value ||
                  getFieldValue("newPassword") === value
                ) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error(
                    "Siz kiritgan yangi parol bir biriga tushmaydi!"
                  )
                );
              },
            }),
            {
              min: 8,
              message:
                "Parol eng kamida 8 ta belgidan tashkil topgan!",
            },
          ]}
        >
          <Input.Password
            type="text"
            placeholder="Yangi parolni tasdiqlang"
          />
        </Form.Item>
        <Form.Item rootClassName="hidden">
          <button type="submit"></button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
