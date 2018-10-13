import { Component, OnInit, ViewEncapsulation, ContentChildren, QueryList, AfterContentInit, ContentChild } from '@angular/core';
import { FoldListAnchorComponent } from '../fold-list-anchor/fold-list-anchor.component';
import { FoldListContentComponent } from '../fold-list-content/fold-list-content.component';

@Component({
  selector: 'y-fold-list-item',
  templateUrl: './fold-list-item.component.html',
  styleUrls: ['./fold-list-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FoldListItemComponent implements AfterContentInit, OnInit {

  @ContentChild(FoldListAnchorComponent) public anchor: FoldListAnchorComponent;
  @ContentChild(FoldListContentComponent) public content: FoldListContentComponent;


  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.anchor.isActive$()
      .subscribe(isActive => {
        if (isActive) {
          this.content.display();
        } else {
          this.content.hide();
        }
      })
  }

}
