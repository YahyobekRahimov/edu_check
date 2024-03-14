import { Input, Select, Table } from "antd";
import { ColumnType } from "antd/lib/table";
import { useState } from "react";
import MobileTable from "../../components/MobileTable/MobileTable";
import TableWithFilter from "./TableWithFilter";

type RowType = {
  key: string;
  name: string;
  address: string;
  phoneNumber: string;
  group: string;
  teacher: string;
  status: "paid" | "unpaid";
  balance: number;
};

export default function Payments() {
  const dataSource: RowType[] = [
    {
      key: "1",
      name: "John Doe",
      address: "123 Main Street",
      phoneNumber: "123-456-7890",
      group: "Math",
      teacher: "Mr. Smith",
      status: "paid",
      balance: 500,
    },
    {
      key: "2",
      name: "Jane Smith",
      address: "456 Elm Street",
      phoneNumber: "456-789-0123",
      group: "Science",
      teacher: "Ms. Johnson",
      status: "unpaid",
      balance: 700,
    },
    // Add more data objects here...
    {
      key: "3",
      name: "Michael Johnson",
      address: "789 Oak Street",
      phoneNumber: "789-012-3456",
      group: "History",
      teacher: "Mrs. Williams",
      status: "paid",
      balance: 600,
    },
    {
      key: "4",
      name: "Emily Brown",
      address: "1011 Pine Street",
      phoneNumber: "101-112-1314",
      group: "English",
      teacher: "Mr. Davis",
      status: "unpaid",
      balance: 800,
    },
    {
      key: "5",
      name: "William Taylor",
      address: "1315 Maple Street",
      phoneNumber: "131-415-1617",
      group: "Art",
      teacher: "Ms. Thompson",
      status: "paid",
      balance: 400,
    },
    {
      key: "6",
      name: "Emma Martinez",
      address: "1617 Cedar Street",
      phoneNumber: "161-718-1920",
      group: "Music",
      teacher: "Mr. Garcia",
      status: "unpaid",
      balance: 900,
    },
    {
      key: "7",
      name: "Daniel Anderson",
      address: "1819 Birch Street",
      phoneNumber: "181-920-2122",
      group: "Physical Education",
      teacher: "Mr. Wilson",
      status: "paid",
      balance: 300,
    },
    {
      key: "8",
      name: "Olivia Garcia",
      address: "2021 Walnut Street",
      phoneNumber: "202-122-2324",
      group: "Geography",
      teacher: "Ms. Martinez",
      status: "unpaid",
      balance: 1000,
    },
    {
      key: "9",
      name: "Liam Wilson",
      address: "2223 Hickory Street",
      phoneNumber: "222-324-2526",
      group: "Computer Science",
      teacher: "Mr. Anderson",
      status: "paid",
      balance: 200,
    },
    {
      key: "10",
      name: "Ava Lopez",
      address: "2425 Ash Street",
      phoneNumber: "242-526-2728",
      group: "Biology",
      teacher: "Ms. Lee",
      status: "unpaid",
      balance: 1100,
    },
    {
      key: "11",
      name: "Noah Lee",
      address: "2627 Poplar Street",
      phoneNumber: "262-728-2930",
      group: "Chemistry",
      teacher: "Mrs. Gonzalez",
      status: "paid",
      balance: 250,
    },
    {
      key: "12",
      name: "Sophia Hernandez",
      address: "2829 Spruce Street",
      phoneNumber: "282-930-3132",
      group: "Foreign Language",
      teacher: "Mr. Perez",
      status: "unpaid",
      balance: 1200,
    },
  ];

  const columns: ColumnType<RowType>[] = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
      render(value: any, _: any, index: number) {
        return index + 1;
      },
      width: 50,
      responsive: ["xl"],
    },
    {
      title: "F.I.Sh",
      dataIndex: "name",
      key: "name",
      sorter: (a: RowType, b: RowType) =>
        a.name.localeCompare(b.name),
      sortDirections: ["ascend", "descend"],
      defaultSortOrder: "ascend",
    },

    {
      title: "Telefon raqam",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Guruh",
      dataIndex: "group",
      key: "group",
      sorter: (a: RowType, b: RowType) =>
        a.group.charAt(0).localeCompare(b.group.charAt(0)),
    },
    {
      title: "O'qituvchi",
      dataIndex: "teacher",
      key: "teacher",
      sorter: (a: RowType, b: RowType) => {
        return a.teacher.localeCompare(b.teacher);
      },
    },
    {
      title: "Holat",
      dataIndex: "status",
      key: "status",
      responsive: ["lg"],
      render(value: string) {
        return value == "paid" ? "To'langan✅" : "Qarzi bor❌";
      },
      sorter: (a: RowType, b: RowType) =>
        a.status.length - b.status.length,
    },
    {
      title: "Balans",
      dataIndex: "balance",
      key: "balance",

      render(value, record: RowType) {
        if (record?.status === "paid") {
          return (
            <span className="text-green-600 font-semibold">
              +${value}
            </span>
          );
        }
        return (
          <span className="text-red-500 font-semibold">
            -${value}
          </span>
        );
      },
      sorter: (a: RowType, b: RowType) => {
        let first = a.balance;
        let second = b.balance;
        if (a.status == "unpaid") {
          first = -first;
        }
        if (b.status == "unpaid") {
          second = -second;
        }
        return second - first;
      },
      sortDirections: ["ascend", "descend"],
    },
  ];

  return (
    <>
      <div className="hidden md:block">
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          onRow={(record, rowIndex) => ({
            onClick: () => {
              console.log("first");
            },
          })}
          sticky
        />
      </div>
      <TableWithFilter dataSource={dataSource} />
    </>
  );
}
