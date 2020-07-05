import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";
import {CourseService} from "../../course.service";
import {ICourses} from "../../course.model";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class ManageCoursesDeleteComponent implements OnInit {
  course?: ICourses
  constructor(public activeModal: NgbActiveModal, private toastr: ToastrService, private projectService: CourseService) { }

  ngOnInit(): void {
  }

  clear(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: string): void {
    this.projectService.deleteCourse(id).then(() => {
        this.activeModal.close();
        this.toastr.success('Course successfully deleted', 'Suceess');
      },
      err => {
        this.toastr.error('An error occurred while deleting course with ID: ' + id , 'Error');
      });
  }

}
