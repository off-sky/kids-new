import { Injectable } from '@angular/core';
import { teachers } from '../../types/teachers';
import { common } from '../../types';

@Injectable()
export class TeacherService {

  private teacherStore: {
    [id: string]: teachers.db.Teacher
  } = {
    '1': {
      id: '1',
      email: 'kate_ivasenko5@i.ua',
      experience_years: 11,
      first_name: 'Катерина Володимирівна',
      last_name: 'Івасенко',
      languages: [common.Languages.ENGLISH, common.Languages.GERMAN],
      brief: `Досвідчений спеціаліст у англійській та німецькій мовах. Віртуозно організовує навчальний процес, що неодмінно допомагає учням закохатися у іноземну мову. Має відмінне почуття гумору та значні досягнення у своїй професії.`,
      office: common.SchoolIds.NARODNA_VOLIA,
      phones: {
        '(097) 976 3527': '(097) 976 3527',
        '(063) 177 3311': '(063) 177 3311'
      },
      photo: '/assets/img/teachers/Kate.jpg',
      displaySpecialty: 'Викладач англійської, німецької мов'
    },
    '2': {
      id: '2',
      experience_years: 9,
      first_name: 'Дмитро Юрійович',
      last_name: 'Білоус',
      languages: [common.Languages.ENGLISH],
      brief: `Харизматичний та веселий вчитель, який чудово знаходить спільну мову з дітьми. Перетворює навчальний процес про захоплюючу гру, у яку діти занурюються із головою. Вміло користується сучасними методиками навчання. Має досвід викладання в європейських країнах.`,
      office: common.SchoolIds.NARODNA_VOLIA,
      photo: '/assets/img/teachers/Dima.jpg',
      phones: {
        '(093) 221 8872': '(093) 221 8872'
      },
      displaySpecialty: 'Викладач англійської мови'
    },
    '3': {
      id: '3',
      experience_years: 9,
      first_name: 'Інна Ігорівна',
      last_name: 'Бродська',
      languages: [common.Languages.ENGLISH],
      brief: `Цілеспрямована, комунікабельна, ініціативна та енергійна. Любить нестандартні ситуації та приймати творчі, креативні рішення. Володіє навичками роботи в стресових та конфліктних ситуаціях, що є необхідним при роботі з дітьми. Любить працювати в команді, де панує справжній командний дух та дружня атмосфера.`,
      office: common.SchoolIds.NARODNA_VOLIA,
      photo: '/assets/img/teachers/Kristina.jpg',
      displaySpecialty: 'Викладач англійської мови'
    },
    '4': {
      id: '4',
      experience_years: 8,
      first_name: 'Роман Володимирович',
      last_name: 'Пашковський',
      languages: [common.Languages.ENGLISH],
      brief: `Лорем ипсум долор сит амет, про модо хабемус инцидеринт ет, ат витае моллис ириуре вел, пауло яуалисяуе интеллегебат еа иус.`,
      office: common.SchoolIds.IRPIN,
      photo: '/assets/img/teachers/Roma.jpeg',
      displaySpecialty: 'Викладач англійської мови'
    },
    '5': {
      id: '5',
      experience_years: 8,
      first_name: 'Наталя Борисівна',
      last_name: 'Радько',
      languages: [common.Languages.ENGLISH],
      brief: 'Любить працювати з дітьми та дорослими, передавати їм свої знання, скеровувати у правильному напрямку вивчення мови. Її заняття цікаві, веселі, легкі для сприйняття, але, водночас, і результативні.',
      office: common.SchoolIds.IRPIN,
      photo: '/assets/img/teachers/Natalia.jpg',
      phones: {
        '(999) 999 9999': '(999) 999 9999'
      },
      displaySpecialty: 'Викладач англійської мови'
    }
  }

  constructor() { }

  public getTeacherById(teacherId: string): Promise<teachers.Teacher> {
    return new Promise((resolve, reject) => {
      const teacherObj = this.teacherStore[teacherId];
      if (teacherObj) {
        resolve(new teachers.Teacher(teacherObj));
      } else {
        resolve(undefined);
      }
    });
  }


  public getTeachersByOffice(office: common.SchoolId): Promise<teachers.Teacher[]> {
    return new Promise<teachers.Teacher[]>((resolve, reject) => {
      try {
        const teachersArr = Object.keys(this.teacherStore)
          .map(id => this.teacherStore[id])
          .filter(teacher => teacher.office === office)
          .map(teacher => new teachers.Teacher(teacher));
        resolve(teachersArr);
      } catch (err) {
        console.log(err);
      }
      
    });
  }

  public searchTeachers(term: string): Promise<teachers.Teacher[]> {
    return new Promise<teachers.Teacher[]>((resolve, reject) => {
     
      const teachersFound = Object.keys(this.teacherStore)
        .map(teacherId => this.teacherStore[teacherId])
        .filter(teacher => {
          return teacher.first_name.toLowerCase().indexOf(term.toLowerCase()) >= 0 ||
                  teacher.last_name.toLowerCase().indexOf(term.toLowerCase()) >= 0 ||
                  teacher.displaySpecialty.toLowerCase().indexOf(term.toLowerCase()) >= 0
        })
        .map(teacherObj => new teachers.Teacher(teacherObj));
      console.log( { term, teachersFound });
      resolve(teachersFound)
    });
  }

}
