import { Button, Dropdown, MenuProps, Table, TableProps } from "antd";
import GroupsHeader from "./components/GroupsHeader";
import { DataGroups } from "../../types/types";

export default function Groups() {
  const items: MenuProps["items"] = [
    {
<<<<<<< HEAD
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
=======
      key: 1,
      label: (
        <button className="font-semibold tracking-wide text-base">
          Tahrirlash
        </button>
      ),
    },
    {
      key: 4,
      label: (
        <button className="font-semibold tracking-wide text-base">
          SMS
        </button>
      ),
    },
    {
      key: 3,
      type: "divider",
    },
    {
      key: 2,
      label: (
        <button className="font-semibold tracking-wide text-base">
          O'chirish
        </button>
      ),
      danger: true,
>>>>>>> 272b21faf0165b60b7b2d8cb5c5170a55a92256a
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
      title: "Amallar",
      dataIndex: "actions",
      key: "actions",
      render: () => (
        <Dropdown
          trigger={["click"]}
          menu={{ items }}
          placement="bottomLeft"
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
        onRow={(record, _) => ({
          onClick: () => console.log(record),
        })}
        className=" justify-between  items-center w-full cursor-pointer"
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 7 }}
      />
    </div>
  );
}
