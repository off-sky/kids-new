import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRootComponent } from './list-root.component';

describe('ListRootComponent', () => {
  let component: ListRootComponent;
  let fixture: ComponentFixture<ListRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
