import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAcademic } from '../../academic.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  academic: IAcademic | null = null;

  constructor(protected activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ academic }) => {
      this.academic = academic;
    });
  }

  previousState(): void {
    window.history.back();
  }
}
