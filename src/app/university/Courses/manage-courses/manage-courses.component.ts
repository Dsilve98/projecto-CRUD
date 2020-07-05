import { Component, OnInit } from '@angular/core';
import {ICourses} from "../course.model";
import {ManageCoursesDeleteComponent} from "./delete/delete.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgxSpinnerService} from "ngx-spinner";
import {CourseService} from "../course.service";
import {ITeacher} from "../../Teachers/teachers.model";

@Component({
  selector: 'app-manage-courses',
  templateUrl: './manage-courses.component.html',
  styleUrls: ['./manage-courses.component.scss']
})
export class ManageCoursesComponent implements OnInit {
  courses?: ICourses[] = [];

  constructor(protected modalService: NgbModal, private spinner: NgxSpinnerService, private  courseService: CourseService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.courseService.getCourses().subscribe((data: ITeacher[]) => {
      this.spinner.hide();
      this.courses = data;
    }, err => {
      this.spinner.hide();
    });
  }

  trackId(index: number, item: ICourses): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return Number(item.id);
  }

  delete(course: ICourses): void {
    const modalRef = this.modalService.open(ManageCoursesDeleteComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.course = course;
  }

}
