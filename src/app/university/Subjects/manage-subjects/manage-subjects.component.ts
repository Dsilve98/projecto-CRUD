import { Component, OnInit } from '@angular/core';
import {ManageSubjectsDeleteComponent} from "./delete/delete.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgxSpinnerService} from "ngx-spinner";
import {SubjectService} from "../subject.service";
import {ISubjects} from "../subjects.model";

@Component({
  selector: 'app-manage-subjects',
  templateUrl: './manage-subjects.component.html',
  styleUrls: ['./manage-subjects.component.scss']
})
export class ManageSubjectsComponent implements OnInit {
  subjects?: ISubjects[] = [];
  constructor(protected modalService: NgbModal, private spinner: NgxSpinnerService, private  subjectService: SubjectService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.subjectService.getSubjects().subscribe((data: ISubjects[]) => {
      this.spinner.hide();
      this.subjects = data;
    }, err => {
      this.spinner.hide();
    });
  }

  trackId(index: number, item: ISubjects): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return Number(item.id);
  }

  delete(subjects: ISubjects): void {
    const modalRef = this.modalService.open(ManageSubjectsDeleteComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.subject = subjects;
  }
}
