import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversityRoutingModule } from './university-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { ManageCoursesComponent } from './manage-courses/manage-courses.component';
import { ManageSubjectsComponent } from './manage-subjects/manage-subjects.component';
import { ManageTeachersComponent } from './manage-teachers/manage-teachers.component';



@NgModule({
  declarations: [ListCoursesComponent, ManageCoursesComponent, ManageSubjectsComponent, ManageTeachersComponent],
  imports: [
    CommonModule,
    SharedModule,
    UniversityRoutingModule
  ]
})
export class UniversityModule { }
