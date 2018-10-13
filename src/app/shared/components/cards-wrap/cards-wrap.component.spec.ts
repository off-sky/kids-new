import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsWrapComponent } from './cards-wrap.component';

describe('CardsWrapComponent', () => {
  let component: CardsWrapComponent;
  let fixture: ComponentFixture<CardsWrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsWrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
