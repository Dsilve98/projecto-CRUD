import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//import { Courses } from '../courses.model';
import { ToastrService } from 'ngx-toastr';
import { UniversityService } from '../../university.service';
import {ICourses} from "../../university.model";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  manageCourseForm: FormGroup;
  isSaving: boolean;

  constructor(    protected activatedRoute: ActivatedRoute,
                  private toastr: ToastrService,
                  private courseService: UniversityService,
                  private formBuilder: FormBuilder,
                  private router: Router) { }

  ngOnInit(): void {
    this.createForm();
    this.activatedRoute.data.subscribe(({ courses }) => {
      this.updateForm(courses);
    });
  }

  saveCourse(): void {
    this.isSaving = true;
    if (!this.manageCourseForm.get(['id']).value) {
      this.courseService.createCourse(this.manageCourseForm.getRawValue()).then(data => {
          this.isSaving = false;
          this.toastr.success('New Course successfully created', 'Success');
          this.router.navigate(['/managecourse']);
        },
        err => {
          this.isSaving = false;
          this.toastr.error('An error occurred while saving a new course', 'Error');
        });
    } else {
      this.courseService.updateCourse(this.manageCourseForm.getRawValue()).then(() => {
          this.isSaving = false;
          this.toastr.success('Project successfully updated', 'Success');
          this.router.navigate(['/managecourses']);
        },
        err => {
          this.isSaving = false;
          this.toastr.error('An error occurred while saving a new course', 'Error');
        });
    }
  }

  previousState(): void {
    window.history.back();
  }

  addTeacher(): void {
    (this.manageCourseForm.get(['teachers']) as FormArray).push(this.createTeacherFormGroup());
  }

  deleteTeacher(index: number): void {
    (this.manageCourseForm.get(['teachers']) as FormArray).removeAt(index);
  }

  get teacherControls(): Array<AbstractControl> {
    return (this.manageCourseForm.get('teachers') as FormArray).controls;
  }

  private createForm() {
    this.manageCourseForm = new FormGroup({
      id: new FormControl(''),
      projectName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      projectAlias: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      companyName: new FormControl('', [Validators.required]),
      companyAddress: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      zip: new FormControl('', [Validators.required,  Validators.maxLength(8)]),
      personnelProject: new FormControl(false, [Validators.required]),
      formRecaptcha: new FormControl(null, [Validators.required]),
      projectTeamMembers: this.formBuilder.array([]),
    });
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

  private updateForm(courses: ICourses): void {
    this.manageCourseForm.patchValue({
      id: courses.id,
      NumerodeAlunos: courses.maxStudents,
      Nome: courses.courseName,
    });
    this.createTeacherFormArray(courses)
      .forEach(g => (this.manageCourseForm.get('teachers') as FormArray).push(g));
  }


  private createTeacherFormArray(courses: ICourses): FormGroup[] {
    const fg: FormGroup[] = [];
    if (!courses.teachers) {
      courses.teachers = [];
    }
    courses.teachers.forEach(teacher => {
      fg.push(this.formBuilder.group({
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
}
