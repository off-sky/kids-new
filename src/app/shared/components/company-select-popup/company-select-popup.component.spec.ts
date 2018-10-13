import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySelectPopupComponent } from './company-select-popup.component';

describe('CompanySelectPopupComponent', () => {
  let component: CompanySelectPopupComponent;
  let fixture: ComponentFixture<CompanySelectPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanySelectPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySelectPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
