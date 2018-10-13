import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import { common } from '../../../types';
import { Router, Route, NavigationStart, NavigationEnd } from '@angular/router';

@Injectable()
export class RouterService {

  constructor(
    private router: Router
  ) { }


  public sectionChange(): Observable<common.SiteSection> {
    console.log('Returning section change obs');
    return new Observable(observer => {
     const urlSub = this.router.events
      .filter(event => event instanceof NavigationEnd)
      .startWith(null)
      .map(event => {
        observer.next(this.currentSection)
      })
      .subscribe();

      return () => urlSub.unsubscribe();
    });
  }


  private get currentSection(): common.SiteSection {
    const url = this.router.url;
   
    const section = url.split('?')[0]
                     .split('/')[2] as common.SiteSection;
    return section;
  }

}
