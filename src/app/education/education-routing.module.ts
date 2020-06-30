import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageAcademicStudiesComponent } from './academic/manage-academic-studies/manage-academic-studies.component';
import { ManageCertificationsComponent } from './certifications/manage-certifications/manage-certifications.component';
import {UpdateComponent} from "./academic/manage-academic-studies/update/update.component";
import {AcademicResolver} from "./academic/academic.resolver";
import {UpdateComponent2} from "./certifications/manage-certifications/update/update.component";
import {CertificationResolver} from "./certifications/certification.resolver";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'manageacademicstudies',
        component: ManageAcademicStudiesComponent
      },
      {
        path: 'manageacademicstudies/new',
        component: UpdateComponent,
        resolve: {
          academic: AcademicResolver
        }
      },
      {
        path: 'managecertifications/new',
        component: UpdateComponent2,
        resolve: {
          academic: CertificationResolver
        }
      },
      {
        path: 'managecertifications',
        component: ManageCertificationsComponent
      }]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EducationRoutingModule { }
