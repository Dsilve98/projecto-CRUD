import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {TeacherService} from "../../teacher.service";
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ITeacher} from "../../teachers.model";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class ManageTeachersUpdateComponent implements OnInit {
  teachers?: ITeacher[] = [];
  manageTeacherForm: FormGroup;
  isSaving: boolean;

  constructor(
    protected activatedRoute: ActivatedRoute,
              private toastr: ToastrService,
              private teacherService: TeacherService,
              private formBuilder: FormBuilder,
              private router: Router)  { }

  ngOnInit(): void {
    this.createForm();
    this.activatedRoute.data.subscribe(({teacher}) => {
      this.updateForm(teacher);
    });
    this.teacherService.getTeacher().subscribe((data: ITeacher[]) => {
      this.teachers = data;
    });
  }

  saveTeacher(): void {
    this.isSaving = true;
    if (!this.manageTeacherForm.get(['id']).value) {
      this.teacherService.createTeacher(this.manageTeacherForm.getRawValue()).then(data => {
          this.isSaving = false;
          this.toastr.success('New Teacher successfully created', 'Success');
          this.router.navigate(['/manageteachers']);
        },
        err => {
          this.isSaving = false;
          this.toastr.error('An error occurred while saving a new teacher', 'Error');
        });
    } else {
      this.teacherService.updateTeacher(this.manageTeacherForm.getRawValue()).then(() => {
          this.isSaving = false;
          this.toastr.success('Teacher successfully updated', 'Success');
          this.router.navigate(['/manageteachers']);
        },
        err => {
          this.isSaving = false;
          this.toastr.error('An error occurred while saving a new teacher', 'Error');
        });
    }
  }

  previousState(): void {
    window.history.back();
  }

  private createForm() {
    this.manageTeacherForm = new FormGroup({
      id: new FormControl(''),
      teacherName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      contacto: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      teacherSpecialization: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      formRecaptcha: new FormControl(null, [Validators.required]),
    });
  }

  private updateForm(teacher: ITeacher): void {
    this.manageTeacherForm.patchValue({
      id: teacher.id,
      teacherName: teacher.teacherName,
      contacto: teacher.contacto,
      teacherSpecialization: teacher.teacherSpecialization,
      email: teacher.email,
      city: teacher.city,
    });
  }
}
