import { Form, InputNumber, Modal, message } from "antd";
import { useState } from "react";
import { RowType } from "./DesktopTable";

export default function ActionModal({
  isModalOpen,
  setIsModalOpen,
  studentData,
}: {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  studentData: RowType;
}) {
  const [inputValue, setInputValue] = useState<number | string>(0);
  const handleOk = () => {
    handleSubmit(inputValue);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
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
        setIsModalOpen(false);
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
            defaultValue={0}
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
