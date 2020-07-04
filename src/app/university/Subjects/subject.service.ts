import { Injectable } from '@angular/core';
import { switchMap, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { ISubjects } from './subjects.model';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private static PROJECT_KEY = 'university';

  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(public af: AngularFirestore, public db: AngularFireDatabase, public angularAuth: AngularFireAuth) {
  }

  public getCourseById(coursesId: string): Observable<ISubjects> {
    return this.af.collection<ISubjects>(SubjectService.PROJECT_KEY).doc(coursesId).valueChanges();
  }

  public getCourses(): Observable<Array<ISubjects>> {
    return this.angularAuth.user
      .pipe(takeUntil(this.unsubscribe),
        switchMap(user => {
          return this.af.collection<ISubjects>(SubjectService.PROJECT_KEY).valueChanges();
        }));
  }

  public async createCourse(course: ISubjects): Promise<void> {
    const currentUser = firebase.auth().currentUser;
    course.id = this.af.createId();
    return await this.af.collection(SubjectService.PROJECT_KEY).doc(course.id).set(course);
  }

  public async updateCourse(course: ISubjects): Promise<void> {
    const currentUser = firebase.auth().currentUser;
    return await this.af.collection(SubjectService.PROJECT_KEY).doc(course.id).set(course);
  }

  public async deleteCourse(projectId: string): Promise<void> {
    const currentUser = firebase.auth().currentUser;
    return await this.af.collection(SubjectService.PROJECT_KEY).doc(projectId).delete();
  }
}
