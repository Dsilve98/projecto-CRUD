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
    this.activatedRoute.data.subscribe(({ project }) => {
      this.updateForm(project);
    });
  }

  saveAcademics(): void {
    this.isSaving = true;
    if (!this.manageAcademicForm.get(['id']).value) {
      this.projectService.createAcademic(this.manageAcademicForm.getRawValue()).then(data => {
          this.isSaving = false;
          this.toastr.success('New Project successfully created', 'Success');
          this.router.navigate(['/manageprojects']);
        },
        err => {
          this.isSaving = false;
          this.toastr.error('An error occurred while saving a new project', 'Error');
        });
    } else {
      this.projectService.updateAcademic(this.manageAcademicForm.getRawValue()).then(() => {
          this.isSaving = false;
          this.toastr.success('Project successfully updated', 'Success');
          this.router.navigate(['/manageprojects']);
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

  addProjectTeamMember(): void {
    (this.manageAcademicForm.get(['projectTeamMembers']) as FormArray).push(this.createProjectTeamMemberFormGroup());
  }

  deleteProjectTeamMember(index: number): void {
    (this.manageAcademicForm.get(['projectTeamMembers']) as FormArray).removeAt(index);
  }

  get projectTeamMembersControls(): Array<AbstractControl> {
    return (this.manageAcademicForm.get('projectTeamMembers') as FormArray).controls;
  }

  private createForm() {
    this.manageAcademicForm = new FormGroup({
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

  private createProjectTeamMemberFormGroup(): FormGroup {
    return new FormGroup({
      id: new FormControl(''),
      memberSpecialization: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      memberName: new FormControl('', [Validators.required, Validators.maxLength(250)]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('')
    });
  }

  private updateForm(academic: Academic): void {
    this.manageAcademicForm.patchValue({
      id: academic.id,
      activities: academic.activities,
      description: academic.description,
      educationalInstitution: academic.educationalInstitution,
      endDate: academic.endDate,
      fieldOfStudy: academic.fieldOfStudy,
      formation: academic.formation,
      grade: academic.grade,
      startDate: academic.startDate
    });
  }

  /*private createProjectTeamMemberFormArray(academic: Academic): FormGroup[] {
    const fg: FormGroup[] = [];
    if (!academic.) {
      project.projectTeamMembers = [];
    }
    project.projectTeamMembers.forEach(projectTeamMember => {
      fg.push(this.formBuilder.group({
          id: new FormControl(projectTeamMember.id),
          memberSpecialization: new FormControl(projectTeamMember.memberSpecialization, [Validators.required, Validators.maxLength(50)]),
          memberName: new FormControl(projectTeamMember.memberName, [Validators.required, Validators.maxLength(250)]),
          startDate: new FormControl(projectTeamMember.startDate, [Validators.required]),
          endDate: new FormControl(projectTeamMember.endDate)
        })
      );
    });
    return fg;
  }*/
}
