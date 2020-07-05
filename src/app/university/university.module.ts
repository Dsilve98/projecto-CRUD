import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversityRoutingModule } from './university-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ManageCoursesComponent } from './Courses/manage-courses/manage-courses.component';
import { ManageSubjectsComponent } from './Subjects/manage-subjects/manage-subjects.component';
import { ManageTeachersComponent } from './Teachers/manage-teachers/manage-teachers.component';
import { ManageCoursesDeleteComponent } from './Courses/manage-courses/delete/delete.component';
import { ManageCoursesDetailComponent } from './Courses/manage-courses/detail/detail.component';
import { ManageCoursesUpdateComponent } from './Courses/manage-courses/update/update.component';
import { ManageSubjectsDeleteComponent } from './Subjects/manage-subjects/delete/delete.component';
import { ManageSubjectsDetailComponent } from './Subjects/manage-subjects/detail/detail.component';
import { ManageSubjectsUpdateComponent } from './Subjects/manage-subjects/update/update.component';
import { ManageTeachersDeleteComponent } from './Teachers/manage-teachers/delete/delete.component';
import { ManageTeachersDetailComponent } from './Teachers/manage-teachers/detail/detail.component';
import { ManageTeachersUpdateComponent } from './Teachers/manage-teachers/update/update.component';



@NgModule({
  declarations: [ManageCoursesDeleteComponent, ManageCoursesDetailComponent, ManageCoursesUpdateComponent, ManageSubjectsDeleteComponent, ManageSubjectsDetailComponent, ManageSubjectsUpdateComponent, ManageCoursesComponent, ManageSubjectsComponent, ManageTeachersComponent, ManageTeachersDeleteComponent, ManageTeachersDetailComponent, ManageTeachersUpdateComponent],
  imports: [
    CommonModule,
    SharedModule,
    UniversityRoutingModule
  ]
})
export class UniversityModule { }
