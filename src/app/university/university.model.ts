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
  subjects?: ISubjects[];
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
  public subjects?: ISubjects[]
  ){}
}

export interface ITeacher {
  id?: string;
  teacherName?: string;
  contacto?: string;
  teacherSpecialization?: string;
  city?: string;
}

export class Teacher implements ITeacher {
  constructor(
  public id?: string,
  public teacherName?: string,
  public contacto?: string,
  public teacherSpecialization?: string,
  public city?: string
){}
}


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
){}
}

