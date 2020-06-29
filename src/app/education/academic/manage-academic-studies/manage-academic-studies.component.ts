import { Component, OnInit } from '@angular/core';
import { IAcademic } from '../academic.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteComponent } from './delete/delete.component';
import { AcademicService } from '../academic.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-manage-academic-studies',
  templateUrl: './manage-academic-studies.component.html',
  styleUrls: ['./manage-academic-studies.component.scss']
})
export class ManageAcademicStudiesComponent implements OnInit {
  academics?: IAcademic[] = [];
  constructor(protected modalService: NgbModal, private spinner: NgxSpinnerService, private  projectService: AcademicService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.projectService.getAcademics().subscribe((data: IAcademic[])  => {
      this.spinner.hide();
      this.academics = data;
    }, err => {
      this.spinner.hide();
    });
  }

  trackId(index: number, item: IAcademic): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return Number(item.id);
  }

  delete(academics: IAcademic): void {
    const modalRef = this.modalService.open(DeleteComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.academic = academics;
  }
}
