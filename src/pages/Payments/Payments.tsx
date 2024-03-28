import TableWithFilter from "./TableWithFilter";
import DesktopTable from "./DesktopTable";
import studentsJSON from "../../data/students.json";

type RowType = {
  key: string;
  name: string;
  phoneNumber: string;
  group: string;
  teacher: string;
  status: "paid" | "unpaid";
  balance: number;
};

export default function Payments() {
  const dataSource: RowType[] = studentsJSON.map((student: any) => ({
    id: student.id,
    key: student.key,
    name: student.name,
    phoneNumber: student.phoneNumber,
    group: student.group,
    teacher: student.teacher,
    status: student.status as "paid" | "unpaid", // Assuming status is either "paid" or "unpaid"
    balance: student.balance,
  }));

  return (
    <>
      <DesktopTable dataSource={dataSource} />
      <TableWithFilter dataSource={dataSource} />
    </>
  );
}
