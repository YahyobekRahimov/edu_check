import { Skeleton, Tabs, TabsProps } from "antd";
import { useLocation } from "react-router-dom";
import StudentsJSON from "../../data/students.json";
import PaymentHistory from "./PaymentHistory";
import CheckAttendance from "./CheckAttendance";
import Results from "./Results";
import { useEffect, useState } from "react";
import { scrollToTop } from "../../utils/utils";

export default function StudentProfile() {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const location = useLocation();
  const studentID: number = Number(
    location.pathname.split("/").at(-1)
  );
  const studentData = StudentsJSON.find(
    (student) => student.id == studentID
  );
  let defaultValue = "1";
  if (location.state?.defaultValue === "payments") {
    defaultValue = "1";
  } else {
    defaultValue = "3";
  }
  useEffect(() => {
    scrollToTop(false);
  }, []);
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "To'lovlar",
      children: <PaymentHistory studentData={studentData} />,
    },
    {
      key: "3",
      label: "Davomat",
      children: <CheckAttendance />,
    },
    {
      key: "4",
      label: "Natijalar",
      children: <Results />,
    },
  ];
  const onChange = () => {};
  return (
    <div className="p-2 xs:p-5 lg:p-10 flex flex-col gap-10 md:flex-row scrollToTopNow">
      <div className="flex flex-col gap-10">
        <div className="max-w-[200px] max-h-[200px] overflow-hidden rounded-full select-none pointer-events-none">
          <img
            src="https://picsum.photos/300/300"
            alt={studentData?.name}
            onLoad={() => setImageLoaded(true)}
          />
          <Skeleton.Avatar
            active={!imageLoaded}
            size={"large"}
            shape="circle"
            style={{ width: "200px", height: "200px" }}
          />
        </div>
        <div className="dark:text-[var(--white-text)]">
          <ul className="grid text-lg gap-[1rem]">
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
              <span className="font-semibold">Tug'ilgan:</span>{" "}
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
        className="overflow-x-hidden"
        defaultActiveKey={defaultValue}
        items={items}
        onChange={onChange}
      />
    </div>
  );
}
