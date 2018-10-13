import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'y-close-btn',
  templateUrl: './close-btn.component.html',
  styleUrls: ['./close-btn.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CloseBtnComponent implements OnInit {

  @Output() public clicked: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  public onCloseClicked(): void {
    this.clicked.emit();
  }

}
