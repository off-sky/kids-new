import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersByOfficeComponent } from './teachers-by-office.component';

describe('TeachersByOfficeComponent', () => {
  let component: TeachersByOfficeComponent;
  let fixture: ComponentFixture<TeachersByOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachersByOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersByOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
