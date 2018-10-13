import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'y-info-popup',
  templateUrl: './info-popup.component.html',
  styleUrls: ['./info-popup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InfoPopupComponent implements OnInit {

  public text: string;
  public header: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { header: string; text: string}
  ) { }

  ngOnInit() {
    this.text = this.data.text;
    this.header = this.data.header;
  }

}
