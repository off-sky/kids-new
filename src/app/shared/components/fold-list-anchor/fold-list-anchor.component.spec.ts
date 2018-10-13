import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldListAnchorComponent } from './fold-list-anchor.component';

describe('FoldListAnchorComponent', () => {
  let component: FoldListAnchorComponent;
  let fixture: ComponentFixture<FoldListAnchorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoldListAnchorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoldListAnchorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
