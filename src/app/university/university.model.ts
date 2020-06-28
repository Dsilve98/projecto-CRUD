export interface IUniversity {
  id?: string;
  universitytName?: string;
  state?: string;
  city?: string;
}

export class Courses implements IUniversity {
  constructor(
    public id?: string,
    public courseName?: string,
    public coordenacao?: string,
    public registo?: string,
    public qtdCadeiras?: string,
    public professores?: string[],
    public state?: string,
    public city?: string,
  ) {}
}

