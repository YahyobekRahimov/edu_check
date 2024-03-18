import { Tabs, TabsProps } from "antd";
import { useAppSelector } from "../../hooks/redux-hooks";

export default function StudentProfile() {
  const { name, phoneNumber, teacher, birthDate, group, status } =
    useAppSelector((state) => state.currentStudent);
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Tab 1",
      children: "Cont",
    },
    {
      key: "2",
      label: "Tab 2",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "Tab 3",
      children: "Content of Tab Pane 3",
    },
  ];
  const onChange = () => {};
  return (
    <div className="p-4 flex  ">
      <div className="flex flex-col gap-10">
        <div className="max-w-[200px] max-h-[200px] overflow-hidden rounded-full select-none pointer-events-none">
          <img src="https://picsum.photos/300/300" alt={name} />
        </div>
        <div className="h-max w-full">
          <ul className="grid text-lg w-full gap-[2rem]">
            <li className="text-nowrap">
              <span className="font-semibold ">Ism Familiya:</span>{" "}
              {name}
            </li>
            <li className="text-nowrap">
              <span className="font-semibold"> O'qituvchi:</span>{" "}
              {teacher}
            </li>
            <li className="text-nowrap">
              <span className="font-semibold">Telefon:</span>{" "}
              {phoneNumber}
            </li>
            <li>
              <span className="font-semibold">Tugilgan:</span>{" "}
              {birthDate}
            </li>
            <li>
              <span className="font-semibold">Holat:</span>{" "}
              {status == "paid" ? "To'langan" : "Qarzi bor"}
            </li>
            <li>
              <span className="font-semibold">Guruhi:</span> {group}
            </li>
          </ul>
        </div>
      </div>
      <Tabs
        className="w-full"
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
      />
      ;
    </div>
  );
}
