import { Injectable } from '@angular/core';
import { schools } from '../../../types/schools';
import { common } from '../../../types';

@Injectable()
export class SchoolService {

  private schoolMock: {
    [schoolId: string]: schools.School;
  } = {
    [common.SchoolIds.NARODNA_VOLIA]: {
      id: common.SchoolIds.NARODNA_VOLIA,
      imgData: '/assets/img/khmel-logo.jpg',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d2596.860365815664!2d27.05183844175783!3d49.392633316962204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x473208bdba10985b%3A0x6f5a67b9515bf3a1!2zS0lEUyBFbmdsaXNoIGFuZCBHZXJtYW4sIE5hcm9kbm9pIFZvbGkgU3QsIDHQsCwg0LrQvtGA0L_Rg9GBIDIsIEtobWVsJ255dHMna3lpLCBLaG1lbCdueXRzJ2thIG9ibGFzdCwgMjkwMDA!3m2!1d49.392309!2d27.051076899999998!5e0!3m2!1sen!2sua!4v1535787859609',
      city: 'Хмельницький',
      contactIds: ['1', '2'],
      streetAddress: 'Народної Волі 1А, корпус 2'
    },
    [common.SchoolIds.IRPIN]: {
      id: common.SchoolIds.IRPIN,
      imgData: '/assets/img/irpin-logo.jpg',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d81165.23168140624!2d30.158579011059636!3d50.52647889232704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m5!1s0x472b3181e06d611b%3A0x93eccfa224061d47!2s!3m2!1d50.5264999!2d30.228619!4m0!5e0!3m2!1sen!2sua!4v1535790507376',
      city: 'Ірпінь',
      contactIds: ['5'],
      streetAddress: 'Тургенівська 50А'
    }
  };

  constructor() { }


  public getSchools(): Promise<schools.School[]> {
    const schools = Object.keys(this.schoolMock).map(schoolId => this.schoolMock[schoolId]);
    return Promise.resolve(schools);
  }


  public getSchool(schoolId: common.SchoolId): Promise<schools.School> {
    const school = this.schoolMock[schoolId];
    return Promise.resolve(school);
  }


}
