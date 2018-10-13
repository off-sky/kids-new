import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'y-popup-header',
  templateUrl: './popup-header.component.html',
  styleUrls: ['./popup-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PopupHeaderComponent implements OnInit {

  @Output() public closed: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  public onCloseClick(): void {
    this.closed.emit();
  }

}
