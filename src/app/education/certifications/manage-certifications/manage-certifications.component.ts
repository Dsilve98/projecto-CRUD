import { Component, OnInit } from '@angular/core';
import { ICertification } from '../certification.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteComponent2 } from './delete/delete.component';
import { CertificationService } from '../certification.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-manage-certifications',
  templateUrl: './manage-certifications.component.html',
  styleUrls: ['./manage-certifications.component.scss']
})
export class ManageCertificationsComponent implements OnInit {
  certifications?: ICertification[] = [];
  constructor(protected modalService: NgbModal, private spinner: NgxSpinnerService, private  projectService: CertificationService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.projectService.getCertifications().subscribe((data: ICertification[]) => {
      this.spinner.hide();
      this.certifications = data;
    }, err => {
      this.spinner.hide();
    });
  }
    trackId(index: number, item: ICertification): number {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
      return Number(item.id);
    }

    delete(certifications: ICertification): void {
      const modalRef = this.modalService.open(DeleteComponent2, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.academic = certifications;
  }
}
