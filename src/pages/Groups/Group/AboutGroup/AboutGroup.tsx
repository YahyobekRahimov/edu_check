import { Button } from "antd";
import GroupsJSON from "../../../../data/groups.json";
import EditIcon from "../../../../components/Icons/EditIcon";

export default function AboutGroup() {
  const { id, course, name, opened, rooms, students, teacher, time } =
    GroupsJSON[0];
  return (
    <div className="text-xs xs:text-sm lg:text-xl">
      <div className="flex justify-center md:justify-end md:pr-10">
        <Button type="primary" icon={<EditIcon />} className="flex">
          Guruhni tahrirlash
        </Button>
      </div>
      <ul className="p-2 xs:p-4 md:p-10">
        <li className="grid grid-cols-2 border-b py-2 border-t">
          <strong>ID:</strong> <span>{id}</span>
        </li>
        <li className="grid grid-cols-2 border-b py-2">
          <strong>Guruh nomi: </strong> <span>{name}</span>
        </li>
        <li className="grid grid-cols-2 border-b py-2">
          <strong>Kurs nomi: </strong>
          <span>{course}</span>
        </li>
        <li className="grid grid-cols-2 border-b py-2">
          <strong>O'qituvchi: </strong> <span>{teacher}</span>
        </li>
        <li className="grid grid-cols-2 border-b py-2">
          <strong>O'quvchilar soni:</strong> <span>{students}</span>
        </li>
        <li className="grid grid-cols-2 border-b py-2">
          <strong>Ochilgan vaqti: </strong> <span>{opened}</span>
        </li>
        <li className="grid grid-cols-2 border-b py-2">
          <strong>Xonasi:</strong> <span>{rooms}</span>
        </li>
        <li className="grid grid-cols-2 border-b py-2">
          <strong>Vaqti:</strong> <span>{time}</span>
        </li>
      </ul>
    </div>
  );
}
