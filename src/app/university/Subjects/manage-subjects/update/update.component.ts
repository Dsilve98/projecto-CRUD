import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {SubjectService} from "../../subject.service";
import {ISubjects} from "../../subjects.model";
import {ITeacher} from "../../../Teachers/teachers.model";
import {ICourses} from "../../../Courses/course.model";

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
    this.activatedRoute.data.subscribe(({ teachers }) => {
      this.getTeacher(teachers);
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
      teachers: this.formBuilder.array([]),
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

  addTeacher(): void {
    (this.manageSubjectForm.get(['teachers']) as FormArray).push(this.createTeacherFormGroup());
  }

  private createTeacherFormGroup(): FormGroup {
    return new FormGroup({
      id: new FormControl(''),
      teacherName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      contacto: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      teacherSpecialization: new FormControl('', [Validators.required]),
      city: new FormControl('')
    });
  }

  private getTeacher(teacher: ITeacher): void {
    this.manageSubjectForm.patchValue({
      id: teacher.id,
      teacherName: teacher.teacherName,
      contacto: teacher.contacto,
      city: teacher.city,
      teacherSpecialization: teacher.teacherSpecialization,
    });
  }

  private Teacher(courses: ICourses): FormGroup[] {
    const fg: FormGroup[] = [];
    if (!courses.teachers) {
      courses.teachers = [];
    }
    courses.teachers.forEach(teacher => {
      (this.formBuilder.group({
          id: new FormControl(teacher.id),
          teacherSpecialization: new FormControl(teacher.teacherSpecialization, [Validators.required, Validators.maxLength(50)]),
          teacherName: new FormControl(teacher.teacherName, [Validators.required, Validators.maxLength(50)]),
          contacto: new FormControl(teacher.contacto, [Validators.required]),
          city: new FormControl(teacher.city)
        })
      );
    });
    return fg;
  }

  deleteTeacher(index: number): void {
    (this.manageSubjectForm.get(['teachers']) as FormArray).removeAt(index);
  }

  get teacherControls(): Array<AbstractControl> {
    return (this.manageSubjectForm.get('teachers') as FormArray).controls;
  }
}
