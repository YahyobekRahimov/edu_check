import { useAppSelector } from "../../hooks/redux-hooks";

export default function StudentProfile() {
  const { id, name } = useAppSelector(
    (state) => state.currentStudent
  );
  return (
    <div className="p-4">
      <div className="flex gap-10">
        <div className="max-w-[200px] max-h-[200px] overflow-hidden rounded-full select-none pointer-events-none">
          <img src="https://picsum.photos/300/300" alt={name} />
        </div>
        <div className="h-max">
          <h2 className="text-3xl">F.I.Sh: {name}</h2>
        </div>
      </div>
    </div>
  );
}
