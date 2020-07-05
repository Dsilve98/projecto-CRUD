import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ICourses} from "../../course.model";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class ManageCoursesDetailComponent implements OnInit {

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
}
