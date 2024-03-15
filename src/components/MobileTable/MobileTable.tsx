export default function MobileTable({
  dataSource,
}: {
  dataSource: any[];
}) {
  return (
    <div className="flex flex-col gap-2">
      {dataSource.map((element, index) => (
        <ul
          key={index}
          className="bg-white p-2 shadow-sm dark:bg-[var(--dark-background-800)] flex flex-col w-full"
        >
          <li className="flex justify-between items-center">
            <span>F.I.SH:</span>
            <span>{element.name}</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Telefon raqami:</span>
            <span>{element.phoneNumber}</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Guruh:</span>
            <span>{element.group}</span>
          </li>
          <li className="flex justify-between items-center">
            <span>O'qituvchi:</span>
            <span>{element.teacher}</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Balans:</span>
            <span>
              {element.status === "paid" ? (
                <span className="text-green-600 font-semibold">
                  +${element.balance.toLocaleString()}
                </span>
              ) : (
                <span className="text-red-500 font-semibold">
                  -${element.balance.toLocaleString()}
                </span>
              )}
            </span>
          </li>
        </ul>
      ))}
    </div>
  );
}
