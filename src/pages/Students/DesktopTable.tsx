import { Table } from "antd";
import { useNavigate } from "react-router-dom";

export default function DesktopTable({
  dataSource,
  columns,
}: {
  dataSource: any;
  columns: any;
}) {
  const navigate = useNavigate();
  return (
    <div className="hidden md:block">
      <Table
        sticky={true}
        dataSource={dataSource}
        pagination={false}
        columns={columns}
        className="cursor-pointer"
        onRow={(data) => ({
          onClick: () => {
            navigate(`/students/${data.id}`, {
              state: { defaultValue: "payments" },
            });
          },
        })}
      />
    </div>
  );
}
