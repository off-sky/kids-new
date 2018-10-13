import { Component, OnInit, ViewEncapsulation, QueryList, ContentChildren } from '@angular/core';
import { CrumbComponent } from '../crumb/crumb.component';

@Component({
  selector: 'y-crumbs',
  templateUrl: './crumbs.component.html',
  styleUrls: ['./crumbs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CrumbsComponent implements OnInit {

  @ContentChildren(CrumbComponent) crumbs: QueryList<CrumbComponent>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.crumbs.forEach((item, ind, arr) => {
      if (ind === arr.length - 1) {
        item.last = true;
      }
    })
  }

}
