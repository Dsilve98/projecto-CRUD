import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageCoursesComponent } from './Courses/manage-courses/manage-courses.component';
import { ManageSubjectsComponent } from './Subjects/manage-subjects/manage-subjects.component';
import { ManageTeachersComponent } from './Teachers/manage-teachers/manage-teachers.component';
import {ManageCoursesUpdateComponent} from "./Courses/manage-courses/update/update.component";
import {CourseResolver} from "./Courses/course.resolver";
import {ManageSubjectsUpdateComponent} from "./Subjects/manage-subjects/update/update.component";
import {SubjectResolver} from "./Subjects/subject.resolver";
import {ManageSubjectsDetailComponent} from "./Subjects/manage-subjects/detail/detail.component"
import {ManageCoursesDetailComponent} from "./Courses/manage-courses/detail/detail.component";
import {ManageTeachersDetailComponent} from "./Teachers/manage-teachers/detail/detail.component";
import {ManageTeachersUpdateComponent} from "./Teachers/manage-teachers/update/update.component";
import {TeacherResolver} from "./Teachers/teacher.resolver";

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
        component: ManageCoursesUpdateComponent,
        resolve: {
          courses: CourseResolver
        }
      },
      {
        path: 'managecourses/:id/view',
        component: ManageCoursesDetailComponent,
        resolve: {
          courses: CourseResolver
        }
      },
      {
        path: 'managecourses/:id/edit',
        component: ManageCoursesUpdateComponent,
        resolve: {
          courses: CourseResolver
        }
      },
      {
        path: 'managesubjects/:id/view',
        component: ManageSubjectsDetailComponent,
        resolve: {
          subjects: SubjectResolver
        }
      },
      {
        path: 'managesubjects',
        component:  ManageSubjectsComponent
      },
      {
        path: 'managesubjects/new',
        component: ManageSubjectsUpdateComponent,
        resolve: {
          subject: SubjectResolver
        }
      },
      {
        path: 'managesubjects/:id/edit',
        component: ManageSubjectsUpdateComponent,
        resolve: {
          subjects: SubjectResolver
        }
      },
      {
        path: 'manageteachers',
        component:  ManageTeachersComponent
      },
      {
        path: 'manageteachers/new',
        component: ManageTeachersUpdateComponent,
        resolve: {
          teacher: TeacherResolver
        }
      },
      {
        path: 'manageteachers/:id/view',
        component: ManageTeachersDetailComponent,
        resolve: {
          teachers: TeacherResolver
        }
      },
      {
        path: 'manageteachers/:id/edit',
        component: ManageTeachersUpdateComponent,
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
