import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSubjectsDeleteComponent } from './delete.component';

describe('DeleteComponent', () => {
  let component: ManageSubjectsDeleteComponent;
  let fixture: ComponentFixture<ManageSubjectsDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSubjectsDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSubjectsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
