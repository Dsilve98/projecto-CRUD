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
import { DeleteComponent2 } from './Subjects/manage-subjects/delete/delete.component';
import { DetailComponent2 } from './Subjects/manage-subjects/detail/detail.component';
import { UpdateComponent2 } from './Subjects/manage-subjects/update/update.component';
import { DeleteComponent3 } from './Teachers/manage-teachers/delete/delete.component';
import { DetailComponent3 } from './Teachers/manage-teachers/detail/detail.component';
import { UpdateComponent3 } from './Teachers/manage-teachers/update/update.component';



@NgModule({
  declarations: [UpdateComponent3, DetailComponent3, DeleteComponent3, UpdateComponent2, DetailComponent2, DeleteComponent2, ManageCoursesComponent, ManageSubjectsComponent, ManageTeachersComponent, DeleteComponent, DetailComponent, UpdateComponent],
  imports: [
    CommonModule,
    SharedModule,
    UniversityRoutingModule
  ]
})
export class UniversityModule { }
