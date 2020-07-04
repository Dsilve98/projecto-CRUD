import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { Project } from '../project/project.model';
import { Academic } from '../education/academic/academic.model';
import { Certification } from '../education/certifications/certification.model';
import {ProjectService} from '../project/project.service';
import {AcademicService} from '../education/academic/academic.service';
import {CertificationService} from '../education/certifications/certification.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  projects$: Observable<Project[]>;
  lastProject: Observable<Project[]>;
  academics$: Observable<Academic[]>;
  certifications$: Observable<Certification[]>;

  constructor(private projectService: ProjectService,
              private academicService: AcademicService,
              private certificationService: CertificationService) { }

  ngOnInit(): void {

    this.projects$ = this.projectService.loadAllTeachers();

    this.lastProject = this.projects$.pipe(
      map(projects => projects.filter(
        project => project.projectName.includes('Internet 2.0')
      ))
    );
  }
}
