import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { common } from '../../../types';
import { services } from '../../../types/services';
import { Observable } from 'rxjs/Observable';
import { schools } from '../../../types/schools';
import { map } from 'rxjs/operators';

@Component({
  selector: 'y-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailsComponent implements AfterViewInit, OnInit {

  public categories$: Observable<services.Category[]>;
  public school$: Observable<schools.School>;
  public displayLanguage: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.setCurrPageInfo();
  }

  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }

  private setCurrPageInfo(): void {
    const lang = this.route.snapshot.params.lang;
    this.displayLanguage = common.Languages.getDisplayLanguage(lang);

    this.categories$ = this.route.data
      .pipe(
        map(data => data.categories)
      );

    this.school$ = this.route.parent.parent.data
      .pipe(
        map(data =>  data.school)
      )
  }

}
