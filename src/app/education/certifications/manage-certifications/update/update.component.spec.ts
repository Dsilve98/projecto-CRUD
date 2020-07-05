import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateComponent2 } from './update.component';

describe('UpdateComponent', () => {
  let component: UpdateComponent2;
  let fixture: ComponentFixture<UpdateComponent2>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateComponent2 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
