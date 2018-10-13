import { teachers } from '../../../types/teachers';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { TeacherService } from '../teacher.service';

@Injectable()
export class TeachersByOfficeResolverService implements Resolve<teachers.Teacher[]> {

  
  constructor(private teacherService: TeacherService) { }

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<teachers.Teacher[]> {
    const schoolId = route.parent.parent.params.schoolId;
    try {
      return await this.teacherService.getTeachersByOffice(schoolId);
    } catch (err) {
      console.log(err);
    }
      
  }

}
