export interface ITeacher {
  id?: string;
  teacherName?: string;
  contacto?: string;
  teacherSpecialization?: string;
  city?: string;
  email?: string;
}

export class Teacher implements ITeacher {
  constructor(
    public id?: string,
    public teacherName?: string,
    public contacto?: string,
    public teacherSpecialization?: string,
    public city?: string,
    public email?: string
  ){}
}
