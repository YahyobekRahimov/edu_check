import { Button, Carousel } from "antd";
import TickIcon from "../../../../components/Icons/TickIcon";
import XLetterIcon from "../../../../components/Icons/XLetterIcon";
import attendanceData from "../../../../data/attendance.json";
import { useNavigate } from "react-router-dom";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function AboutGroup() {
  const navigate = useNavigate();
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <div className="p-3 text-base flex flex-col gap-10 overflow-x-auto">
      <Button
        className="w-max"
        type="primary"
        onClick={() => navigate("attendance")}
      >
        Hozirgi dars uchun yo'qlama qilish
      </Button>
      <div className="">
        <table className="w-full">
          <thead className="">
            <tr className="border border-b-0 bg-[#fafafa] cursor-pointer">
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
              {attendanceData[0].lessons.map((data) => {
                return (
                  <th className="w-32 text-start border border-[#e5e7eb] px-4 py-2 border-l-0 border-r-0">
                    {data.date.slice(8)}
                  </th>
                );
              })}
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
                className="border hover:bg-slate-100 duration-75 "
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
      <div>
        <p className="flex">
          <TickIcon />
          <span> - Darsda bo'lgan</span>
        </p>
        <p className="flex">
          <XLetterIcon /> <span> - Darsga kelmagan</span>
        </p>
      </div>
      <Carousel afterChange={onChange} arrows={true}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  );
}
