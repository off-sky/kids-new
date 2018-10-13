import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldListContentComponent } from './fold-list-content.component';

describe('FoldListContentComponent', () => {
  let component: FoldListContentComponent;
  let fixture: ComponentFixture<FoldListContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoldListContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoldListContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
