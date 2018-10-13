import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { teachers } from '../../../types/teachers';
import { ActivatedRoute } from '@angular/router';
import { common } from '../../../types';
import { schools } from '../../../types/schools';

@Component({
  selector: 'y-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TeacherDetailsComponent implements OnInit {

  public teacher: teachers.Teacher;
  public school: schools.School;
  public officeCrumbs: string;
  public teacherText: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.setRouterData();
  }


  private setRouterData(): void {
    this.teacher = this.route.snapshot.data.teacher;
    this.school = this.route.parent.parent.snapshot.data.school;
    if (this.teacher) {
      this.officeCrumbs = common.SchoolIds.getBriefOfficeName(this.teacher.office);
    }
  }

}
