import { Select } from "antd";
import attendanceData from "../../data/attendance.json";
// @ts-ignore
import MONTHS from "/src/data/months.json";
import { getCurrentMonth } from "../../utils/utils";
import { useState } from "react";
import XLetterIcon from "../../components/Icons/XLetterIcon";
import TickIcon from "../../components/Icons/TickIcon";

export default function CheckAttendance() {
  const [month, setMonth] = useState<string>(
    getCurrentMonth().toLowerCase()
  );
  const handleMonthChange = (e: string) => {
    setMonth(e);
  };
  const { lessons, student } = attendanceData[0];

  return (
    <div className="flex flex-col gap-5 overflow-x-auto lg:overflow-x-visible pb-5">
      <div className="flex items-center justify-between gap-10">
        <Select
          className="w-[150px] min-w-[100px]"
          options={MONTHS}
          value={month}
          onChange={handleMonthChange}
        ></Select>
        <div className="flex justify-between items-center gap-10 text-nowrap">
          <p className="flex items-center gap-1">
            <TickIcon /> <span> - Darsda bo'lgan</span>
          </p>
          <p className="flex items-center gap-1">
            <XLetterIcon /> <span> - Darsga kelmagan</span>
          </p>
        </div>
      </div>
      <div className="dark:text-white">
        <table className="w-full">
          <thead className="">
            <tr className="border border-b-0 bg-[#fafafa] dark:bg-[var(--dark-background-900)] cursor-pointer font-normal text-[var(--primary-color)]">
              <th className="w-32 text-start border border-[#e5e7eb] px-4 py-2 border-l-0 border-r">
                Students
              </th>
              {attendanceData[0].lessons.map((data, index) => {
                return (
                  <th
                    key={index}
                    className="w-32 text-start border border-[#e5e7eb] border-r px-4 py-2 border-l-0"
                  >
                    {data.date.slice(8)}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="">
            <tr className="border duration-75 even:bg-slate-100 odd:bg-lime-200 even:dark:bg-[var(--dark-background-800)] odd:dark:bg-[var(--dark-background-700)]">
              <td className="w-32 border border-[#e5e7eb] border-l-0 border-r-0 px-4 py-2 text-nowrap">
                {student}
              </td>
              {lessons.map((lesson, index) => (
                <td
                  key={index}
                  className="w-32 border border-[#e5e7eb] px-4 py-2 border-l-0 border-r-0"
                >
                  {lesson.wasPresent === true ? (
                    <TickIcon />
                  ) : lesson.wasPresent === false ? (
                    <XLetterIcon />
                  ) : (
                    ""
                  )}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
