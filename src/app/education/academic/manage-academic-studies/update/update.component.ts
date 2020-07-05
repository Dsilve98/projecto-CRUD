import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Academic } from '../../academic.model';
import { ToastrService } from 'ngx-toastr';
import { AcademicService } from '../../academic.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  manageAcademicForm: FormGroup;
  isSaving: boolean;

  constructor(
    protected activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private projectService: AcademicService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.createForm();
    this.activatedRoute.data.subscribe(({ academic }) => {
      this.updateForm(academic);
    });
  }

  saveAcademics(): void {
    this.isSaving = true;
    if (!this.manageAcademicForm.get(['id']).value) {
      this.projectService.createAcademic(this.manageAcademicForm.getRawValue()).then(data => {
          this.isSaving = false;
          this.toastr.success('New Academic successfully created', 'Success');
          this.router.navigate(['/manageacademicstudies']);
        },
        err => {
          this.isSaving = false;
          this.toastr.error('An error occurred while saving a new academic', 'Error');
        });
    } else {
      this.projectService.updateAcademic(this.manageAcademicForm.getRawValue()).then(() => {
          this.isSaving = false;
          this.toastr.success('Project successfully updated', 'Success');
          this.router.navigate(['/manageacademicstudies']);
        },
        err => {
          this.isSaving = false;
          this.toastr.error('An error occurred while saving a new academic', 'Error');
        });
    }
  }

  previousState(): void {
    window.history.back();
  }

  private createForm() {
    this.manageAcademicForm = new FormGroup({
      id: new FormControl(''),
      educationalInstitution: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      formation: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      fieldOfStudy: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      grade: new FormControl('', [Validators.required]),
      activities: new FormControl('', [Validators.required,  Validators.maxLength(20)]),
      description: new FormControl('', [Validators.required]),
    });
  }

  private updateForm(academic: Academic): void {
    this.manageAcademicForm.patchValue({
      id: academic.id,
      educationalInstitution: academic.educationalInstitution,
      formation: academic.formation,
      fieldOfStudy: academic.fieldOfStudy,
      startDate: academic.startDate,
      endDate: academic.endDate,
      grade: academic.grade,
      activities: academic.activities,
      description: academic.description
    });
  }
}
