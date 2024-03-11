import { Button, Space, Table, TableProps, Tag } from "antd";

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
      actions: <Button  type="primary">...</Button>,
    },
    {
      key: 16,
      guruh: "01-a",
      kurslar: "inglis-tili",
      teacher: "Teshaboyev A",
      pastDate: "09-09-2023",
      rooms: "4/203",
      amoundStudent: 18,
      actions: <Button  type="primary">...</Button>,
    },
    {
      key: 145697,
      guruh: "01-a",
      kurslar: "inglis-tili",
      teacher: "Teshaboyev A",
      pastDate: "09-09-2023",
      rooms: "4/203",
      amoundStudent: 18,
      actions: <Button  type="primary">...</Button>,
    },
    {
      key: 15674567,
      guruh: "01-a",
      kurslar: "inglis-tili",
      teacher: "Teshaboyev A",
      pastDate: "09-09-2023",
      rooms: "4/203",
      amoundStudent: 18,
      actions: <Button  type="primary">...</Button>,
    },
    {
      key: 15467456,
      guruh: "01-a",
      kurslar: "inglis-tili",
      teacher: "Teshaboyev A",
      pastDate: "09-09-2023",
      rooms: "4/203",
      amoundStudent: 18,
      actions: <Button  type="primary">...</Button>,
    },
    {
      key: 14567,
      guruh: "01-a",
      kurslar: "inglis-tili",
      teacher: "Teshaboyev A",
      pastDate: "09-09-2023",
      rooms: "4/203",
      amoundStudent: 18,
      actions: <Button  type="primary">...</Button>,
    },
    {
      key: 14567456745,
      guruh: "01-a",
      kurslar: "inglis-tili",
      teacher: "Teshaboyev A",
      pastDate: "09-09-2023",
      rooms: "4/203",
      amoundStudent: 18,
      actions: (
        <Button  type="primary">
          ...
        </Button>
      ),
    },
    {
      key: 16754,
      guruh: "01-a",
      kurslar: "inglis-tili",
      teacher: "Teshaboyev A",
      pastDate: "09-09-2023",
      rooms: "4/203",
      amoundStudent: 18,
      actions: <Button  type="primary">...</Button>,
    },
    {
      key: 174567,
      guruh: "01-a",
      kurslar: "inglis-tili",
      teacher: "Teshaboyev A",
      pastDate: "09-09-2023",
      rooms: "4/203",
      amoundStudent: 18,
      actions: <Button  type="primary">...</Button>,
    },
    {
      key: 75544,
      guruh: "01-a",
      kurslar: "inglis-tili",
      teacher: "Teshaboyev A",
      pastDate: "09-09-2023",
      rooms: "4/203",
      amoundStudent: 18,
      actions: <Button  type="primary">...</Button>,
    },
  ];
  return (
    <div className="bg-[var(--dark-backround)] w-full">
      <Table
        onRow={() => {
          return {
            onClick: (e) => console.log(e),
          };
        }}
        className=" justify-between  items-center w-full cursor-pointer"
        columns={columns}
        dataSource={data}
      />
    </div>
  );
}
