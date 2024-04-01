export interface IGroup {
  id: string;
  name: string;
  course: string;
  opened: string; // Date string (DD-MM-YYYY)
  closed: string | false;
  price: number;
  room: string;
  days: (
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thursday"
    | "friday"
    | "saturday"
    | "sunday"
  )[];
  time: { start: string; end: string };
  students_number: number;
  teacher: ITeacher;
  students: IStudent[];
  sms_history: ISMS[];
  lessons: ILesson[];
  payments_history: IPayment[];
}

export interface IStudent {
  id: number;
  name: string;
  phone_number: number;
  birth_date: string;
  photo: string;
  groups: string; // Group ID
  teacher: string;
  status: "paid" | "unpaid";
  balance: number;
  payments_history: IPayments[];
}

export type Groups = string[];

export type Courses = string[];

interface IPayments {
  id: string;
  time: string; // example: 21/3/2024 13:52
  amount: number;
}

interface ISMS {
  id: string;
  time: string;
  message: string;
}

export interface ITeacher {
  id: number;
  name: string;
  phone_number: number;
  birth_date: string;
  photo: string;
  groups: IGroup[]; // Groups ID and name
  students: [{ id: number; name: string }];
  balance: number;
  payments_history: IPayments[];
}

export interface ILesson {
  id: string;
  date: string;
  title?: string;
  description?: string;
  media: {
    images: string[]; // links to images
    videos: string[]; // links to videos
  };
  attendance: IStudentAttendance[]; // all students presence or absence
}

interface IStudentAttendance {
  id: string;
  name: string;
  wasPresent: boolean;
}

export interface DataGroups {
  id: number;
  name: string;
  course: string;
  opened: string;
  time: string;
  students: number;
  teacher: string;
  rooms: string;
}

export interface IPayment {
  id: number;
  time: string;
  amount: number;
}
