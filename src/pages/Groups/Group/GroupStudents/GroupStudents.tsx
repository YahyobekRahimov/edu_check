import { Button, Dropdown, Table } from "antd";
// @ts-ignore
import StudentsJSON from "/src/data/students.json";
import { ColumnType } from "antd/es/table";
import TickIcon from "../../../../components/Icons/TickIcon";
import XLetterIcon from "../../../../components/Icons/XLetterIcon";
import { MenuProps } from "antd/lib";
import { useAppDispatch } from "../../../../hooks/redux-hooks";
import {
  setModalData,
  setSMSDrawer,
} from "../../../../redux/ModalSlice";
import SMSDrawer from "../../../../components/SMSDrawer/SMSDrawer";
import { useNavigate } from "react-router-dom";
import GroupStudentsMobileTable from "./GroupStudentsMobileTable";

type RowType = {
  id: number | string;
  index: any;
  name: string;
  phoneNumber: string;
  group: string;
  teacher: string;
  status: "paid" | "unpaid";
  balance: number;
  actions: any;
};

export default function GroupStudents() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const items: MenuProps["items"] = [
    {
      key: 1,
      label: (
        <button
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="tracking-wider text-green-500 font-semibold w-full text-start py-[5px] px-3"
        >
          Tahrirlash
        </button>
      ),
      style: {
        padding: 0,
      },
    },
    {
      key: 4,
      label: (
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(setSMSDrawer(true));
          }}
          className="tracking-wider py-[5px] px-3 font-semibold w-full text-start"
        >
          SMS
        </button>
      ),
      style: {
        padding: 0,
      },
    },
    {
      key: 3,
      type: "divider",
    },
    {
      key: 2,
      label: (
        <button
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="tracking-wider font-semibold text-red-500 w-full text-start py-[5px] px-3"
        >
          Guruhdan chiqarish
        </button>
      ),
      style: {
        padding: 0,
      },
    },
  ];
  const dataSource = StudentsJSON;
  const columns: ColumnType<RowType>[] = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
      // @ts-ignore
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
        return value == "paid" ? (
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
      title: "Balans",
      dataIndex: "balance",
      key: "balance",
      render(value: number) {
        if (value >= 0) {
          return (
            <span className="text-green-600 font-semibold">
              +{value} so'm
            </span>
          );
        }
        return (
          <span className="text-red-500 font-semibold">
            {value} so'm
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
    {
      title: "Amallar",
      dataIndex: "actions",
      key: "actions",
      render: (_: any, record: RowType) => {
        return (
          <Dropdown
            menu={{ items }}
            trigger={["click"]}
            placement="bottomLeft"
          >
            <Button
              onClick={(e) => {
                e.stopPropagation();
                dispatch(setModalData(record));
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
  return (
    <>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        className="cursor-pointer"
        rootClassName="hidden md:block"
        onRow={(data: RowType) => ({
          onClick: () => {
            navigate(`/students/${data.id}`);
          },
        })}
      ></Table>
      <GroupStudentsMobileTable dataSource={dataSource} />
      <SMSDrawer />
    </>
  );
}
