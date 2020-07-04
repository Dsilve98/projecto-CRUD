import { Component, OnInit } from '@angular/core';
import {ITeacher} from "../teachers.model";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgxSpinnerService} from "ngx-spinner";
import {TeacherService} from "../teacher.service";
import {DeleteComponent3} from "./delete/delete.component";

@Component({
  selector: 'app-manage-teachers',
  templateUrl: './manage-teachers.component.html',
  styleUrls: ['./manage-teachers.component.scss']
})
export class ManageTeachersComponent implements OnInit {
  teachers?: ITeacher[] = [];

  constructor(protected modalService: NgbModal, private spinner: NgxSpinnerService, private  teacherService: TeacherService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.teacherService.getTeacher().subscribe((data: ITeacher[]) => {
      this.spinner.hide();
      this.teachers = data;
    }, err => {
      this.spinner.hide();
    });
  }

    trackId(index: number, item: ITeacher): number {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
      return Number(item.id);
    }

    delete(teacher: ITeacher): void {
      const modalRef = this.modalService.open(DeleteComponent3, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.teacher = teacher;
  }
}
