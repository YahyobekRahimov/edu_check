import { Tabs, TabsProps } from "antd";
import ChartPayments from "./ChartPayments/ChartPayments";

export default function Report() {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "To'lovlar statistikasi",
      children: <ChartPayments />,
    },
    {
      key: "2",
      label: "Nimadur",
      children: "Qandaydur chart",
    },
    {
      key: "3",
      label: "Yana nimadur",
      children: <div>Yana nimadur</div>,
    },
  ];
  const onChange = () => {};
  return (
    <Tabs
      className="overflow-x-hidden custom-tab-423"
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
      centered={true}
    />
  );
}
