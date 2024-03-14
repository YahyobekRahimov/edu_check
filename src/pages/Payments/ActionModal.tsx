import { Form, InputNumber, Modal, message } from "antd";
import { useState } from "react";
import { RowType } from "./DesktopTable";
import { setPaymentModalOpen } from "../../redux/isPaymentModalOpenSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../hooks/redux-hooks";

export default function ActionModal({
  studentData,
}: {
  studentData: RowType;
}) {
  const [inputValue, setInputValue] = useState<number | string>(0);
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector(
    (state) => state.isPaymentModalOpen.addPaymentModal.isOpen
  );
  const handleOk = () => {
    handleSubmit(inputValue);
  };

  const handleCancel = () => {
    dispatch(setPaymentModalOpen(false));
  };

  const handleInputChange = (value: number | string | null) => {
    setInputValue(value ?? 0);
  };

  function handleSubmit(values: any) {
    let amount: string | number = "";
    if (values?.amount) {
      amount = values.amount;
    } else {
      amount = values;
    }

    Modal.confirm({
      content: (
        <p>
          <span className="font-semibold">{studentData.name}</span>
          ning balansiga{" "}
          <span className="font-semibold text-green-600">
            +{amount.toLocaleString()}
          </span>{" "}
          so'mni o'tkazib berishga ishonchingiz komilmi?
        </p>
      ),
      onOk: () => {
        dispatch(setPaymentModalOpen(false));
        setInputValue(0);
        message.success(
          `${
            studentData.name
          }ning balansiga ${amount.toLocaleString()} so'm tushdi`
        );
      },
      onCancel: () => {},
      okText: "Ha",
      cancelText: "Yo'q",
    });
  }
  return (
    <Modal
      title="To'lov qilish"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="To'lov qilish"
      cancelText="Bekor qilish"
      destroyOnClose={true}
    >
      <Form name="amount" onFinish={handleSubmit}>
        <Form.Item
          label="Summa"
          name="amount"
          rules={[
            { required: true, message: "Iltimos, summa kiriting" },
          ]}
          className="dark:text-white"
        >
          <InputNumber
            addonAfter="so'm"
            controls={false}
            size="large"
            placeholder="Summani kiriting"
            value={inputValue}
            onChange={handleInputChange}
            autoFocus={true}
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value!.replace(/\$\s?|(,*)/g, "")}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}
