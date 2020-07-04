import { Component, OnInit } from '@angular/core';
import {ICourses} from "../../Courses/course.model";
import {DeleteComponent2} from "../manage-subjects/delete/delete.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgxSpinnerService} from "ngx-spinner";
import {CourseService} from "../../Courses/course.service";
import {ISubjects} from "../subjects.model";

@Component({
  selector: 'app-manage-subjects',
  templateUrl: './manage-subjects.component.html',
  styleUrls: ['./manage-subjects.component.scss']
})
export class ManageSubjectsComponent implements OnInit {
  subjects?: ISubjects[] = [];
  constructor(protected modalService: NgbModal, private spinner: NgxSpinnerService, private  projectService: CourseService) { }

  ngOnInit(): void {
  }
  trackId(index: number, item: ICourses): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return Number(item.id);
  }

  delete(subjects: ISubjects): void {
    const modalRef = this.modalService.open(DeleteComponent2, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.subject = subjects;
  }
}
