import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { UniversityResolver } from './university.resolver';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { ManageCoursesComponent } from './manage-courses/manage-courses.component';
import { ManageSubjectsComponent } from './manage-subjects/manage-subjects.component';
import { ManageTeachersComponent } from './manage-teachers/manage-teachers.component';
import {UpdateComponent} from "../university/manage-courses/update/update.component";
import {ProjectResolver} from "../project/project.resolver";
import {UniversityResolver} from "./university.resolver";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'listcourses',
        component: ListCoursesComponent
      },
      {
        path: 'managecourses',
        component:  ManageCoursesComponent
      },
      {
        path: 'managecourses/new',
        component: UpdateComponent,
        resolve: {
          courses: UniversityResolver
        }
      },
      {
        path: 'managesubjects',
        component:  ManageSubjectsComponent
      },
      {
        path: 'manageteachers',
        component:  ManageTeachersComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UniversityRoutingModule { }
