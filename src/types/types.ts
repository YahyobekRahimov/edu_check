export interface IGroup {
  name: string;
  courseName: string;
  groupSchedule: {
    days: ["odd"] | ["even"] | ["every_day"] | ["weekend"] | string[];
    time: string;
  };
  groupStart: IDate;
  groupEnd: IDate;
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