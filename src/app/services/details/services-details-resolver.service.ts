import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { common } from '../../../types/common';
import { ServicesService } from '../services.service';
import { services } from '../../../types/services';


@Injectable()
export class ServicesDetailsResolver implements Resolve<services.Category[]> {

    constructor(
        private servicesService: ServicesService
    ) {}


    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Promise<services.Category[]> {
        const schoolId = route.parent.parent.params.schoolId;
        const lang = route.params.lang;
        return this.servicesService.getServiceCategoriesForSchoolAndLang(schoolId, lang);
    }
}