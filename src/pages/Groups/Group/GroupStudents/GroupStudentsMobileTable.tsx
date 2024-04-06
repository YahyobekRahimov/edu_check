import { Input, Select } from "antd";
import { useState } from "react";
import MobileTable from "../../../Students/MobileTable";
import StudentEditModal from "../../../../components/StudentEditModal/StudentEditModal";

export default function GroupStudentsMobileTable({
  dataSource,
}: {
  dataSource: any[];
}) {
  const [selectValue, setSelectValue] = useState<
    "paid" | "unpaid" | ""
  >("");
  const [inputValue, setInputValue] = useState<string>("");
  const handleSelectChange = (value: "paid" | "unpaid" | "") => {
    setSelectValue(value);
  };

  let result;
  if (selectValue === "paid") {
    result = dataSource.filter(
      (element) => element.status === "paid"
    );
  } else if (selectValue === "unpaid") {
    result = dataSource.filter(
      (element) => element.status === "unpaid"
    );
  } else {
    result = dataSource;
  }

  if (inputValue.length >= 3) {
    result = result.filter((element) =>
      element.name.toUpperCase().includes(inputValue.toUpperCase())
    );
  }

  return (
    <div className="md:hidden flex flex-col gap-2 bg-[#f5f5f5] dark:bg-[var(--dark-background-900)]">
      <div className="flex items-center gap-2 sticky">
        <Input
          placeholder="Qidiruv..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Select
          defaultValue={""}
          className="w-[80%]"
          value={selectValue}
          onChange={handleSelectChange}
          options={[
            { value: "", label: "Hammasi" },
            { value: "paid", label: "To'laganlar" },
            { value: "unpaid", label: "Qarzi borlar" },
          ]}
        />
      </div>
      <MobileTable dataSource={result} />
      <StudentEditModal />
    </div>
  );
}
