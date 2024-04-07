import TableWithFilter from "./TableWithFilter";
import DesktopTable from "./DesktopTable";
import studentsJSON from "../../data/students.json";
import { useState } from "react";

type RowType = {
  id: number;
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
  const [dataState, setDataState] = useState(dataSource);

  const addMoney = (amount?: number, studentID?: number) => {
    setDataState(
      dataState.map((student) => {
        if (student.id === studentID) {
          return {
            ...student,
            balance: student.balance + (amount ?? 0),
          };
        }
        return student;
      })
    );
  };

  const deductMoney = (amount?: number, studentID?: number) => {
    setDataState(
      dataState.map((student) => {
        if (student.id === studentID) {
          return {
            ...student,
            balance: student.balance - (amount ?? 0),
          };
        }
        return student;
      })
    );
  };
  return (
    <>
      <DesktopTable
        addMoney={addMoney}
        deductMoney={deductMoney}
        dataSource={dataState}
      />
      <TableWithFilter dataSource={dataState} />
    </>
  );
}
