import { Component, OnInit } from '@angular/core';
import {ISubjects} from "../../subjects.model";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";
import {SubjectService} from "../../subject.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent2 implements OnInit {
  subject?: ISubjects;

  constructor(public activeModal: NgbActiveModal, private toastr: ToastrService, private subjecttService: SubjectService) { }

  ngOnInit(): void {
  }
  confirmDelete(id: string): void {
    this.subjecttService.deleteCourse(id).then(() => {
        this.activeModal.close();
        this.toastr.success('Project successfully deleted', 'Suceess');
      },
      err => {
        this.toastr.error('An error occurred while deleting project with ID: ' + id , 'Error');
      });
  }
}
