export interface ICourses {
  id?: string;
  courseName?: string;
  teachers?: Teachers;
  city?: string;
  numeroAlunos?: string;
  media?: string;
}

export class Teachers implements ICourses {
  constructor(
    public id?: string,
    public teachersName?: string,
    public contacto?: string,
  ) {}
}

export class Subjects implements ICourses {
  constructor(
    public id?: string,
    public subjectName?: string,
  ) {}
}

