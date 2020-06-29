import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IAcademic } from '../../academic.model';
import { ToastrService } from 'ngx-toastr';
import { AcademicService } from '../../academic.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  academic?: IAcademic;
  constructor(public activeModal: NgbActiveModal, private toastr: ToastrService, private projectService: AcademicService) { }

  ngOnInit(): void {
  }

  clear(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: string): void {
    this.projectService.deleteAcademic(id).then(() => {
        this.activeModal.close();
        this.toastr.success('Academic successfully deleted', 'Suceess');
      },
      err => {
        this.toastr.error('An error occurred while deleting academic with ID: ' + id , 'Error');
      });
  }
}
