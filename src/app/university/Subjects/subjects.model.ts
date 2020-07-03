export interface ISubjects {
  id?: string;
  subName?: string;
  creditos?: string;
  subjectName?: string;
}

export class Subjects implements Subjects {
  constructor(
    public id?: string,
    public subName?: string,
    public creditos?: string,
    public subjectName?: string
  ) {
  }
}
