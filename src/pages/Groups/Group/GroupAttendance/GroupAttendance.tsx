import TickIcon from "../../../../components/Icons/TickIcon";
import XLetterIcon from "../../../../components/Icons/XLetterIcon";
import attendanceData from "../../../../data/attendance.json";

export default function AboutGroup() {
  // const columns = [
  //   {
  //     title: "F.I.Sh",
  //     dataIndex: "fullName",
  //     key: "fullName",
  //   },
  //   {
  //     title: "To'lovlar",
  //     dataIndex: "payments",
  //     key: "payments",
  //   },
  //   {
  //     title: "Davomat",
  //     dataIndex: "davomat",
  //     key: "davomat",
  //     render: () => {
  //       return <Switch />;
  //     },
  //   },
  // ];
  // const data = [
  //   {
  //     fullName: "Rustamov D",
  //     payments: "ok",
  //   },
  // ];
  // return <Table columns={columns} dataSource={data} />;
  return (
    <div className="p-3 text-base flex flex-col gap-10">
      <table className="w-full">
        <thead className="">
          <tr className="border border-b-0 bg-slate-200 cursor-pointer">
            <th className="w-32 text-start border border-gray-800 px-4 py-2">
              Students
            </th>
            {attendanceData[0].lessons.map((data) => {
              return (
                <th className="w-32 text-start border border-gray-800 px-4 py-2">
                  {data.date.slice(5)}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((data, index) => (
            <tr
              key={index}
              className="border hover:bg-slate-100 duration-75"
            >
              <td className="w-32 border border-gray-800 px-4 py-2 text-nowrap">
                {data.student}
              </td>
              {data.lessons.map((lesson) => (
                <td className="w-32 border border-gray-800 px-4 py-2">
                  {lesson.wasPresent ? <TickIcon /> : <XLetterIcon />}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <p className="flex">
          <TickIcon />
          <span> - Darsda bo'lgan</span>
        </p>
        <p className="flex">
          <XLetterIcon /> <span> - Darsga kelmagan</span>
        </p>
      </div>
    </div>
  );
}
