import { Tabs, TabsProps } from "antd";
import { useLocation } from "react-router-dom";
import StudentsJSON from "../../data/students.json";
import PaymentHistory from "./PaymentHistory";

export default function StudentProfile() {
  const location = useLocation();
  const studentID = location.pathname.split("/").at(-1);
  const studentData = StudentsJSON.find(
    (student) => student.id == studentID
  );
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "To'lovlar",
      children: <PaymentHistory />,
    },
    {
      key: "2",
      label: "Ballar",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "Davomat",
      children: "Content of Tab Pane 3",
    },
    {
      key: "4",
      label: "Natijalar",
      children: "Content of Tab Pane 3",
    },
  ];
  const onChange = () => {};
  return (
    <div className="p-4 flex  ">
      <div className="flex flex-col gap-10">
        <div className="max-w-[200px] max-h-[200px] overflow-hidden rounded-full select-none pointer-events-none">
          <img
            src="https://picsum.photos/300/300"
            alt={studentData?.name}
          />
        </div>
        <div className="h-max w-full">
          <ul className="grid text-lg w-full gap-[2rem]">
            <li className="text-nowrap">
              <span className="font-semibold ">Ism Familiya:</span>{" "}
              {studentData?.name}
            </li>
            <li className="text-nowrap">
              <span className="font-semibold"> O'qituvchi:</span>{" "}
              {studentData?.teacher}
            </li>
            <li className="text-nowrap">
              <span className="font-semibold">Telefon:</span>{" "}
              {studentData?.phoneNumber}
            </li>
            <li>
              <span className="font-semibold">Tugilgan:</span>{" "}
              {"2004-02-03"}
            </li>
            <li>
              <span className="font-semibold">Holat:</span>{" "}
              {studentData?.status == "paid"
                ? "To'langan"
                : "Qarzi bor"}
            </li>
            <li>
              <span className="font-semibold">Guruhi:</span>{" "}
              {studentData?.group}
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
    </div>
  );
}
