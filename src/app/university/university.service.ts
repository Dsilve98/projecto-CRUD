import { Injectable } from '@angular/core';
import { switchMap, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { ICourses } from './university.model';
import * as firebase from 'firebase';
import {IProject} from "../project/project.model";

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  private static PROJECT_KEY = 'university';

  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(public af: AngularFirestore, public db: AngularFireDatabase, public angularAuth: AngularFireAuth) {
  }

  public getCourseById(coursesId: string): Observable<ICourses> {
    return this.af.collection<ICourses>(UniversityService.PROJECT_KEY).doc(coursesId).valueChanges();
  }

    public getCourses(): Observable<Array<ICourses>> {
    return this.angularAuth.user
      .pipe(takeUntil(this.unsubscribe),
        switchMap(user => {
          return this.af.collection<ICourses>(UniversityService.PROJECT_KEY).valueChanges();
        }));
  }

  public async createCourse(project: IProject): Promise<void> {
    const currentUser = firebase.auth().currentUser;
    project.id = this.af.createId();
    project.projectTeamMembers.forEach(ptm => ptm.id = this.af.createId());
    return await this.af.collection(UniversityService.PROJECT_KEY).doc(project.id).set(project);
  }

  public async updateCourse(project: IProject): Promise<void> {
    const currentUser = firebase.auth().currentUser;
    project.projectTeamMembers.filter(ptm => !ptm.id).forEach(ptmFiltered => ptmFiltered.id = this.af.createId());
    return await this.af.collection(UniversityService.PROJECT_KEY).doc(project.id).set(project);
  }

  public async deleteCourse(projectId: string): Promise<void> {
    const currentUser = firebase.auth().currentUser;
    return await this.af.collection(UniversityService.PROJECT_KEY).doc(projectId).delete();
  }
}
