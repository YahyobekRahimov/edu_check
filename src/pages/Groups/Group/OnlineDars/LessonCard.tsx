import { Button, Card } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import YouTubeBrandIcon from "../../../../components/Icons/YouTubeBrandIcon";

interface Lesson {
  id: number;
  title: string;
  description: string;
  timestamp: string;
  videos?: string[];
}

const LessonCard: React.FC<Lesson> = ({
  title,
  description,
  timestamp,
  videos,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const formattedTimestamp = dayjs(timestamp).format(
    "MMMM Do YYYY, h:mm"
  );

  return (
    <Card
      title={title}
      rootClassName="cursor-pointer relative bg-gray-50 border-transparent border-[3.5px] hover:border-[var(--primary-color)]"
      style={{
        boxShadow:
          "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
        borderRadius: "8px",
        transition: "box-shadow 0.3s ease",
      }}
    >
      <p>
        {isExpanded ? description : `${description.slice(0, 50)}...`}
      </p>
      <p className="absolute right-2 bottom-2 text-xl">
        {formattedTimestamp}
      </p>
      <div className="absolute top-3 right-10 text-2xl">
        {videos?.length == 0 ? (
          <div className="flex items-center gap-2">
            <YouTubeBrandIcon height={30} width={30} />
            Video dars yo'q
          </div>
        ) : videos?.length == 1 ? (
          <div className="flex items-center gap-2">
            <YouTubeBrandIcon height={30} width={30} />
            Video dars: {videos.length} ta
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <YouTubeBrandIcon height={30} width={30} />
            Video darslar: {videos?.length} ta
          </div>
        )}
      </div>
      <Button type="link" onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Qisqartirish" : "Davomi..."}
      </Button>
    </Card>
  );
};

export default LessonCard;
