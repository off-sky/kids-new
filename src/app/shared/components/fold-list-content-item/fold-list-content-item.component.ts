import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
// import { TweenLite } from 'gsap';

@Component({
  selector: 'y-fold-list-content-item',
  templateUrl: './fold-list-content-item.component.html',
  styleUrls: ['./fold-list-content-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FoldListContentItemComponent implements OnInit {

  @ViewChild('item') item: ElementRef;


  constructor() { }

  ngOnInit() {
  }

  /**
   * 
   * @param index item order index for display one-by-one
   */
  public display(index: number): void {
    // console.log('Displaying content item');
    const delayQuotient = 0.1;
    const delay = index * delayQuotient;
    setTimeout(() => {
      const item: HTMLDivElement = this.item.nativeElement;
      item.style.opacity = '1';
    }, delay * 1000)
    // TweenLite.to(this.item.nativeElement, 1, { opacity: 1})
    //   .delay(index * delayQuotient);
  }

  public hide(): void {
    const item: HTMLDivElement = this.item.nativeElement;
      item.style.opacity = '0';
    // TweenLite.to(this.item.nativeElement, 0, { opacity: 0});
  }

}
