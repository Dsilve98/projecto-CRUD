import { Injectable } from '@angular/core';
import { switchMap, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { IUniversity } from './university.model';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  private static PROJECT_KEY = 'university';

  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(public af: AngularFirestore, public db: AngularFireDatabase, public angularAuth: AngularFireAuth) {
  }

  public getProjects(): Observable<Array<IUniversity>> {
    return this.angularAuth.user
      .pipe(takeUntil(this.unsubscribe),
        switchMap(user => {
          return this.af.collection<IUniversity>(UniversityService.PROJECT_KEY).valueChanges();
        }));
  }
}
