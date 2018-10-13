import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'y-no-results-placeholder',
  templateUrl: './no-results-placeholder.component.html',
  styleUrls: ['./no-results-placeholder.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NoResultsPlaceholderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
