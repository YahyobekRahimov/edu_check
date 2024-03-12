import {
  Button,
  Dropdown,
  MenuProps,
  Table,
  TableProps,
  Tooltip,
} from "antd";
import GroupsHeader from "./components/GroupsHeader";

export default function Groups() {
  interface DataGroups {
    key: number;
    Guruh: string;
    kursName: string;
    teacher: string;
    pastDate: string;
    rooms: string;
    amoundStudent: number;
    actions: any;
  }
  interface DataStudents {}

  const items: MenuProps["items"] = [
    {
      key: 1,
      label: <Button type="primary">tahrirlash</Button>,
    },
    {
      key: 2,
      label: <Button type="primary">o'chirish</Button>,
    },
  ];

  const columns: TableProps<DataGroups>["columns"] = [
    {
      title: "Guruh",
      dataIndex: "guruh",
      key: "guruh",
    },
    {
      title: "Kurslar",
      dataIndex: "kurslar",
      key: "kurslar",
    },
    {
      title: "O'qituvchi",
      dataIndex: "teacher",
      key: "o'qituvchi",
    },
    {
      title: "O'tilgan muddati",
      dataIndex: "pastDate",
      key: "o'tilgan muddati",
    },
    {
      title: "Xonalar",
      dataIndex: "rooms",
      key: "xonalar",
    },
    {
      title: "Talabalar soni",
      dataIndex: "amoundStudent",
      key: "talabalar soni",
    },
    {
      title: "Amaller",
      dataIndex: "actions",
      key: "amaller",
      render: () => (
        <Dropdown
          trigger={["click"]}
          menu={{ items }}
          placement="bottom"
        >
          <Button type="primary">...</Button>
        </Dropdown>
      ),
    },
  ];

  const data: any = [
    {
      key: 1,
      guruh: "01-a",
      kurslar: "inglis-tili",
      teacher: "Teshaboyev A",
      pastDate: "09-09-2023",
      rooms: "4/203",
      amoundStudent: 18,
      actions: <Button type="primary">...</Button>,
    },
  ];
  return (
    <div className="bg-[var(--dark-backround)] w-full">
      <GroupsHeader />
      <Table
        onRow={(record, rowIndex) => ({
          onClick: () => console.log(rowIndex),
        })}
        className=" justify-between  items-center w-full cursor-pointer"
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 7 }}
      />
    </div>
  );
}
