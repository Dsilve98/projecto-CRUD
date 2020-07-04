import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageCoursesComponent } from './Courses/manage-courses/manage-courses.component';
import { ManageSubjectsComponent } from './Subjects/manage-subjects/manage-subjects.component';
import { ManageTeachersComponent } from './Teachers/manage-teachers/manage-teachers.component';
import {UpdateComponent} from "./Courses/manage-courses/update/update.component";
import {CourseResolver} from "./Courses/course.resolver";
import {UpdateComponent2} from "./Subjects/manage-subjects/update/update.component";
import {SubjectResolver} from "./Subjects/subject.resolver";
import {DetailComponent2} from "./Subjects/manage-subjects/detail/detail.component"
import {DetailComponent} from "./Courses/manage-courses/detail/detail.component";
import {DetailComponent3} from "./Teachers/manage-teachers/detail/detail.component";
import {UpdateComponent3} from "./Teachers/manage-teachers/update/update.component";
import {TeacherResolver} from "./Teachers/teacher.resolver";
import {ManageProjectsUpdateComponent} from "../project/manage-projects/manage-projects-update.component";
import {ProjectResolver} from "../project/project.resolver";

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
        path: 'managecourses/:id/view',
        component: DetailComponent,
        resolve: {
          courses: CourseResolver
        }
      },
      {
        path: 'managecourses/:id/edit',
        component: UpdateComponent,
        resolve: {
          courses: CourseResolver
        }
      },
      {
        path: 'managesubjects/:id/view',
        component: DetailComponent2,
        resolve: {
          subject: CourseResolver
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
          subject: SubjectResolver
        }
      },
      {
        path: 'managesubjects/:id/edit',
        component: UpdateComponent2,
        resolve: {
          subject: SubjectResolver
        }
      },
      {
        path: 'manageteachers',
        component:  ManageTeachersComponent
      },
      {
        path: 'manageteachers/new',
        component: UpdateComponent3,
        resolve: {
          teacher: TeacherResolver
        }
      },
      {
        path: 'manageteachers/:id/view',
        component: DetailComponent3,
        resolve: {
          teacher: TeacherResolver
        }
      },
      {
        path: 'manageteachers/:id/edit',
        component: UpdateComponent3,
        resolve: {
          teacher: TeacherResolver
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UniversityRoutingModule { }
