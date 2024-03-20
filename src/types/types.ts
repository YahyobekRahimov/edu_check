export interface IGroup {
  id: number;
  name: string;
  course: string;
  opened: string; // Date string (YYYY-MM-DD)
  days: string[];
  time: string;
  students: number;
}

export interface ITeacher {
  id: string;
  firstName: string;
  lastName?: string;
  birthDate: IDate;
}

export interface ILesson {
  date: IDate;
  attendance: AttendanceType;
}

export type AttendanceType = {
  firstName: string;
  lastName: string;
  patronymicName: string;
  wasPresent: boolean;
}[];

export interface IDate {
  year: number;
  month: number;
  day: number;
}
export interface DataGroups {
  key: number;
  Guruh: string;
  kursName: string;
  teacher: string;
  pastDate: string;
  rooms: string;
  amoundStudent: number;
  actions: any;
}
