import { Tabs } from "antd";
import { TabsProps } from "antd/lib";
import OpenGroupsHeader from "./components/OpenGroupsHeader";
import OpenGroups from "./OpenGroups";

export default function () {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Ochiq guruhlar",
      children: (
        <>            
          <OpenGroupsHeader></OpenGroupsHeader>
          <OpenGroups />
        </>
      ),
    },
    {
      key: "2",
      label: "Yopilgan guruhlar",
      children: <div>Yopilgan guruhlar</div>,
    },
  ];

  return (
    <Tabs
      className="custom-tab-423 custom-tab-sticky"
      items={items}
      defaultActiveKey="1"
      centered={true}
    ></Tabs>
  );
}
