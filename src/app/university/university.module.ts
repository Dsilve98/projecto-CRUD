import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversityRoutingModule } from './university-routing.module';
import { SharedModule } from '../shared/shared.module';
//import { ListCoursesComponent } from './list-courses/list-courses.component';
import { ManageCoursesComponent } from './Courses/manage-courses/manage-courses.component';
import { ManageSubjectsComponent } from './Subjects/manage-subjects/manage-subjects.component';
import { ManageTeachersComponent } from './Teachers/manage-teachers/manage-teachers.component';
import { DeleteComponent } from './Courses/manage-courses/delete/delete.component';
import { DetailComponent } from './Courses/manage-courses/detail/detail.component';
import { UpdateComponent } from './Courses/manage-courses/update/update.component';



@NgModule({
  declarations: [ManageCoursesComponent, ManageSubjectsComponent, ManageTeachersComponent, DeleteComponent, DetailComponent, UpdateComponent],
  imports: [
    CommonModule,
    SharedModule,
    UniversityRoutingModule
  ]
})
export class UniversityModule { }
