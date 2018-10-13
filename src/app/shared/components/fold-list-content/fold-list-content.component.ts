import { Component, OnInit, ViewEncapsulation, Input, ContentChildren, ContentChild, AfterViewInit, AfterContentInit, QueryList, Query, ViewChild, ElementRef } from '@angular/core';
import { FoldListAnchorComponent } from '../fold-list-anchor/fold-list-anchor.component';
import { FoldListContentItemComponent } from '../fold-list-content-item/fold-list-content-item.component';
// import { TweenLite } from 'gsap/TweenLite';

@Component({
  selector: 'y-fold-list-content',
  templateUrl: './fold-list-content.component.html',
  styleUrls: ['./fold-list-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FoldListContentComponent implements AfterContentInit, OnInit {

  @Input() public height: number;
  @Input() public order: number;
  @ViewChild('outer') outerBlock: ElementRef;
  @ViewChild('inner') innerBlock: ElementRef
  @ContentChildren(FoldListContentItemComponent) items: QueryList<FoldListContentItemComponent>;
  

  /**
   * -1 - initial
   * 1 - active
   * 0 - inactive
   */
  public isActive = -1;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    // console.log('Items in content:');
    // this.items.forEach(item => console.log(item));
  }

  public toggleActive(isActive: boolean): void {
    this.isActive = isActive ? 1 : 0;
  }

  public async display(): Promise<void> {
    await this.displayContentWrap();
    this.items.forEach((item, ind) => item.display(ind));
  }


  private displayContentWrap(): Promise<void> {
    return new Promise((resolve, reject) => {
      const innerDiv: HTMLDivElement = this.innerBlock.nativeElement;
      const outerDiv: HTMLDivElement = this.outerBlock.nativeElement;
      const height = innerDiv.scrollHeight;
      innerDiv.style.visibility = 'visible';
      outerDiv.style.height = `${height}px`;
      setTimeout(() => {
        // outerDiv.style.height = 'auto';
        resolve();
      }, 250);
      // TweenLite.to(outerDiv, 0.3, {height, onComplete: complete });

      function complete() {
        outerDiv.style.height = 'auto';
        resolve();
      }
    });
  }


  public async hide(): Promise<void> {
    await this.hideContentWrap();
    this.items.forEach((item, ind) => item.hide());
  }


  private hideContentWrap(): Promise<void> {
    return new Promise((resolve, reject) => {
      const innerDiv: HTMLDivElement = this.innerBlock.nativeElement;
      const outerDiv: HTMLDivElement = this.outerBlock.nativeElement;
      outerDiv.style.height = innerDiv.scrollHeight + 'px';
      setTimeout(() => {
        outerDiv.style.height = '0px';
        setTimeout(() => {
          innerDiv.style.visibility = 'hidden';
          resolve();
        }, 400);
      }, 100);
      
    });
      
     // TweenLite.to(outerDiv, 0.3, { height:0, onComplete: complete });

      function complete() {
        
      }
  }

}
