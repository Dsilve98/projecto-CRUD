import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ICourses, Courses } from './course.model';
import { CourseService } from './course.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({ providedIn: 'root' })
export class CourseResolver implements Resolve<ICourses> {
  constructor(private router: Router, private spinner: NgxSpinnerService, private projectService: CourseService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ICourses> | Observable<never> {
    const id = route.params.id;
    if (id) {
      this.spinner.show();
      return this.projectService.getCourseById(id).pipe(map((data: ICourses) => {
        this.spinner.hide();
        if (data) {
          return data;
        } else {
          this.router.navigate(['404']);
          return null;
        }
      }, err => {
        this.spinner.hide();
      }), take(1));
    }
    return of(new Courses());
  }
}
