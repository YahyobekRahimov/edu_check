import { Button } from "antd";
import studentsJSON from "../../../../data/students.json";
import StudentAttendanceRow from "./StudentAttendanceRow";
import { useEffect, useState } from "react";

export default function CheckingAttendance() {
  const [students, setStudents] = useState<{}>({});
  const handleStatusChange = (
    studentName: string,
    newStatus: boolean
  ) => {
    setStudents({ ...students, [studentName]: newStatus });
  };
  useEffect(() => {
    let names = {};
    studentsJSON.forEach((student) => {
      names = { ...names, [student.name]: true };
    });
    setStudents(names);
  }, []);
  console.log(students);
  return (
    <div>
      <ul className="">
        <li className="px-5 py-3 font-semibold lg:px-36 xs:px-10 flex justify-between border-l-0 border-r-0 border border-[#e5e7eb] bg-[#fafafa] dark:bg-[var(--dark-background-800)] text-[var(--primary-color)]">
          <div>Talaba</div>
          <div>Bor / Yo'q</div>
        </li>
        {studentsJSON.map((student, index) => {
          return (
            <StudentAttendanceRow
              handleStatusChange={handleStatusChange}
              name={student.name}
              key={index}
            />
          );
        })}
      </ul>
      <Button className="block ml-auto mr-24 mt-5" type="primary">
        Topshirish
      </Button>
    </div>
  );
}
