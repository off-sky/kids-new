import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { schools } from '../../../../types/schools';
import { SchoolSelectService } from '../../../core/services/school-select.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { common } from '../../../../types';


@Component({
  selector: 'y-company-select-popup',
  templateUrl: './company-select-popup.component.html',
  styleUrls: ['./company-select-popup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CompanySelectPopupComponent implements OnInit {

  public allSchools: schools.School[];
  public currentSchool: schools.School;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: common.SelectSchoolPopupData,
    private dialogRef: MatDialogRef<CompanySelectPopupComponent>,
    private schoolSelectService: SchoolSelectService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.allSchools = this.data.schools;
    this.currentSchool = this.data.currentSchool;
  }


  public onClose(): void {
    this.dialogRef.close();
  }


  public onSchoolSelect(school: schools.School): void {
    this.schoolSelectService.selectSchool(school);
    this.onClose();
  }

}
