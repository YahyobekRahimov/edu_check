import { Input, Modal } from "antd";
import {
  useAppDispatch,
  useAppSelector,
} from "../../hooks/redux-hooks";
import { setChangePasswordModal } from "../../redux/ModalSlice";
import { Form } from "antd";
import { useRef, useState } from "react";
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
  };
  const handleFinish = () => {};
  const handleOk = () => {
    handleFinish();
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
      >
        <Form.Item
          name="currentPassword"
          rules={[
            {
              required: true,
              message: "Iltimos, hozirgi parolingizni kiriting!",
            },
          ]}
        >
          <Input
            type="text"
            ref={currentPasswordRef}
            placeholder="Amaldagi parol"
          />
        </Form.Item>
        <Form.Item
          name="newPassword"
          rules={[
            {
              required: true,
              message: "Yangi parolingizni kiriting!",
            },
          ]}
        >
          <Input type="text" placeholder="Yangi parol" />
        </Form.Item>
        <Form.Item
          name="confirmNewPassword"
          rules={[
            {
              required: true,
              message: "Yangi parolni tasdiqlang!",
            },
          ]}
        >
          <Input type="text" placeholder="Yangi parolni tasdiqlang" />
        </Form.Item>
        <Form.Item rootClassName="hidden">
          <button type="submit"></button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
