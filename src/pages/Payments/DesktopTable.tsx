import { Button, Dropdown, Table } from "antd";
import { ColumnType } from "antd/es/table";
import { MenuProps } from "antd/lib";
import { useState } from "react";
import ActionModal from "./ActionModal";
import { useAppDispatch } from "../../hooks/redux-hooks";
import {
  setDeductionModal,
  setModalData,
  setModalOpen,
  setSMSDrawer,
} from "../../redux/ModalSlice";
import SMSDrawer from "../../components/SMSDrawer/SMSDrawer";
import TickIcon from "../../components/Icons/TickIcon";
import XLetterIcon from "../../components/Icons/XLetterIcon";
import { useNavigate } from "react-router-dom";

export type RowType = {
  key: string;
  id: number;
  name: string;
  phoneNumber: string;
  group: string;
  teacher: string;
  status: "paid" | "unpaid";
  balance: number;
};

export default function DesktopTable({
  dataSource,
  addMoney,
  deductMoney,
}: {
  dataSource: RowType[];
  addMoney: (amount?: number, studentID?: number) => void;
  deductMoney: (amount?: number, studentID?: number) => void;
}) {
  const navigate = useNavigate();
  // @ts-ignore
  const [currentRecordData, setCurrentRecordData] = useState<any>();
  const dispatch = useAppDispatch();

  const handlePayment = () => {
    dispatch(setModalOpen(true));
  };
  const handleDeduction = () => {
    dispatch(setDeductionModal(true));
  };

  const items: MenuProps["items"] = [
    {
      key: 1,
      label: (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePayment();
          }}
          className="tracking-wider text-green-500 font-semibold w-full text-start py-[5px] px-3"
        >
          To'lov qo'shish
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
            handleDeduction();
          }}
          className="tracking-wider font-semibold text-red-500 w-full text-start py-[5px] px-3"
        >
          Pul ayrish
        </button>
      ),
      style: {
        padding: 0,
      },
    },
  ];

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
      render(_: string, record: RowType) {
        return record.balance >= 0 ? (
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
      render(value) {
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
      render: (_, record: RowType) => {
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
    <div className="hidden md:block">
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        // @ts-ignore
        onRow={(record, rowIndex) => ({
          onClick: () => {
            navigate(`/students/${record.id}`, {
              state: { defaultValue: "payments" },
            });
          },
        })}
        className="cursor-pointer"
        sticky
      />
      <ActionModal addMoney={addMoney} deductMoney={deductMoney} />
      <SMSDrawer />
    </div>
  );
}
