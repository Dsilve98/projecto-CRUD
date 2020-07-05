import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";
import {TeacherService} from "../../teacher.service";
import {ITeacher} from "../../teachers.model";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class ManageTeachersDeleteComponent implements OnInit {
  teacher?: ITeacher;
  constructor(public activeModal: NgbActiveModal, private toastr: ToastrService, private projectService: TeacherService) { }

  ngOnInit(): void {
  }

  clear(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: string): void {
    this.projectService.deleteTeacher(id).then(() => {
        this.activeModal.close();
        this.toastr.success('Teacher successfully deleted', 'Suceess');
      },
      err => {
        this.toastr.error('An error occurred while deleting teacher with ID: ' + id , 'Error');
      });
  }
}
