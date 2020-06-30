import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationRoutingModule } from './education-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ManageAcademicStudiesComponent } from './academic/manage-academic-studies/manage-academic-studies.component';
import { ManageCertificationsComponent } from './certifications/manage-certifications/manage-certifications.component';
import { UpdateComponent } from './academic/manage-academic-studies/update/update.component';
import { DeleteComponent } from './academic/manage-academic-studies/delete/delete.component';
import { UpdateComponent2 } from './certifications/manage-certifications/update/update.component';
import { DeleteComponent2 } from './certifications/manage-certifications/delete/delete.component';
import { DetailComponent } from './academic/manage-academic-studies/detail/detail.component';
import { DetailComponent2 } from './certifications/manage-certifications/detail/detail.component';


@NgModule({
  declarations: [ManageAcademicStudiesComponent, DetailComponent2, ManageCertificationsComponent, UpdateComponent, DeleteComponent, DeleteComponent2, UpdateComponent2, DetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    EducationRoutingModule
  ]
})
export class EducationModule { }
