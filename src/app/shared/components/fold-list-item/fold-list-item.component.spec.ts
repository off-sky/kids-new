import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldListItemComponent } from './fold-list-item.component';

describe('FoldListItemComponent', () => {
  let component: FoldListItemComponent;
  let fixture: ComponentFixture<FoldListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoldListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoldListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
