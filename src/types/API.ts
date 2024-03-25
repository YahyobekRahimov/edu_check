type Groups = {
  id: string;
  name: string;
  course: string;
  opened: string;
  closed: string | false;
  price: number;
}[];

type AttendanceForEachLesson = {
  student: string;
  lessons: { date: string; wasPresent: boolean }[];
}[];
