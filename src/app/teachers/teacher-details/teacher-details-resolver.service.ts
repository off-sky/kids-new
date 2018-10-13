import { Injectable } from '@angular/core';
import { teachers } from '../../../types/teachers';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TeacherService } from '../teacher.service';

@Injectable()
export class TeacherDetailsResolverService implements Resolve<teachers.Teacher> {

  
  constructor(
    private teacherService: TeacherService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<teachers.Teacher> {
    return this.teacherService.getTeacherById(route.params.teacherId);
  }

}
