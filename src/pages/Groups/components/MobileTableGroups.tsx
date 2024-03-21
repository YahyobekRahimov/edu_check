import { useNavigate } from "react-router-dom";
import { DataGroups } from "../../../types/types";
import { Button, Dropdown, MenuProps } from "antd";
export default function MobileTableGroups({
  dataSource,
}: {
  dataSource: DataGroups[]
}) {
  const navigator = useNavigate();
  function handleChangePage(record: any) {
    console.log(record);
    navigator("singleGroup");
  }

  const items: MenuProps["items"] = [
    {
      key: 1,
      label: (
        <button
          onClick={(e) => {
            e.stopPropagation();
            // dispatch(setStudentEditModal(true))
          }}
          className="font-semibold w-full text-start tracking-wide py-[5px] px-3"
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
            // dispatch(setSMSDrawer(true))
            
          }}
          className="font-semibold w-full text-start tracking-wide py-[5px] px-3"
        >
          SMS
        </button>
      ),
      style: { padding: 0 },
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
          className="font-semibold w-full text-start tracking-wide py-[5px] px-3"
        >
          O'chirish
        </button>
      ),
      danger: true,
      style: {
        padding: 0,
      },
    },
  ];
  return (
    <div className="flex flex-col gap-2  bg-[#f5f5f5]  md:hidden">
      {dataSource.map((element, index) => (
        <ul
          onClick={() => {
            handleChangePage(element.course);
          }}
          key={index}
          className="bg-white cursor-pointer p-2 shadow-sm dark:bg-[var(--dark-background-800)] flex flex-col   w-full"
        >
          <li className="flex justify-between items-center">
            <span className="font-semibold text-[16px]">Guruhlar:</span>
            <span>{element.course}</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="font-semibold text-[16px]">Kurslar:</span>
            <span>{element.name}</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="font-semibold text-[16px]">O'qituvchi:</span>
            <span>{element.teacher}</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="font-semibold text-[16px]">O'tilgan muddati:</span>
            <span>{element.opened}</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="font-semibold text-[16px]">Xonalar:</span>
            <span>{element.students}</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="font-semibold text-[16px]">Amallar:</span>
            <Dropdown
          
          trigger={["click"]}
          menu={{ items }}
          placement="bottomLeft"
        >
          <Button
            onClick={(e) => {
              e.stopPropagation();
            }}
            type="primary"
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
