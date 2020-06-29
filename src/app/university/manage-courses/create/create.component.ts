import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ICourses} from "../../../university/university.model";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  courses: ICourses | null = null;

  constructor(protected activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ courses }) => {
      this.courses = courses;
    });
  }

  previousState(): void {
    window.history.back();
  }

  getMemberSpecializationByValue(memberSpecialization: string): string {
    let translatedSpec = '';
    switch (memberSpecialization) {
      case 'PM':
        translatedSpec = 'Project Manager';
        break;
      case 'TECH_ARCH':
        translatedSpec = 'Technical Architect';
        break;
      case 'DEVOPS':
        translatedSpec = 'DevOps';
        break;
      case 'SD':
        translatedSpec = 'Senior Developer';
        break;
      case 'D':
        translatedSpec = 'Developer';
        break;
      case 'TM':
        translatedSpec = 'Test Manager';
        break;
      case 'T':
        translatedSpec = 'Tester';
        break;
    }
    return translatedSpec;
  }
}
