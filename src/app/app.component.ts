import { Component } from '@angular/core';
import { SchoolSelectService } from './core/services/school-select.service';
import { ActivatedRoute } from '@angular/router';
import { init } from './init-fb';

@Component({
  selector: 'y-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'y';

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const schoolId = this.route.snapshot.params.schoolId;
    console.log({ homeSchoolId: schoolId });
    init();
  }
}
