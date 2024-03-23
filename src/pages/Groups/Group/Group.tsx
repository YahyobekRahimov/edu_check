import { Switch, Tabs } from "antd";
import GroupAttendance from "./GroupAttendance/GroupAttendance";
import { TabsProps } from "antd/lib";
import AboutGroup from "./AboutGroup/AboutGroup";
import OnlineDars from "./OnlineDars/OnlineDars";
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
        return <Switch />;
      },
    },
  ];
  const data = [
    {
      fullName: "Rustamov D",
      payments: "ok",
    },
  ];
  const items: TabsProps["items"] = [
    {
      key: "8",
      label: "Guruh haqida",
      children: <AboutGroup />,
    },
    {
      key: "1",
      label: "Davomat",
      children: <GroupAttendance />,
    },
    {
      key: "2",
      label: "Darslar",
      children: <OnlineDars />,
    },
    {
      key: "3",
      label: "To'lovlar tarixi",
      children: <div>To'lovlar tarixi</div>,
    },
  ];
  const onChange = () => {};
  return (
    <>
      <div className="bg-[var(--dark-backround)] w-full">
        {/* <Table columns={colums} dataSource={data} /> */}
        <Tabs
          className="overflow-x-hidden custom-tab-423"
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
        />
      </div>
    </>
  );
}
