import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { teachers } from '../../../types/teachers';
import { ActivatedRoute } from '@angular/router';
import { common } from '../../../types';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { schools } from '../../../types/schools';

@Component({
  selector: 'y-teachers-by-office',
  templateUrl: './teachers-by-office.component.html',
  styleUrls: ['./teachers-by-office.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TeachersByOfficeComponent implements OnInit {

  public school$: Observable<schools.School>
  public teachers$: Observable<teachers.Teacher[]>;
  public headerText: string;
  public crumbText: string;


  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.setRouteInfo();
  }


  private setRouteInfo(): void {
    this.teachers$ = this.route.data
      .pipe(
        map(data => data.teachers)
      );
    
    this.school$ = this.route.parent.parent.data
      .pipe(
        map(data => data.school)
      )
  }

}
