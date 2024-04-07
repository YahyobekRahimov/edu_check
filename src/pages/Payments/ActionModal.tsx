import { Form, InputNumber, Modal } from "antd";
import { useRef, useState } from "react";
import {
  setDeductionModal,
  setModalOpen,
} from "../../redux/ModalSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../hooks/redux-hooks";
import { App } from "antd";

export default function ActionModalComponent({
  addMoney,
  deductMoney,
}: {
  addMoney: (amount?: number, studentID?: number) => void;
  deductMoney: (amount?: number, studentID?: number) => void;
}) {
  const [inputValue, setInputValue] = useState<number | string>(0);
  const [isError, setIsError] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const numberInputRef = useRef(null);
  const { message, modal } = App.useApp();
  const isModalOpen = useAppSelector(
    (state) => state.ModalSlice.addPaymentModal.isOpen
  );
  const isDeductionModalOpen = useAppSelector(
    (state) => state.ModalSlice.deductionModal.isOpen
  );
  const studentData = useAppSelector(
    (state) => state.ModalSlice.userData
  );
  const handleOk = () => {
    handleSubmit(inputValue);
  };

  const handleCancel = () => {
    if (isModalOpen) {
      dispatch(setModalOpen(false));
    } else {
      dispatch(setDeductionModal(false));
    }
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

    modal.confirm({
      content: (
        <p className="dark:text-[rgba(255,255,255,0.85)]">
          <span className="font-semibold">{studentData.name}</span>
          ning balansidan{" "}
          <span
            className={`font-semibold  ${
              isModalOpen ? "text-green-600" : "text-red-500"
            }`}
          >
            {isModalOpen ? "+" : "-"}
            {amount.toLocaleString()}
          </span>{" "}
          so'mni olib tashlashga ishonchingiz komilmi?
        </p>
      ),
      onOk: () => {
        if (isModalOpen) {
          dispatch(setModalOpen(false));
          addMoney(Number(amount), studentData.id);
          message.success(
            `${
              studentData.name
            }ning balansiga ${amount.toLocaleString()} so'm tushdi`
          );
        } else if (isDeductionModalOpen) {
          dispatch(setDeductionModal(false));
          deductMoney(Number(amount), studentData.id);
          message.success(
            <div>
              {studentData.name}ning balansidan{" "}
              <span className="text-red-500 font-semibold">
                {amount.toLocaleString()} so'm
              </span>{" "}
              so'm olib tashlandi
            </div>
          );
        }
        setInputValue(0);
      },
      onCancel: () => {},
      okText: "Ha",
      cancelText: "Yo'q",
    });
  }
  return (
    <Modal
      title={
        isModalOpen ? (
          "To'lov qilish"
        ) : (
          <span className="text-[var(--ant-color-error)]">
            Hisobdan pul ayrish
          </span>
        )
      }
      open={isModalOpen || isDeductionModalOpen}
      afterOpenChange={() => {
        if (numberInputRef?.current) {
          // @ts-ignore
          numberInputRef.current.focus();
        }
      }}
      onOk={handleOk}
      onCancel={handleCancel}
      okText={isModalOpen ? "To'lov qilish" : "Pul ayrish"}
      cancelText="Bekor qilish"
      destroyOnClose={true}
      okButtonProps={{
        className: `${
          isModalOpen ? "" : "modal-button-danger-styles"
        }`,
        disabled: isError ? true : false,
      }}
    >
      <Form name="amount" onFinish={handleSubmit}>
        <Form.Item
          label="Summa"
          name="amount"
          rules={[
            {
              required: true,
              message: "Iltimos, summa kiriting",
            },

            {
              validator(_, value) {
                if (value <= 0) {
                  setIsError(true);
                  return Promise.reject(
                    "Iltimos, 0 dan katta raqam kiriting!"
                  );
                }
                setIsError(false);
                return Promise.resolve();
              },
            },
          ]}
          className="dark:text-white"
        >
          <InputNumber
            ref={numberInputRef}
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
