import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComponent2 } from './detail.component';

describe('DetailComponent', () => {
  let component: DetailComponent2;
  let fixture: ComponentFixture<DetailComponent2>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 2 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
