import { Switch, Table } from "antd";
export default function Group() {
  const colums = [
    {
      title: "F.I.Sh",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "To'lovlar",
      dataIndex: "payments",
      key: "payments",
    },
    {
      title: "Davomat",
      dataIndex: "davomat",
      key: "davomat",
      render: () => {
        return <Switch  defaultChecked />;
      },
    },
  ];
  const data = [
    {
      fullName: "Rustamov D",
      payments: "ok",
    },
  ];
  return (
    <>
      <div className="bg-[var(--dark-backround)] w-full">
        <Table columns={colums} dataSource={data} />
      </div>
    </>
  );
}
