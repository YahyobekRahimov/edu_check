import { Form, InputNumber, Modal } from "antd";
import { useState } from "react";
import { removeLeadingZeros } from "../../utils/utils";

export default function ActionModal({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
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

  function handleSubmit(values: {}) {
    Modal.confirm({
      content: "Are you sure that you want to do this?",
      onOk: () => setIsModalOpen(false),
      onCancel: () => {},
    });
  }
  return (
    <Modal
      title="To'lov qilish"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form name="amount" onFinish={handleSubmit}>
        <Form.Item
          label="Summa"
          name="amount"
          rules={[
            { required: true, message: "Iltimos, summa kiriting" },
          ]}
          style={{ color: "white" }}
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
