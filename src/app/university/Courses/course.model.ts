import {ITeacher} from "../Teachers/teachers.model";

export interface ICourses {
  id?: string;
  courseName?: string;
  maxStudents?: string;
  average?: string;
  examDate?: string;
  credits?: string;
  numberHalfs?: string;
  area?: string;
  teachers?: ITeacher[];
}

export class Courses implements ICourses {
  constructor(
    public id?: string,
    public courseName?: string,
    public maxStudents?: string,
    public average?: string,
    public examDate?: string,
    public credits?: string,
    public numberHalfs?: string,
    public area?: string,
    public teachers?: ITeacher[],
  ){}
}
