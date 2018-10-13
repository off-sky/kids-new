import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'y-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchInputComponent implements OnInit {

  @Output() changed: EventEmitter<string> = new EventEmitter<string>();

  public searchModel: string;
  public searchModelSubject: Subject<string>;
  public isSearchActive: boolean;

  private subscription: Subscription;

  constructor() { }

  ngOnInit() {
    this.searchModelSubject = new Subject<string>();
    this.subscription = this.searchModelSubject
      .subscribe(searchTerm => {
        this.changed.emit(searchTerm);
      })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }





  public onInputChange(searchStr: string): void {
    this.isSearchActive = !!searchStr && searchStr.length > 0;

    if (this.searchModelSubject) {
      this.searchModelSubject.next(searchStr);
    }
  }


  public resetSearch(): void {
    this.searchModel = '';
    this.onInputChange('');
  }






}
