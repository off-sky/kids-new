import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'y-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {

  @ViewChild('item') public item: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  /**
   * 
   * @param index order number of the card
   */
  public show(index: number): void {
    const delayQuotient = 0.1;
    const delay = delayQuotient * index * 1000;
    const itemEl = this.item.nativeElement as HTMLDivElement;

    setTimeout(() => {
      itemEl.style.opacity = '1';
    }, delay);
  }

}
