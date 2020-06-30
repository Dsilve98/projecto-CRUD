import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ICertification } from '../../certification.model';
import { ToastrService } from 'ngx-toastr';
import { CertificationService } from '../../certification.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent2 implements OnInit {
  academic?: ICertification;
  constructor(public activeModal: NgbActiveModal, private toastr: ToastrService, private projectService: CertificationService) { }

  ngOnInit(): void {
  }
  clear(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: string): void {
    this.projectService.deleteCertification(id).then(() => {
        this.activeModal.close();
        this.toastr.success('Certification successfully deleted', 'Suceess');
      },
      err => {
        this.toastr.error('An error occurred while deleting certification with ID: ' + id , 'Error');
      });
  }
}
