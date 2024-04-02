import { Switch } from "antd";
import { useState } from "react";

export default function StudentAttendanceRow({
  name,
  key,
  handleStatusChange,
}: {
  name: string;
  key: number;
  handleStatusChange: (
    studentName: string,
    newStatus: boolean
  ) => void;
}) {
  const [checked, setChecked] = useState<boolean>(true);

  const handleChecked = () => {
    if (checked) {
      setChecked(false);
      handleStatusChange(name, false);
    } else {
      setChecked(true);
      handleStatusChange(name, true);
    }
  };
  return (
    <li
      className={`px-5 py-3 lg:px-36 xs:px-10 flex justify-between border-l-0 border-r-0 border border-[#e5e7eb] cursor-pointer ${
        checked
          ? "bg-green-300 dark:bg-green-900"
          : "bg-red-300 dark:bg-red-900"
      }`}
      key={key}
      onClick={handleChecked}
    >
      <div>{name}</div>
      <div>
        <Switch checked={checked} />
      </div>
    </li>
  );
}
