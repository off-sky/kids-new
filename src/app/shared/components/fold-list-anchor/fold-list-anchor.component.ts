import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'y-fold-list-anchor',
  templateUrl: './fold-list-anchor.component.html',
  styleUrls: ['./fold-list-anchor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FoldListAnchorComponent implements OnInit {

  @ViewChild('arrow') arrow: ElementRef;
  public isActive = false;
  private activeSubj: Subject<boolean>;

  constructor() { }

  ngOnInit() {
    this.activeSubj = new Subject<boolean>();
  }

  public isActive$(): Observable<boolean> {
    return new Observable(observer => {
      const subscr = this.activeSubj.subscribe(isActive => observer.next(isActive));

      return () => subscr.unsubscribe();
    });
  }

  public toggleActive(): void {
    this.isActive = !this.isActive;
    // this.animateRotation();
    this.activeSubj.next(this.isActive);
  }

  // private animateRotation(): void {
  //   if (this.isActive) {
  //     // try {
  //     //   TweenLite.to(this.arrow.nativeElement, 0.2, { rotation: 90 });
  //     // } catch (err) {
  //     //   console.log(err);
  //     // }
      
  //   } else {
  //     // TweenLite.to(this.arrow.nativeElement, 0.2, { rotation: 0 });
  //   }
  // }

}
