import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ICourses} from "../../course.model";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

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
