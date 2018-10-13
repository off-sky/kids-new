import { Component, OnInit, ViewEncapsulation, ContentChildren, QueryList } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'y-cards-wrap',
  templateUrl: './cards-wrap.component.html',
  styleUrls: ['./cards-wrap.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardsWrapComponent implements OnInit {

  @ContentChildren(CardComponent) cards: QueryList<CardComponent>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.cards.changes
      .startWith(this.cards)
      .subscribe((res) => {
      this.cards.forEach((card, ind) => card.show(ind));
    });
  }

}
