import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICertification } from '../../certification.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent2 implements OnInit {

  certification: ICertification | null = null;

  constructor(protected activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ certification }) => {
      this.certification = certification;
    });
  }

  previousState(): void {
    window.history.back();
  }
}
