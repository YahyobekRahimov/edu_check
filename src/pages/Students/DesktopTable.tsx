import { Input, Table } from "antd";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { setCurrentStudentData } from "../../redux/currentStudentSlice";

export default function DesktopTable({
  dataSource,
  columns,
}: {
  dataSource: any;
  columns: any;
}) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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
        className="cursor-pointer"
        onRow={(data) => ({
          onClick: () => {
            navigate(`/students/${data.id}`);
            dispatch(setCurrentStudentData(data));
          },
        })}
      />
    </div>
  );
}
