import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCoursesDeleteComponent } from './delete.component';

describe('DeleteComponent', () => {
  let component: ManageCoursesDeleteComponent;
  let fixture: ComponentFixture<ManageCoursesDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCoursesDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCoursesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
