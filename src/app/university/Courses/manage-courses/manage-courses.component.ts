import { Component, OnInit } from '@angular/core';
import {ICourses} from "../course.model";
import {ManageProjectsDeleteDialogComponent} from "../../../project/manage-projects/manage-projects-delete-dialog.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgxSpinnerService} from "ngx-spinner";
import {CourseService} from "../course.service";

@Component({
  selector: 'app-manage-courses',
  templateUrl: './manage-courses.component.html',
  styleUrls: ['./manage-courses.component.scss']
})
export class ManageCoursesComponent implements OnInit {
  courses?: ICourses[] = [];

  constructor(protected modalService: NgbModal, private spinner: NgxSpinnerService, private  projectService: CourseService) { }

  ngOnInit(): void {
  }

  trackId(index: number, item: ICourses): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return Number(item.id);
  }

  delete(course: ICourses): void {
    const modalRef = this.modalService.open(ManageProjectsDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.project = course;
  }

}
