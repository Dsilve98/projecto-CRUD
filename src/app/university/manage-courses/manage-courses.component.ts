import { Component, OnInit } from '@angular/core';
import {IProject} from "../../project/project.model";
import {ICourses} from "../university.model";
import {ManageProjectsDeleteDialogComponent} from "../../project/manage-projects/manage-projects-delete-dialog.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgxSpinnerService} from "ngx-spinner";
import {UniversityService} from "../../university/university.service";

@Component({
  selector: 'app-manage-courses',
  templateUrl: './manage-courses.component.html',
  styleUrls: ['./manage-courses.component.scss']
})
export class ManageCoursesComponent implements OnInit {
  courses?: ICourses[] = [];

  constructor(protected modalService: NgbModal, private spinner: NgxSpinnerService, private  projectService: UniversityService) { }

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
