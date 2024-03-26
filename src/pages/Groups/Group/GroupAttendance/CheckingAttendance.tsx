import studentsJSON from "../../../../data/students.json";
import StudentAttendanceRow from "./StudentAttendanceRow";

export default function CheckingAttendance() {
  return (
    <div>
      <ul className="">
        {studentsJSON.map((student, index) => {
          return (
            <StudentAttendanceRow name={student.name} key={index} />
          );
        })}
      </ul>
    </div>
  );
}
