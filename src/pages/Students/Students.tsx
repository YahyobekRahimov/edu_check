import { Table } from "antd";
import { ColumnType } from "antd/es/table";

export default function Students() {
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

  const columns: ColumnType<RowType> = [
    {
      title: "Ism",
      dataIndex: "name",
      key: "name",
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
      title: "Guruh",
      dataIndex: "group",
      key: "group",
    },
    {
      title: "Guruh",
      dataIndex: "group",
      key: "group",
    },
    {
      title: "Guruh",
      dataIndex: "group",
      key: "group",
    },
    {
      title: "Guruh",
      dataIndex: "group",
      key: "group",
    },
    {
      title: "Guruh",
      dataIndex: "group",
      key: "group",
    },
  ];

  return (
    <main>
      <Table dataSource={dataSource} columns={columns} />
    </main>
  );
}
