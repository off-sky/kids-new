import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { common } from '../../../types';
import { TeacherService } from '../teacher.service';
import { teachers } from '../../../types/teachers';

@Component({
  selector: 'y-list-root',
  templateUrl: './list-root.component.html',
  styleUrls: ['./list-root.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListRootComponent implements OnInit {

  public SchoolIds= common.SchoolIds;
  public teachersFound: teachers.Teacher[];
  
  private searchTerm: string;

  constructor(
    private teacherService: TeacherService
  ) { }

  ngOnInit() {
  }


  public get isSearchActive(): boolean {
    return !!this.searchTerm && this.searchTerm.length > 0;
  }

  public get isResults(): boolean {
    return this.isSearchActive && this.teachersFound.length > 0;
  }


  public async onSearchInputChange(term: string): Promise<void> {
    console.log({ term })
    this.searchTerm = term;
    if (!!term && term.length > 0) {
      this.teachersFound = await this.teacherService.searchTeachers(this.searchTerm);
    }
  }

}
