import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { common } from '../../../types';
import { services } from '../../../types/services';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { schools } from '../../../types/schools';

@Component({
  selector: 'y-list-by-office',
  templateUrl: './list-by-office.component.html',
  styleUrls: ['./list-by-office.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListByOfficeComponent implements OnInit {

  public langs$: Observable<common.Language[]>;
  public school$: Observable<schools.School>;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.setRouteInfo();
  }

  public getDisplayLanguageName(lang: common.Language): string {
    return common.Languages.getDisplayLanguage(lang);
  }

  private setRouteInfo(): void {
    this.langs$ = this.route.data
      .pipe(
        map(data => {
          console.log(data);
          return data.langs
        })
      )

    this.school$ = this.route.parent.parent.data
      .pipe(
        map(data => data.school)
      )
  }

}
