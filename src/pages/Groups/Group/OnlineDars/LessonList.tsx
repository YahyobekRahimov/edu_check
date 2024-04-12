import LessonCard from "./LessonCard";

interface Lesson {
  id: number;
  title: string;
  description: string;
  timestamp: string;
  videos?: string[];
}

const LessonsList: React.FC<{ lessons: Lesson[] }> = ({
  lessons,
}) => {
  return (
    <div className="flex flex-col gap-10">
      {lessons.map((lesson) => (
        <LessonCard key={lesson.id} {...lesson} />
      ))}
    </div>
  );
};

export default LessonsList;
