import { Table } from "antd";
import { ColumnsType } from "antd/es/table";

export default function Payments() {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
      render(_: any, record: any, index: any) {
        return index + 1;
      },
    },
    {
      title: "F.I.Sh",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Telefon raqam",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Guruh",
      dataIndex: "group",
      key: "group",
    },
    {
      title: "O'qituvchi",
      dataIndex: "teacher",
      key: "teacher",
    },
    {
      title: "Holat",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Balans",
      dataIndex: "balance",
      key: "balance",
    },
  ];
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
}
