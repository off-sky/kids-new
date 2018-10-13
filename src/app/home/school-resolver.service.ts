import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { schools } from '../../types/schools';
import { SchoolService } from '../core/services/school.service';

@Injectable()
export class SchoolResolver implements Resolve<schools.School> {

    constructor(
        private schoolService: SchoolService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<schools.School> {
        const schoolId = route.params.schoolId;
        return this.schoolService.getSchool(schoolId);
    }
}