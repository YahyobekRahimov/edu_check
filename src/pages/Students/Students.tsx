import { Button, Dropdown } from "antd";

import { ColumnType } from "antd/es/table";
import { MenuProps } from "antd/lib";
import DesktopTable from "./DesktopTable";
import MobileTable from "./MobileTable";

type RowType = {
  index: number;
  name: string;
  phoneNumber: string;
  group: string;
  date: string;
  status: "paid" | "unpaid";
  teacher: string;
};
export default function Students() {
  const dataSource = [
    {
      name: "John Doe",
      phoneNumber: "(123) 456-7890",
      group: "A",
      teacher: "Jane Smith",
      date: "2024-03-01",
      status: "paid",
    },
    {
      name: "Alice Johnson",
      phoneNumber: "(234) 567-8901",
      group: "B",
      teacher: "David Brown",
      date: "2024-02-15",
      status: "paid",
    },
    {
      name: "Emily Wilson",
      phoneNumber: "(345) 678-9012",
      group: "C",
      teacher: "Michael Taylor",
      date: "2024-03-10",
      status: "unpaid",
    },
    {
      name: "Daniel Smith",
      phoneNumber: "(456) 789-0123",
      group: "A",
      teacher: "Emma Johnson",
      date: "2024-02-20",
      status: "paid",
    },
    {
      name: "Sophia Brown",
      phoneNumber: "(567) 890-1234",
      group: "B",
      teacher: "James Wilson",
      date: "2024-03-05",
      status: "unpaid",
    },
    {
      name: "Olivia Taylor",
      phoneNumber: "(678) 901-2345",
      group: "C",
      teacher: "Benjamin Davis",
      date: "2024-02-25",
      status: "paid",
    },
    {
      name: "Noah Miller",
      phoneNumber: "(789) 012-3456",
      group: "A",
      teacher: "Liam Martinez",
      date: "2024-03-08",
      status: "paid",
    },
    {
      name: "Isabella Lee",
      phoneNumber: "(890) 123-4567",
      group: "B",
      teacher: "Ethan Anderson",
      date: "2024-02-22",
      status: "unpaid",
    },
    {
      name: "Liam Garcia",
      phoneNumber: "(901) 234-5678",
      group: "C",
      teacher: "Ava Hernandez",
      date: "2024-03-03",
      status: "paid",
    },
    {
      name: "Emma Rodriguez",
      phoneNumber: "(012) 345-6789",
      group: "A",
      teacher: "Mia Nguyen",
      date: "2024-02-18",
      status: "paid",
    },
    {
      name: "William Martinez",
      phoneNumber: "(123) 456-7890",
      group: "B",
      teacher: "Oliver Perez",
      date: "2024-03-12",
      status: "unpaid",
    },
    {
      name: "Ava Nguyen",
      phoneNumber: "(234) 567-8901",
      group: "C",
      teacher: "Sophia Roberts",
      date: "2024-03-02",
      status: "paid",
    },
    {
      name: "James Hernandez",
      phoneNumber: "(345) 678-9012",
      group: "A",
      teacher: "Alexander Sullivan",
      date: "2024-02-28",
      status: "paid",
    },
    {
      name: "Charlotte Smith",
      phoneNumber: "(456) 789-0123",
      group: "B",
      teacher: "Mason Cooper",
      date: "2024-03-09",
      status: "unpaid",
    },
    {
      name: "Mason Taylor",
      phoneNumber: "(567) 890-1234",
      group: "C",
      teacher: "Harper Ramirez",
      date: "2024-02-17",
      status: "paid",
    },
  ];

  const columns: ColumnType<RowType> = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
      // @ts-ignore
      render(value: any, _: any, index: number) {
        return index + 1;
      },
    },
    {
      title: "Ism",
      dataIndex: "name",
      key: "name",
      onFilter: (value: any, record: RowType) =>
        record.name.charAt(0).toUpperCase() === value.toUpperCase(),
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
    },
    {
      title: "O'qituvchi",
      dataIndex: "teacher",
      key: "teacher",
    },
    {
      title: "Mashg'ulot sana",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Holat",
      dataIndex: "status",
      key: "status",
      render(_: string, record: RowType) {
        return record.status == "paid"
          ? "To'langan✅"
          : "Qarzi bor❌";
      },
      sorter: (a: RowType, b: RowType) =>
        a.status.length - b.status.length,
    },
    {
      title: "Amallar",
      dataIndex: "actions",
      key: "actions",
      render: () => {
        return (
          <Dropdown trigger={["click"]} menu={{ items }}>
            <Button type="primary">...</Button>
          </Dropdown>
        );
      },
    },
  ];

  const items: MenuProps["items"] = [
    {
      label: <button>Tahrirlash</button>,
      key: "0",
    },
    {
      label: <button>SMS</button>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: <button>O'chirish</button>,
      key: "3",
    },
  ];

  return (
    <main>
      <DesktopTable columns={columns} dataSource={dataSource} />
      <MobileTable dataSource={dataSource} />
    </main>
  );
}
