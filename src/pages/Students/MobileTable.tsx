import { Button, Divider, Dropdown } from "antd";
import { MenuProps } from "antd/lib";
import { useAppDispatch } from "../../hooks/redux-hooks";
import {
  setSMSDrawer,
  setStudentEditModal,
} from "../../redux/ModalSlice";
import { setCurrentStudentData } from "../../redux/currentStudentSlice";
import TickIcon from "../../components/Icons/TickIcon";
import XLetterIcon from "../../components/Icons/XLetterIcon";
import { useNavigate } from "react-router-dom";

export default function MobileTable({
  dataSource,
}: {
  dataSource: any;
}) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleDelete = () => {
    console.log("deleting");
  };
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
    <div className="flex flex-col gap-2 md:hidden">
      {dataSource.map((element: any, index: number) => (
        <ul
          onClick={() =>
            navigate(`/students/${element.id}`, {
              state: { defaultValue: "payments" },
            })
          }
          key={index}
          className="bg-white p-2 shadow-sm dark:bg-[var(--dark-background-800)] flex flex-col w-full"
        >
          <li className="flex justify-between items-center">
            <span>F.I.SH:</span>
            <span>{element.name}</span>
          </li>
          <Divider />
          <li className="flex justify-between items-center">
            <span>Telefon raqami:</span>
            <span>{element.phoneNumber}</span>
          </li>
          <Divider />
          <li className="flex justify-between items-center">
            <span>Guruh:</span>
            <span>{element.group}</span>
          </li>
          <Divider />
          <li className="flex justify-between items-center">
            <span>O'qituvchi:</span>
            <span>{element.teacher}</span>
          </li>
          <Divider />
          <li className="flex justify-between items-center">
            <span>Holat:</span>
            <span>
              {element.status === "paid" ? (
                <span className="flex gap-1">
                  To'langan <TickIcon />
                </span>
              ) : (
                <span className="flex gap-1">
                  Qarzi bor <XLetterIcon />
                </span>
              )}
            </span>
          </li>
          <Divider />
          <li className="flex justify-between items-center">
            <span>Amallar:</span>
            <Dropdown trigger={["click"]} menu={{ items }}>
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(setCurrentStudentData(element));
                }}
                type="primary"
                size="large"
                className="px-8"
              >
                ...
              </Button>
            </Dropdown>
          </li>
        </ul>
      ))}
    </div>
  );
}
