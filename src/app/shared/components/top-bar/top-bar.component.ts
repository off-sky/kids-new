import { Component, OnInit, ViewEncapsulation, OnDestroy, AfterViewInit } from '@angular/core';
import { RouterService } from '../../../core/services/router.service';
import { common } from '../../../../types';
import { Subscription } from 'rxjs/Subscription';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs/Observable';
import { schools } from '../../../../types/schools';
import { SchoolService } from '../../../core/services/school.service';
import { SchoolSelectService } from '../../../core/services/school-select.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { CompanySelectPopupComponent } from '../company-select-popup/company-select-popup.component';

@Component({
  selector: 'y-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TopBarComponent implements AfterViewInit, OnDestroy, OnInit {

  public currentSection: common.SiteSection;
  public currentSchool$: Observable<schools.School>;
  public Sections = common.SiteSections;
  public isGlow = false; // wait till menu animation finishes before enabling glow


  private sectionSub: Subscription;
  private allSchools: schools.School[];

  constructor(
    private routerService: RouterService,
    private route: ActivatedRoute,
    private schoolService: SchoolService,
    private schoolSelectService: SchoolSelectService,
    private matDialog: MatDialog
  ) { }

  ngOnInit() {
    this.sectionSub = this.routerService.sectionChange()
      .subscribe(section => {
        console.log({ section });
        this.currentSection = section;
      });
    this.currentSchool$ = this.route.data
      .pipe(
        map(data => data.school)
      );
    this.setAllSchools();
  }


  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isGlow = true;
    }, 1200);
  }


  ngOnDestroy() {
    if (this.sectionSub) {
      this.sectionSub.unsubscribe();
    }
  }


  public onCompanySelectorTriggerClick(): void {
    this.matDialog.open(CompanySelectPopupComponent, {
      data: {
        schools: this.allSchools,
        currentSchool: this.route.snapshot.data.school
      } as common.SelectSchoolPopupData,
      hasBackdrop: true,
      width: '300px',
      position: {
        top: '100px'
      }
    });
  }

  public async setAllSchools(): Promise<void> {
    this.allSchools = await this.schoolService.getSchools();
  }

}
