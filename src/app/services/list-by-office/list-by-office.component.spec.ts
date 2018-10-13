import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListByOfficeComponent } from './list-by-office.component';

describe('ListByOfficeComponent', () => {
  let component: ListByOfficeComponent;
  let fixture: ComponentFixture<ListByOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListByOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListByOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
