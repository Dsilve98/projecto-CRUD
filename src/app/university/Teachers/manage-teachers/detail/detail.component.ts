import { Component, OnInit } from '@angular/core';
import {ITeacher} from "../../teachers.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent3 implements OnInit {

  teachers: ITeacher | null = null;

  constructor(protected activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ teachers }) => {
      this.teachers = teachers;
    });
  }

  previousState(): void {
    window.history.back();
  }
}
