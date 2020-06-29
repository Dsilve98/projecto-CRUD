//import { Injectable } from '@angular/core';
//import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
//import { Observable, of } from 'rxjs';
//import { map, take } from 'rxjs/operators';
//import { IUniversity, University } from './university.model';
//import { UniversityService } from './university.service';
//import { NgxSpinnerService } from 'ngx-spinner';

//@Injectable({ providedIn: 'root' })
//export class ProjectResolver implements Resolve<IUniversity> {
  //constructor(private router: Router, private spinner: NgxSpinnerService, private projectService: UniversityService) {}

 /* resolve(route: ActivatedRouteSnapshot): Observable<IUniversity> | Observable<never> {
    const id = route.params.id;
    if (id) {
      this.spinner.show();
      return this.projectService.getProjectById(id).pipe(map((data: IUniversity) => {
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
    return of(new University());
  }*/
//}
