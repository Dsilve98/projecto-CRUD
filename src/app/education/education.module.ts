import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationRoutingModule } from './education-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ManageAcademicStudiesComponent } from './academic/manage-academic-studies/manage-academic-studies.component';
import { ManageCertificationsComponent } from './certifications/manage-certifications/manage-certifications.component';
import { CreateComponent } from './academic/manage-academic-studies/create/create.component';
import { UpdateComponent } from './academic/manage-academic-studies/update/update.component';
import { DeleteComponent } from './academic/manage-academic-studies/delete/delete.component';



@NgModule({
  declarations: [ManageAcademicStudiesComponent, ManageCertificationsComponent, CreateComponent, UpdateComponent, DeleteComponent],
  imports: [
    CommonModule,
    SharedModule,
    EducationRoutingModule
  ]
})
export class EducationModule { }
