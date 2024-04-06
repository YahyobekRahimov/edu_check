import { Button, Dropdown } from "antd";

import { ColumnType } from "antd/es/table";
import { MenuProps } from "antd/lib";
import DesktopTable from "./DesktopTable";
import MobileTable from "./MobileTable";
import StudentsJSON from "../../data/students.json";
import {
  setSMSDrawer,
  setStudentEditModal,
} from "../../redux/ModalSlice";
import { useAppDispatch } from "../../hooks/redux-hooks";
import SMSDrawer from "../../components/SMSDrawer/SMSDrawer";
import StudentEditModal from "../../components/StudentEditModal/StudentEditModal";
import { setCurrentStudentData } from "../../redux/currentStudentSlice";
import TickIcon from "../../components/Icons/TickIcon";
import XLetterIcon from "../../components/Icons/XLetterIcon";

type RowType = {
  key: string;
  name: string;
  phoneNumber: string;
  group: string;
  birthDate: string;
  status: "paid" | "unpaid";
  teacher: string;
};
export default function Students() {
  const dispatch = useAppDispatch();
  const dataSource: RowType[] = StudentsJSON.map((item) => ({
    ...item,
    status: item.status as "paid" | "unpaid",
  }));
  const handleDelete = () => {
    console.log("deleting");
  };
  // @ts-ignore
  const columns: ColumnType<RowType> = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
      width: 50,
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
      sorter: (a: RowType, b: RowType) =>
        a.phoneNumber.localeCompare(b.phoneNumber),
    },
    {
      title: "Guruh",
      dataIndex: "group",
      key: "group",
      sorter: (a: RowType, b: RowType) =>
        a.group.localeCompare(b.group),
    },
    {
      title: "O'qituvchi",
      dataIndex: "teacher",
      key: "teacher",
      sorter: (a: RowType, b: RowType) =>
        a.teacher.localeCompare(b.teacher),
    },
    {
      title: "Mashg'ulot sana",
      dataIndex: "birthDate",
      key: "birthDate",
      sorter: (a: RowType, b: RowType) =>
        a.birthDate.localeCompare(b.birthDate),
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Holat",
      dataIndex: "status",
      key: "status",
      render(_: string, record: RowType) {
        return record.status == "paid" ? (
          <span className="flex gap-1">
            To'langan <TickIcon />
          </span>
        ) : (
          <span className="flex gap-1">
            Qarzi bor <XLetterIcon />
          </span>
        );
      },
      sorter: (a: RowType, b: RowType) =>
        a.status.length - b.status.length,
    },
    {
      title: "Amallar",
      dataIndex: "actions",
      key: "actions",
      render: (_: string, record: RowType) => {
        return (
          <Dropdown trigger={["click"]} menu={{ items }}>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                dispatch(setCurrentStudentData(record));
              }}
              type="primary"
              className="px-8"
            >
              ...
            </Button>
          </Dropdown>
        );
      },
    },
  ];

  const items: MenuProps["items"] = [
    {
      label: (
        <button
          className="tracking-wider font-semibold w-full text-start py-[5px] px-3"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(setStudentEditModal(true));
          }}
        >
          Tahrirlash
        </button>
      ),
      key: "0",
      style: {
        padding: 0,
      },
    },
    {
      label: (
        <button
          className="tracking-wider font-semibold w-full text-start py-[5px] px-3"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(setSMSDrawer(true));
          }}
        >
          SMS
        </button>
      ),
      key: "4",
      style: {
        padding: 0,
      },
    },
    {
      type: "divider",
      key: "2",
    },
    {
      label: (
        <button
          className="tracking-wider font-semibold w-full text-start py-[5px] px-3"
          onClick={(e) => {
            e.stopPropagation();
            handleDelete();
          }}
        >
          O'chirish
        </button>
      ),
      key: "3",
      style: {
        padding: 0,
      },
      danger: true,
    },
  ];

  return (
    <main className="bg-[#f5f5f5] dark:bg-[var(--dark-background-900)]">
      <DesktopTable columns={columns} dataSource={dataSource} />
      <MobileTable dataSource={dataSource} />
      <SMSDrawer />
      <StudentEditModal />
    </main>
  );
}
