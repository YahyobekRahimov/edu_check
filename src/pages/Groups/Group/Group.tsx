import { Tabs } from "antd";
import GroupAttendance from "./GroupAttendance/GroupAttendance";
import { TabsProps } from "antd/lib";
import AboutGroup from "./AboutGroup/AboutGroup";
import OnlineDars from "./OnlineDars/OnlineDars";
import JurnalJurnal from "./Jurnal/Jurnal";

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
      label: "Jurnal",
      children: <JurnalJurnal />,
    },
    {
      key: "4",
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
        />
      </div>
    </>
  );
}
