import { Tabs } from "antd";
import GroupAttendance from "./GroupAttendance/GroupAttendance";
import { TabsProps } from "antd/lib";
import AboutGroup from "./AboutGroup/AboutGroup";
import OnlineDars from "./OnlineDars/OnlineDars";
import JurnalJurnal from "./Jurnal/Jurnal";
import GroupStudents from "./GroupStudents/GroupStudents";

export default function Group() {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Guruh haqida",
      children: <AboutGroup />,
    },
    {
      key: "2",
      label: "O'quvchilar",
      children: <GroupStudents />,
    },
    {
      key: "3",
      label: "Davomat",
      children: <GroupAttendance />,
    },
    {
      key: "4",
      label: "Darslar",
      children: <OnlineDars />,
    },
    {
      key: "5",
      label: "Jurnal",
      children: <JurnalJurnal />,
    },
    {
      key: "6",
      label: "To'lovlar tarixi",
      children: <div>tolovlar</div>,
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
          centered={true}
        />
      </div>
    </>
  );
}
