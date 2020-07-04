import { Injectable } from '@angular/core';
import { IProject } from '../project/project.model';
import { ICertification } from '../education/certifications/certification.model';
import { IAcademic } from '../education/academic/academic.model';
import {Observable, Subject} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';
import {switchMap, takeUntil} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  private static PROJECT_KEY = 'project';
  private static ACADEMIC_KEY = 'academic';
  private static CERTIFICATION_KEY = 'certification';

  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(public af: AngularFirestore, public db: AngularFireDatabase, public angularAuth: AngularFireAuth) {
  }

  public getProjects(): Observable<Array<IProject>> {
    return this.angularAuth.user
      .pipe(takeUntil(this.unsubscribe),
        switchMap(user => {
          return this.af.collection<IProject>(HomeService.PROJECT_KEY).valueChanges();
        }));
  }

  public getAcademics(): Observable<Array<IAcademic>> {
    return this.angularAuth.user
      .pipe(takeUntil(this.unsubscribe),
        switchMap(user => {
          return this.af.collection<IAcademic>(HomeService.ACADEMIC_KEY).valueChanges();
        }));
  }

  public getCertifications(): Observable<Array<ICertification>> {
    return this.angularAuth.user
      .pipe(takeUntil(this.unsubscribe),
        switchMap(user => {
          return this.af.collection<ICertification>(HomeService.CERTIFICATION_KEY).valueChanges();
        }));
  }

  public getProjectById(projectId: string): Observable<ICertification> {
    return this.af.collection<IProject>(HomeService.PROJECT_KEY).doc(projectId).valueChanges();
  }

  public getAcademicById(academicId: string): Observable<ICertification> {
    return this.af.collection<IAcademic>(HomeService.ACADEMIC_KEY).doc(academicId).valueChanges();
  }

  public getCertificationById(certificationId: string): Observable<ICertification> {
    return this.af.collection<ICertification>(HomeService.CERTIFICATION_KEY).doc(certificationId).valueChanges();
  }

}
