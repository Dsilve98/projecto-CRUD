import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversityRoutingModule } from './university-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { ManageCoursesComponent } from './manage-courses/manage-courses.component';
import { ManageSubjectsComponent } from './manage-subjects/manage-subjects.component';
import { ManageTeachersComponent } from './manage-teachers/manage-teachers.component';
import { CreateComponent } from './manage-courses/create/create.component';
import { DeleteComponent } from './manage-courses/delete/delete.component';
import { DetailComponent } from './manage-courses/detail/detail.component';
import { UpdateComponent } from './manage-courses/update/update.component';



@NgModule({
  declarations: [ListCoursesComponent, ManageCoursesComponent, ManageSubjectsComponent, ManageTeachersComponent, CreateComponent, DeleteComponent, DetailComponent, UpdateComponent],
  imports: [
    CommonModule,
    SharedModule,
    UniversityRoutingModule
  ]
})
export class UniversityModule { }
