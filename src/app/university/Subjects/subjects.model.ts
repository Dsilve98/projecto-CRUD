import {ICourses} from "../Courses/course.model";

export interface ISubjects {
  id?: string;
  creditos?: string;
  subjectName?: string;
  code?: string;
  area?: string;
  horasSemanais?: string,
  course?: ICourses
}

export class Subjects implements ISubjects {
  constructor(
    public id?: string,
    public creditos?: string,
    public subjectName?: string,
    public code?: string,
    public area?: string,
    public horasSemanais?: string,
    public course?: ICourses
  ) {
  }
}
