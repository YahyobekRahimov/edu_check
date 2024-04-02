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
  const status: "paid" | "unpaid" = "paid";
  const dataSource = StudentsJSON[0].paymentsHistory;
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
    <div className="mb-24">
      <p className="text-2xl md:text-3xl text-center my-5">
        <span className="font-semibold">Group Balance: </span>
        <span
          className={
            status == "paid" ? "text-green-500" : "text-red-500"
          }
        >
          {status == "paid" ? "+" : "-"}${balance}
        </span>
      </p>

      <div>
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
    </div>
  );
}
