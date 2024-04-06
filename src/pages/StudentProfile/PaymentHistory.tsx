import { Button, Table } from "antd";
import { ColumnType } from "antd/es/table";
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

interface paymentRowType {
  id: number;
  amount: number;
  time: string;
}

export default function PaymentHistory({
  studentData,
}: {
  studentData: any;
}) {
  // @ts-ignore
  const [dataSource, setDataSource] = useState(
    studentData.paymentsHistory
  );
  const dispatch = useAppDispatch();
  const columns: ColumnType<paymentRowType>[] = [
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
  return (
    <div>
      <div className="flex items-center flex-col gap-5 mb-5 justify-between text-2xl my-3">
        <div className="flex gap-7 items-center">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Balance:</span>
            <span
              className={`
          ${
            studentData.status == "paid"
              ? "text-green-500"
              : "text-red-500"
          }
        `}
            >
              {studentData.status == "paid"
                ? `+$${studentData.balance}`
                : `-$${studentData.balance}`}
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
        dataSource={dataSource}
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
      <ActionModalComponent />
      <SMSDrawer />
    </div>
  );
}
