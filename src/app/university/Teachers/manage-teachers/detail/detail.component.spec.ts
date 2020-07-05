import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComponent3 } from './detail.component';

describe('DetailComponent3', () => {
  let component: DetailComponent3;
  let fixture: ComponentFixture<DetailComponent3>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailComponent3 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
