import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageCoursesComponent } from './Courses/manage-courses/manage-courses.component';
import { ManageSubjectsComponent } from './Subjects/manage-subjects/manage-subjects.component';
import { ManageTeachersComponent } from './Teachers/manage-teachers/manage-teachers.component';
import {UpdateComponent} from "./Courses/manage-courses/update/update.component";
import {CourseResolver} from "./Courses/course.resolver";
import {UpdateComponent2} from "./Subjects/manage-subjects/update/update.component";
import {SubjectResolver} from "./Subjects/subject.resolver";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'managecourses',
        component:  ManageCoursesComponent
      },
      {
        path: 'managecourses/new',
        component: UpdateComponent,
        resolve: {
          courses: CourseResolver
        }
      },
      {
        path: 'managesubjects',
        component:  ManageSubjectsComponent
      },
      {
        path: 'managesubjects/new',
        component: UpdateComponent2,
        resolve: {
          courses: SubjectResolver
        }
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
