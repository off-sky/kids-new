import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'y-crumb',
  templateUrl: './crumb.component.html',
  styleUrls: ['./crumb.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CrumbComponent implements OnInit {

  @Input() last: boolean;

  constructor() { }

  ngOnInit() {
  }

}
