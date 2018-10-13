import { Component, OnInit, ViewEncapsulation, SecurityContext } from '@angular/core';
import { schools } from '../../../types/schools';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map, switchMap } from 'rxjs/operators';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { teachers } from '../../../types/teachers';
import { TeacherService } from '../../teachers/teacher.service';

@Component({
  selector: 'y-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactInfoComponent implements OnInit {

  public school$: Observable<schools.School>;
  public mapURL$: Observable<SafeUrl>;
  public contactPersons$: Observable<teachers.Teacher[]>;

  constructor(
    private route: ActivatedRoute,
    private ds: DomSanitizer,
    private teacherService: TeacherService
  ) { }

  ngOnInit() {
    this.initSchoolObs();
  }


  private initSchoolObs(): void {
      this.school$ = this.route.parent.data
        .pipe(
          map(data => data.school)
        );

      this.mapURL$ = this.school$
        .pipe(
          map(school => school.mapUrl),
          map(mapUrl => this.ds.bypassSecurityTrustResourceUrl(mapUrl))
        )

      this.contactPersons$ = this.school$
        .pipe(
          switchMap(school => {
            const promises = school.contactIds.map(id => this.teacherService.getTeacherById(id));
            return Promise.all(promises);
          })
        )
  }

}
