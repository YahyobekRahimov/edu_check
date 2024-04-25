import { Button, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useState } from "react";
import { useAppDispatch } from "../../hooks/redux-hooks";
import {
  setDeductionModal,
  setModalData,
  setModalOpen,
  setSMSDrawer,
} from "../../redux/ModalSlice";
import ActionModalComponent from "../Payments/ActionModal";
import SMSDrawer from "../../components/SMSDrawer/SMSDrawer";
import { getCurrentDateTime } from "../../utils/utils";

interface paymentRowType {
  key: string | number;
  id: number;
  amount: number;
  time: string;
}

type StudentType = {
  id: number;
  key: string;
  name: string;
  phoneNumber: string;
  group: string;
  teacher: string;
  birthDate: string;
  status: string;
  balance: number;
  paymentsHistory: {
    key: string | number;
    id: number;
    time: string;
    amount: number;
  }[];
};

export default function PaymentHistory({
  studentData,
}: {
  studentData: any;
}) {
  const [dataSource, setDataSource] =
    useState<StudentType>(studentData);
  const dispatch = useAppDispatch();
  const columns: ColumnsType<paymentRowType> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Qiymati",
      dataIndex: "amount",
      key: "amount",
      sorter: (a: paymentRowType, b: paymentRowType) =>
        a.amount - b.amount,
    },
    {
      title: "Vaqti",
      dataIndex: "time",
      key: "time",
      sorter: (a: paymentRowType, b: paymentRowType) =>
        a.time.localeCompare(b.time),
    },
  ];

  const handlePayment = () => {
    dispatch(setModalOpen(true));
    dispatch(setModalData(studentData));
  };
  const handleDeduction = () => {
    dispatch(setModalData(studentData));
    dispatch(setDeductionModal(true));
  };
  const handleSMS = () => {
    dispatch(setModalData(studentData));
    dispatch(setSMSDrawer(true));
  };

  const addMoney = (amount?: number) => {
    if (amount) {
      const newPayment = {
        id: Date.now(),
        key: Date.now(),
        amount: amount,
        time: getCurrentDateTime(),
      };
      setDataSource({
        ...dataSource,
        balance: dataSource.balance + amount,
        paymentsHistory: [newPayment, ...dataSource.paymentsHistory],
      });
    }
  };

  console.log(dataSource);
  const deductMoney = (amount?: number) => {
    if (amount) {
      const newPayment = {
        id: Date.now(),
        key: Date.now(),
        amount: amount * -1,
        time: getCurrentDateTime(),
      };
      setDataSource({
        ...dataSource,
        balance: dataSource.balance - amount,
        paymentsHistory: [newPayment, ...dataSource.paymentsHistory],
      });
    }
  };
  return (
    <div>
      <div className="flex items-center flex-col gap-5 mb-5 justify-between text-2xl my-3">
        <div className="flex gap-7 items-center">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Balance:</span>
            <span
              className={`
          ${
            dataSource.balance >= 0
              ? "text-green-500"
              : "text-red-500"
          }
        `}
            >
              {dataSource.balance >= 0
                ? `+${dataSource.balance.toLocaleString()}`
                : dataSource.balance.toLocaleString()}
            </span>
          </div>
          <Button type="primary" onClick={handleSMS}>
            SMS
          </Button>
        </div>
        <div className="flex items-center gap-5 justify-between">
          <Button onClick={handlePayment} type="primary">
            To'lov qo'shish
          </Button>
          <Button
            danger={true}
            onClick={handleDeduction}
            type="default"
          >
            Pul ayrish
          </Button>
        </div>
      </div>
      <Table
        dataSource={dataSource.paymentsHistory}
        columns={columns}
        pagination={false}
        // @ts-ignore
        onRow={(record, rowIndex) => ({
          onClick: () => {
            console.log("row click");
          },
        })}
        className="cursor-pointer"
        sticky
      />
      <ActionModalComponent
        addMoney={addMoney}
        deductMoney={deductMoney}
      />
      <SMSDrawer />
    </div>
  );
}
