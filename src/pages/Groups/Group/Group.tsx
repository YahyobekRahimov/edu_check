import { Tabs } from "antd";
import GroupAttendance from "./GroupAttendance/GroupAttendance";
import { TabsProps } from "antd/lib";
import AboutGroup from "./AboutGroup/AboutGroup";
import OnlineDars from "./OnlineDars/OnlineDars";
export default function Group() {
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
