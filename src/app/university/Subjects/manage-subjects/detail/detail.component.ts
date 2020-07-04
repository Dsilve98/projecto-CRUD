import { Component, OnInit } from '@angular/core';
import {ICourses} from "../../../Courses/course.model";
import {ActivatedRoute} from "@angular/router";
import {ISubjects} from "../../subjects.model";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent2 implements OnInit {

  subjects: ISubjects | null = null;

  constructor(protected activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ subjects }) => {
      this.subjects = subjects;
    });
  }

  previousState(): void {
    window.history.back();
  }
}
