import { Switch } from "antd";
import { useState } from "react";

export default function AttendanceSwitch() {
  const [checked, setChecked] = useState<boolean>();

  return (
    <Switch checked={checked} onChange={() => setChecked(!checked)} />
  );
}
