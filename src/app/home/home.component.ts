import { Component, OnInit } from '@angular/core';
import {IProject, Project} from '../project/project.model';
import {Academic, IAcademic} from '../education/academic/academic.model';
import {Certification, ICertification} from '../education/certifications/certification.model';
import { ProjectService } from '../project/project.service';
import { AcademicService } from '../education/academic/academic.service';
import { CertificationService } from '../education/certifications/certification.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public totalProjects: Array<IProject> = new Array<IProject>();
  public lastProject: IProject;

  public totalAcademics: Array<IAcademic> = new Array<IAcademic>();
  public lastAcademic: IAcademic;

  public totalCertifications: Array<ICertification> = new Array<ICertification>();
  public lastCertification: ICertification;
  /*arrayProject: Project[];
  academics$: Observable<Academic[]>;
  certifications$: Observable<Certification[]>;*/
  constructor(private projectService: ProjectService,
              private academicService: AcademicService,
              private certificationService: CertificationService,
              private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.projectService.getProjects().subscribe(projects => {
      this.spinner.hide();
      projects.forEach(project => this.totalProjects.push(Object.assign({}, project)));
      this.getLastProject();
    }, error => {
      this.spinner.hide();
    });

    this.academicService.getAcademics().subscribe(academics => {
      this.spinner.hide();
      academics.forEach(academic => this.totalAcademics.push(Object.assign({}, academic)));
      this.getLastAcademic();
    }, error => {
      this.spinner.hide();
    });

    this.certificationService.getCertifications().subscribe(certifications => {
      this.spinner.hide();
      certifications.forEach(certification => this.totalCertifications.push(Object.assign({}, certification)));
      this.getLastCertification();
    }, error => {
      this.spinner.hide();
    });
  }

  public async getLastProject() {
    let lastProjectLocal: IProject = this.totalProjects[0];

    for (let i of this.totalProjects){
      if (i.timeStamp >= lastProjectLocal.timeStamp){
        lastProjectLocal = i;
      }
    }

    this.lastProject = lastProjectLocal;
  }

  public async getLastAcademic() {
    let lastAcademicLocal: IAcademic = this.totalAcademics[0];

    for (let i of this.totalAcademics){
      if (i.timeStamp >= lastAcademicLocal.timeStamp){
        lastAcademicLocal = i;
      }
    }

    this.lastAcademic = lastAcademicLocal;
  }

  public async getLastCertification() {
    let lastCertificationLocal: ICertification = this.totalCertifications[0];

    for (let i of this.totalCertifications){
      if (i.timeStamp >= lastCertificationLocal.timeStamp){
        lastCertificationLocal = i;
      }
    }

    this.lastCertification = lastCertificationLocal;
  }
}
