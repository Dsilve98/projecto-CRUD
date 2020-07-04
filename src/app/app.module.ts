import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './layouts/footer/footer.component';
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { ProjectModule } from './project/project.module';
import { EducationModule } from './education/education.module';
import { UniversityModule } from './university/university.module';
import { ContactsModule } from './contacts/contacts.module';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { NgxSpinnerModule } from 'ngx-spinner';

export const firebaseConfig = {
  apiKey: 'AIzaSyDo4FDuveKILEHLY4icN1gc14zsAM8q46w',
  authDomain: 'projeto-crud-ac-ds.firebaseapp.com',
  databaseURL: 'https://projeto-crud-ac-ds.firebaseio.com',
  projectId: 'projeto-crud-ac-ds',
  storageBucket: 'projeto-crud-ac-ds.appspot.com',
  messagingSenderId: '135953243600',
  appId: '1:135953243600:web:1159458ffcff0ab3186dd5',
  measurementId: 'G-1ZM0WET6L9'
};


@NgModule({
  declarations: [
    FooterComponent,
    MainComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    ProjectModule,
    EducationModule,
    UniversityModule,
    ContactsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates: true
    }),
    NgxSpinnerModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
