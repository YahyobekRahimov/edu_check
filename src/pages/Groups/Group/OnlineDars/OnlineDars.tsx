import { useState } from "react";
import { Input, Select } from "antd";
import LessonsList from "./LessonList";

const { Option } = Select;

interface Lesson {
  id: number;
  title: string;
  description: string;
  timestamp: string;
  videos?: string[];
}

const lessons: Lesson[] = [
  {
    id: 1,
    title: "Lesson 1",
    description:
      "This is the first lesson. It covers basic concepts.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos suscipit, veniam voluptates sapiente voluptatem repellat distinctio dicta voluptas debitis laborum ratione expedita labore nobis aspernatur corrupti iure quas nesciunt excepturi, voluptate commodi! Commodi eaque iure ducimus sint mollitia, fuga earum vitae dicta officiis, assumenda eum odit explicabo omnis rerum dolore sapiente, quam libero facere repellat. Facilis, consectetur sunt ex voluptate ab aliquid sapiente ipsum perferendis similique? Eos voluptates ea, reprehenderit delectus incidunt inventore omnis tempora minus. Cum odit quas quam tenetur quo vitae, voluptatibus dolorum deleniti reprehenderit inventore quibusdam ab perferendis, dolores unde qui quaerat fuga! Vel ducimus assumenda tempora.",
    timestamp: "2024-04-11T10:00:00", // Example date and time
    videos: [
      "https://www.youtube.com/watch?v=video1",
      "https://www.youtube.com/watch?v=video2",
    ],
  },
  {
    id: 2,
    title: "Lesson 2",
    description:
      "This is the second lesson. It dives deeper into the topic.",
    timestamp: "2024-04-12T11:30:00", // Example date and time
    videos: ["https://www.youtube.com/watch?v=video3"],
  },
  {
    id: 3,
    title: "Lesson 3",
    description:
      "This is the second lesson. It dives deeper into the topic.",
    timestamp: "2024-04-12T11:31:00", // Example date and time
    videos: ["https://www.youtube.com/watch?v=video3"],
  },
  // Add more lessons here
];

const OnlineDars: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"asc" | "desc">("asc");

  const filteredLessons = lessons
    .filter((lesson) =>
      lesson.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "asc") {
        return (
          new Date(a.timestamp).getTime() -
          new Date(b.timestamp).getTime()
        );
      } else {
        return (
          new Date(b.timestamp).getTime() -
          new Date(a.timestamp).getTime()
        );
      }
    });

  return (
    <div className="px-10">
      <div className="flex items-center gap-2 w-[50%] my-5">
        <Input
          placeholder="Nomi orqali qidirish..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Select
          className="w-[500px]"
          value={sortBy}
          onChange={(value) => setSortBy(value as "asc" | "desc")}
        >
          <Option value="asc">Eski darslar birinchi</Option>
          <Option value="desc">Yangi darslar birinchi</Option>
        </Select>
      </div>
      <LessonsList lessons={filteredLessons} />
    </div>
  );
};

export default OnlineDars;
