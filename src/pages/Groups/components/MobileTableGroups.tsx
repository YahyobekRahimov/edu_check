export default function MobileTableGroups({
  dataSource,
}: {
  dataSource: any[];
}) {
  return (
    <div className="flex flex-col gap-2  bg-[#f5f5f5]  md:hidden">
      {dataSource.map((element, index) => (
        <ul
          key={index}
          className="bg-white p-2 shadow-sm dark:bg-[var(--dark-background-800)] flex flex-col   w-full"
        >
          <li className="flex justify-between items-center">
            <span>Guruhlar</span>
            <span>{element.guruh}</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Kurslar</span>
            <span>{element.kurslar}</span>
          </li>
          <li className="flex justify-between items-center">
            <span>O'qituvchi</span>
            <span>{element.teacher}</span>
          </li>
          <li className="flex justify-between items-center">
            <span>O'tilgan muddati</span>
            <span>{element.pastDate}</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Xonalar</span>
            <span>{element.amoundStudent}</span>
          </li>
        </ul>
      ))}
    </div>
  );
}
