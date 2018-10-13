import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { common } from '../../../types/common';
import { ServicesService } from '../services.service';


@Injectable()
export class LangByOfficeResolver implements Resolve<common.Language[]> {

    constructor(
        private servicesService: ServicesService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<common.Language[]> {
        const schoolId = route.parent.parent.params.schoolId;
        console.log({ schoolId });
        return this.servicesService.getLanguagesForSchool(schoolId);
    }

}