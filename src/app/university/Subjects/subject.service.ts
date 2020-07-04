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

  private static SUBJECT_KEY = 'subject';

  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(public af: AngularFirestore, public db: AngularFireDatabase, public angularAuth: AngularFireAuth) {
  }

  public getSubjectById(subjectsId: string): Observable<ISubjects> {
    return this.af.collection<ISubjects>(SubjectService.SUBJECT_KEY).doc(subjectsId).valueChanges();
  }

  public getSubjects(): Observable<Array<ISubjects>> {
    return this.angularAuth.user
      .pipe(takeUntil(this.unsubscribe),
        switchMap(user => {
          return this.af.collection<ISubjects>(SubjectService.SUBJECT_KEY).valueChanges();
        }));
  }

  public async createSubject(subject: ISubjects): Promise<void> {
    const currentUser = firebase.auth().currentUser;
    subject.id = this.af.createId();
    return await this.af.collection(SubjectService.SUBJECT_KEY).doc(subject.id).set(subject);
  }

  public async updateSubject(subject: ISubjects): Promise<void> {
    const currentUser = firebase.auth().currentUser;
    return await this.af.collection(SubjectService.SUBJECT_KEY).doc(subject.id).set(subject);
  }

  public async deleteSubject(subjectId: string): Promise<void> {
    const currentUser = firebase.auth().currentUser;
    return await this.af.collection(SubjectService.SUBJECT_KEY).doc(subjectId).delete();
  }
}
