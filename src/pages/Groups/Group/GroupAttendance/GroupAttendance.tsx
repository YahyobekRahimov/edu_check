import { Button } from "antd";
import TickIcon from "../../../../components/Icons/TickIcon";
import XLetterIcon from "../../../../components/Icons/XLetterIcon";
import attendanceData from "../../../../data/attendance.json";
import { useNavigate } from "react-router-dom";

export default function AboutGroup() {
  const navigate = useNavigate();

  return (
    <div className="p-3 text-base flex flex-col gap-10 overflow-x-auto lg:overflow-x-visible">
      <div className="flex justify-between">
        <Button
          className="w-max"
          type="primary"
          onClick={() => navigate("attendance")}
        >
          Hozirgi dars uchun yo'qlama qilish
        </Button>
        <div className="flex justify-between items-center gap-10">
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
            <tr className="border border-b-0 bg-[#fafafa] dark:bg-[var(--dark-background-900)] cursor-pointer">
              <th className="w-32 text-start border border-[#e5e7eb] px-4 py-2 border-l-0 border-r-0">
                Students
              </th>
              {attendanceData[0].lessons.map((data) => {
                return (
                  <th className="w-32 text-start border border-[#e5e7eb] px-4 py-2 border-l-0 border-r-0">
                    {data.date.slice(8)}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="">
            {attendanceData.map((data, index) => (
              <tr
                key={index}
                className="border hover:bg-slate-100 dark:hover:bg-[var(--dark-background-700)] duration-75 "
              >
                <td className="w-32 border border-[#e5e7eb] border-l-0 border-r-0 px-4 py-2 text-nowrap">
                  {data.student}
                </td>
                {data.lessons.map((lesson) => (
                  <td className="w-32 border border-[#e5e7eb] px-4 py-2 border-l-0 border-r-0">
                    {lesson.wasPresent ? (
                      <TickIcon />
                    ) : (
                      <XLetterIcon />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
