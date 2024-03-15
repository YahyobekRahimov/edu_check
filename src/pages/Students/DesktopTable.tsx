import { Input, Table } from "antd";

export default function DesktopTable({
  dataSource,
  columns,
}: {
  dataSource: any;
  columns: any;
}) {
  return (
    <div className="hidden md:block">
      <div className="p-5 w-[30%]">
        <Input size="large" placeholder="Ismni kiriting" />
      </div>

      <Table
        sticky={true}
        dataSource={dataSource}
        pagination={false}
        columns={columns}
      />
    </div>
  );
}
