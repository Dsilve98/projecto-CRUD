import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//import { Courses } from '../courses.model';
import { ToastrService } from 'ngx-toastr';
import { CourseService } from '../../course.service';
import {ICourses} from "../../course.model";
import {ITeacher} from "../../../Teachers/teachers.model";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class ManageCoursesUpdateComponent implements OnInit {

  manageCourseForm: FormGroup;
  isSaving: boolean;

  constructor(    protected activatedRoute: ActivatedRoute,
                  private toastr: ToastrService,
                  private courseService: CourseService,
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
          this.router.navigate(['/managecourses']);
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

  private createForm() {
    this.manageCourseForm = new FormGroup({
      id: new FormControl(''),
      courseName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      maxStudents: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      average: new FormControl('', [Validators.required]),
      examDate: new FormControl('', [Validators.required]),
      credits: new FormControl('', [Validators.required]),
      numberHalfs: new FormControl('', [Validators.required]),
      area: new FormControl('', [Validators.required,  Validators.maxLength(8)]),
    });
  }

  private updateForm(courses: ICourses): void {
    this.manageCourseForm.patchValue({
      id: courses.id,
      courseName: courses.maxStudents,
      maxStudents: courses.courseName,
      average: courses.average,
      examDate: courses.examDate,
      credits: courses.credits,
      numberHalfs: courses.numberHalfs,
      area: courses.area
    });
  }
}
