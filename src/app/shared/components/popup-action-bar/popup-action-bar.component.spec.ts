import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupActionBarComponent } from './popup-action-bar.component';

describe('PopupActionBarComponent', () => {
  let component: PopupActionBarComponent;
  let fixture: ComponentFixture<PopupActionBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupActionBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupActionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
