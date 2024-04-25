import { Table } from "antd";
import { ColumnType } from "antd/es/table";
import StudentsJSON from "../../../../data/students.json";

interface paymentRowType {
  id: number;
  amount: number;
  time: string;
}

export default function GroupPaymentsHistory() {
  const balance = 500;
  const { paymentsHistory, name } = StudentsJSON[0];
  const columns: ColumnType<paymentRowType>[] = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "To'lov egasi",
      dataIndex: "paidBy",
      key: "paidBy",
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
    <div className="mb-24">
      <p className="text-2xl md:text-3xl text-center my-5">
        <span className="font-semibold">Group Balance: </span>
        <span
          className={balance >= 0 ? "text-green-500" : "text-red-500"}
        >
          {balance >= 0 ? "+" : "-"}
          {balance} so'm
        </span>
      </p>

      <div>
        <Table
          dataSource={paymentsHistory.map((payment) => ({
            ...payment,
            paidBy: name,
          }))}
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
    </div>
  );
}
