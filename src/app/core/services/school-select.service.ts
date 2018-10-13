import { Injectable } from '@angular/core';
import { schools } from '../../../types/schools';

import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { SchoolService } from './school.service';
import { Observable } from 'rxjs/Observable';
import { filter } from 'rxjs/operators';
import { RouterService } from './router.service';
import { Router } from '@angular/router';
import { common } from '../../../types';

@Injectable()
export class SchoolSelectService {

  private schoolSelectSubject: BehaviorSubject<schools.School> = new BehaviorSubject<schools.School>(null);

  constructor(
    private router: Router,
    private schoolService: SchoolService
  ) {
    // this.initSchoolSelection();
    this.setSchoolChangedObserver();
  }


  public schoolChanged(): Observable<schools.School> {
    return new Observable<schools.School>(observer => {
      const sub = this.schoolSelectSubject.asObservable()
        .pipe(
          filter(school => !!school)
        )
        .subscribe(school => observer.next(school));

      return () => sub.unsubscribe();
    })
  }


  public getDefaultSchoolId(): Promise<common.SchoolId> {
    return this.schoolService.getSchools()
      .then(schools => schools[0].id);
  }


  public selectSchool(school: schools.School): void {
    this.schoolSelectSubject.next(school);
  }



  private setSchoolChangedObserver(): void {
    this.schoolChanged()
      .subscribe(school => {
        if (!school) {
          return;
        }
        const currUrl = this.router.url;
        const currUrlArr = currUrl.split('/');
        console.log('Prev arr:');
        console.log(currUrlArr);

        const urlArrCopy = currUrlArr.slice(0, 3);
        if (urlArrCopy.length > 1) {
          urlArrCopy[1] = school.id;
        } else {
          urlArrCopy.push(school.id)
        }
        console.log(urlArrCopy);
        this.router.navigate(urlArrCopy);
      })
  }

}
