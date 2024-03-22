import { Table } from "antd";
import { ColumnType } from "antd/es/table";

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
  const dataSource = studentData.paymentsHistory;
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
  return (
    <div>
      <div className="flex items-center gap-2 text-2xl my-3">
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
    </div>
  );
}
