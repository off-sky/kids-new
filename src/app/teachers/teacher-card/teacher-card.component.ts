import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { teachers } from '../../../types/teachers';

@Component({
  selector: 'y-teacher-card',
  templateUrl: './teacher-card.component.html',
  styleUrls: ['./teacher-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TeacherCardComponent implements OnInit {

  @Input() public teacher: teachers.Teacher;

  constructor() { }

  ngOnInit() {
  }

}
