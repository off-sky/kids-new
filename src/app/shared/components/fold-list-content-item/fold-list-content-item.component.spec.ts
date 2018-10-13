import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldListContentItemComponent } from './fold-list-content-item.component';

describe('FoldListContentItemComponent', () => {
  let component: FoldListContentItemComponent;
  let fixture: ComponentFixture<FoldListContentItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoldListContentItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoldListContentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
