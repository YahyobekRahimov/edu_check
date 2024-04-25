import { App, DatePicker, Input, Modal } from "antd";
import {
  useAppDispatch,
  useAppSelector,
} from "../../hooks/redux-hooks";
import { setChangeInfoModal } from "../../redux/ModalSlice";
import { Form } from "antd";
import { useEffect, useRef } from "react";
import { useForm } from "antd/es/form/Form";
import dayjs from "dayjs";
import { setCurrentUser } from "../../redux/currentUserSlice";

export default function ChangeInfoModal() {
  const dispatch = useAppDispatch();
  const [form] = useForm();
  const { modal, message } = App.useApp();
  const currentPasswordRef = useRef<any>(null);
  const currentUser = useAppSelector((state) => state.currentUser);
  const isModalOpen = useAppSelector(
    (state) => state.ModalSlice.changeInfoModal.isOpen
  );
  const { birthDate, firstName, lastName } = useAppSelector(
    (state) => state.currentUser
  );

  useEffect(() => {
    form.setFieldsValue({
      firstName: firstName,
      lastName: lastName,
      birthDate: dayjs(birthDate, "YYYY-MM-DD"),
    });
  }, []);

  const handleCancel = () => {
    dispatch(setChangeInfoModal(false));
  };
  const handleFinish = () => {
    const fieldsValue = form.getFieldsValue();
    modal.confirm({
      content: "Ma'lumotlarni o'zgartirishga ishonchingiz komilmi?",
      okText: "Ha",
      cancelText: "Yo'q",
      onOk: () => {
        let birth_date = dayjs(fieldsValue.birthDate).format(
          "YYYY-MM-DD"
        );
        if (birth_date === "Invalid Date") {
          birth_date = "";
        }
        dispatch(
          setCurrentUser({
            ...currentUser,
            firstName: fieldsValue.firstName,
            lastName: fieldsValue.lastName,
            birthDate: birth_date,
          })
        );
        dispatch(setChangeInfoModal(false));
        message.success("Profil ma'lumotlari o'zgardi!");
      },
    });
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
      title="Profilni tahrirlash"
      onOk={handleOk}
      onCancel={handleCancel}
      okText="O'zgartirish"
      cancelText="Bekor qilish"
      afterOpenChange={() => currentPasswordRef?.current?.focus()}
    >
      <Form
        name="changingInfo"
        preserve={false}
        onFinish={handleFinish}
        form={form}
        className="mt-10"
      >
        <Form.Item
          name="firstName"
          rules={[
            {
              required: true,
              message: "Iltimos, ismingizni kiriting!",
            },
          ]}
          hasFeedback
        >
          <Input
            type="text"
            ref={currentPasswordRef}
            placeholder="Ism"
          />
        </Form.Item>
        <Form.Item hasFeedback name="lastName">
          <Input type="text" placeholder="Familiya" />
        </Form.Item>
        <Form.Item hasFeedback name="birthDate">
          <DatePicker placeholder="Tug'ilgan sanangiz" />
        </Form.Item>
        <Form.Item rootClassName="hidden">
          <button type="submit"></button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
