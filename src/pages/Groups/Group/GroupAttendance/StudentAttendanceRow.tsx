import { Switch } from "antd";
import { useState } from "react";

export default function StudentAttendanceRow({
  name,
  key,
}: {
  name: string;
  key: number;
}) {
  const [checked, setChecked] = useState<boolean>(true);
  return (
    <li
      className={`p-5 lg:px-36 xs:px-10 flex justify-between border-l-0 border-r-0 border border-[#e5e7eb] ${
        checked ? "bg-green-300" : "bg-red-300"
      }`}
      key={key}
    >
      <div>{name}</div>
      <div>
        {
          <Switch
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
        }
      </div>
    </li>
  );
}
