import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { common } from '../../../types';

@Component({
  selector: 'y-list-root',
  templateUrl: './list-root.component.html',
  styleUrls: ['./list-root.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListRootComponent implements OnInit {

  public SchoolIds = common.SchoolIds;

  constructor() { }

  ngOnInit() {
  }

}
