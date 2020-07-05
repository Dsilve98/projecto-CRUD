import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {SubjectService} from "../../subject.service";
import {ISubjects} from "../../subjects.model";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class ManageSubjectsUpdateComponent implements OnInit {

  manageSubjectForm: FormGroup;
  isSaving: boolean;

  constructor(protected activatedRoute: ActivatedRoute,
              private toastr: ToastrService,
              private subjectService: SubjectService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.createForm();
    this.activatedRoute.data.subscribe(({ subjects }) => {
      this.updateForm(subjects);
    });
  }

  saveSubject(): void {
    this.isSaving = true;
    if (!this.manageSubjectForm.get(['id']).value) {
      this.subjectService.createSubject(this.manageSubjectForm.getRawValue()).then(data => {
          this.isSaving = false;
          this.toastr.success('New subject successfully created', 'Success');
          this.router.navigate(['/managesubjects']);
        },
        err => {
          this.isSaving = false;
          this.toastr.error('An error occurred while saving a new subject', 'Error');
        });
    } else {
      this.subjectService.updateSubject(this.manageSubjectForm.getRawValue()).then(() => {
          this.isSaving = false;
          this.toastr.success('Subject successfully updated', 'Success');
          this.router.navigate(['/managesubjects']);
        },
        err => {
          this.isSaving = false;
          this.toastr.error('An error occurred while saving a new subject', 'Error');
        });
    }
  }

  previousState(): void {
    window.history.back();
  }

  private createForm() {
    this.manageSubjectForm = new FormGroup({
      id: new FormControl(''),
      creditos: new FormControl('', [Validators.required, Validators.maxLength(2)]),
      subjectName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      code: new FormControl('', [Validators.required]),
      area: new FormControl('', [Validators.required]),
      horasSemanais: new FormControl('', [Validators.required]),
      course: new FormControl('', [Validators.required]),
      formRecaptcha: new FormControl(null, [Validators.required]),
    });
  }

  private updateForm(subjects: ISubjects): void {
    this.manageSubjectForm.patchValue({
      id: subjects.id,
      creditos: subjects.creditos,
      subjectName: subjects.subjectName,
      code: subjects.code,
      horasSemanais: subjects.horasSemanais,
      area: subjects.area,
      course: subjects.course,
    });
  }
}
