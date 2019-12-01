import { Injectable } from '@angular/core';
import { services } from '../../types/services';
import { common } from '../../types';
import { schools } from '../../types/schools';

@Injectable()
export class ServicesService {

  private servicesMock: {
    [id: string]: services.Category
  } = {
    //// Narodna Volia
    // English
    'khm_eng_deep': {
      id: 'khm_eng_deep',
      title: 'Група 8-14 чоловік',
      schoolId: common.SchoolIds.NARODNA_VOLIA,
      language: common.Languages.ENGLISH,
      services: [
        {
          id: 'big_gr',
          description: '10 занять по 1 год',
          amount: 58000,
          amountDescription: 'грн'
        },
        {
          id: 'med_gr',
          description: '10 занять по 1 год 15 хв',
          amount: 67000,
          amountDescription: 'грн'
        }
      ],
      discounts: [
        {
          description: 'вивчення 2-х мов однією особою',
          displayAmount: '5% на другу мову'
        },
        {
          description: 'навчання 2-х або більше дітей з однієї сім\'ї',
          displayAmount: '5% кожній дитині'
        }
      ]
    },
    'khm_eng_intense': {
      id: 'khm_eng_intense',
      title: 'Група 5-7 чоловік',
      schoolId: common.SchoolIds.NARODNA_VOLIA,
      language: common.Languages.ENGLISH,
      services: [
        {
          id: 'big_gr',
          description: '10 занять по 1 год',
          amount: 65000,
          amountDescription: 'грн'
        }
        // {
        //   id: 'med_gr',
        //   description: '10 занять по 1 год 15 хв',
        //   amount: 74000,
        //   amountDescription: 'грн'
        // }
      ],
      discounts: [
        {
          description: 'вивчення 2-х мов однією особою',
          displayAmount: '5% на другу мову'
        },
        {
          description: 'навчання 2-х або більше дітей з однієї сім\'ї',
          displayAmount: '5% кожній дитині'
        }
      ]
    },
    'khm_eng_indiv': {
      id: 'khm_eng_indiv',
      title: 'Індивідуально',
      schoolId: common.SchoolIds.NARODNA_VOLIA,
      language: common.Languages.ENGLISH,
      services: [
        {
          id: 'big_gr',
          description: '10 занять по 1 год',
          amount: 150000,
          amountDescription: 'грн'
        },
        // {
        //   id: 'med_gr',
        //   description: '10 занять по 1 год 15 хв',
        //   amount: 180000,
        //   amountDescription: 'грн'
        // },
        {
          id: 'personal',
          description: 'По Skype, Viber',
          amount: 170000,
          amountDescription: 'грн'
        }
      ],
      discounts: null
    },
    'khm_eng_presc': {
      id: 'khm_eng_presc',
      title: 'Дошкільнята',
      schoolId: common.SchoolIds.NARODNA_VOLIA,
      language: common.Languages.ENGLISH,
      services: [
        {
          id: 'presc1',
          description: '8 занять по 45 хв',
          amount: 60000,
          amountDescription: 'грн'
        }
      ],
      discounts: [
        {
          description: 'вивчення 2-х мов однією особою',
          displayAmount: '5% на другу мову'
        },
        {
          description: 'навчання 2-х або більше дітей з однієї сім\'ї',
          displayAmount: '5% кожній дитині'
        }
      ]
    },
    // zno
    'khm_eng_zno': {
      id: 'khm_eng_zno',
      title: 'Підготовка до ЗНО',
      schoolId: common.SchoolIds.NARODNA_VOLIA,
      language: common.Languages.ENGLISH,
      services: [
        {
          id: 'zno1',
          description: '10 занять по 1 год 20 хв',
          amount: 70000,
          amountDescription: 'грн'
        }
      ],
      discounts: [
        {
          description: 'вивчення 2-х мов однією особою',
          displayAmount: '5% на другу мову'
        },
        {
          description: 'навчання 2-х або більше дітей з однієї сім\'ї',
          displayAmount: '5% кожній дитині'
        }
      ]
    },

    // eof zno
    'khm_eng_grownup': {
      id: 'khm_eng_grownup',
      title: 'Дорослі',
      schoolId: common.SchoolIds.NARODNA_VOLIA,
      language: common.Languages.ENGLISH,
      services: [
        {
          id: 'big_gr',
          description: '8 занять по 1 год',
          amount: 86000,
          amountDescription: 'грн'
        },
        {
          id: 'med_gr',
          description: '10 занять по 1 год 15 хв',
          amount: 100000,
          amountDescription: 'грн'
        }
      ],
      discounts: [
        {
          description: 'вивчення 2-х мов однією особою',
          displayAmount: '5% на другу мову'
        },
        {
          description: 'навчання 2-х або більше дітей з однієї сім\'ї',
          displayAmount: '5% кожній дитині'
        }
      ]
    },
    // German
    'khm_ger_deep': {
      id: 'khm_ger_deep',
      title: 'Група 5-8 чоловік',
      schoolId: common.SchoolIds.NARODNA_VOLIA,
      language: common.Languages.GERMAN,
      services: [
        {
          id: 'big_gr',
          description: '7 занять по 50 хв',
          // notes: '45 хв для найменших діток',
          amount: 52000,
          amountDescription: 'грн'
        }
      ],
      discounts: [
        {
          description: 'вивчення 2-х мов однією особою',
          displayAmount: '5% на другу мову'
        },
        {
          description: 'навчання 2-х або більше дітей з однієї сім\'ї',
          displayAmount: '5% кожній дитині'
        }
      ]
    },
    'khm_ger_intense': {
      id: 'khm_ger_intense',
      title: 'Група 2-4 чоловік',
      schoolId: common.SchoolIds.NARODNA_VOLIA,
      language: common.Languages.GERMAN,
      services: [
        {
          id: 'big_gr',
          description: '7 занять по 50 хв',
          notes: '45 хв для найменших діток',
          amount: 68000,
          amountDescription: 'грн'
        }
      ],
      discounts: [
        {
          description: 'вивчення 2-х мов однією особою',
          displayAmount: '5% на другу мову'
        },
        {
          description: 'навчання 2-х або більше дітей з однієї сім\'ї',
          displayAmount: '5% кожній дитині'
        }
      ]
    },
    // 'khm_ger_grownups': {
    //   id: 'khm_ger_grownups',
    //   title: 'Дорослі',
    //   schoolId: common.SchoolIds.NARODNA_VOLIA,
    //   language: common.Languages.GERMAN,
    //   services: [
    //     {
    //       id: 'deep',
    //       description: '7 занять по 50 хв',
    //       amount: 76000,
    //       amountDescription: 'грн'
    //     },
    //     {
    //       id: 'intense',
    //       description: '7 занять по 1 год 15 хв',
    //       amount: 84000,
    //       amountDescription: 'грн'
    //     }
    //   ],
    //   discounts: null
    // },
    'khm_ger_indiv': {
      id: 'khm_ger_indiv',
      title: 'Індивідуально',
      schoolId: common.SchoolIds.NARODNA_VOLIA,
      language: common.Languages.GERMAN,
      services: [
        {
          id: 'deep',
          description: '7 занять по 1 год',
          amount: 105000,
          amountDescription: 'грн'
        },
        // {
        //   id: 'intense',
        //   description: '7 занять по 1 г 15 хв',
        //   amount: 170000,
        //   amountDescription: 'грн'
        // },
        {
          id: 'skype',
          description: 'По Skype, Viber',
          notes: '7 занять по 1 год',
          amount: 120000,
          amountDescription: 'грн'
        }
      ],
      discounts: null
    },
    // Polish
    'khm_pol_deep': {
      id: 'khm_pol_deep',
      title: 'Група 5-8 чоловік',
      schoolId: common.SchoolIds.NARODNA_VOLIA,
      language: common.Languages.POLISH,
      services: [
        {
          id: 'big_gr',
          description: '7 занять по 50 хв',
          // notes: '45 хв для найменших діток',
          amount: 42500,
          amountDescription: 'грн'
        }
      ],
      discounts: [
        {
          description: 'вивчення 2-х мов однією особою',
          displayAmount: '5% на другу мову'
        },
        {
          description: 'навчання 2-х або більше дітей з однієї сім\'ї',
          displayAmount: '5% кожній дитині'
        }
      ]
    },
    'khm_pol_intense': {
      id: 'khm_pol_intense',
      title: 'Група 2-4 чоловік',
      schoolId: common.SchoolIds.NARODNA_VOLIA,
      language: common.Languages.POLISH,
      services: [
        {
          id: 'big_gr',
          description: '7 занять по 50 хв',
          // notes: '45 хв для найменших діток',
          amount: 60000,
          amountDescription: 'грн'
        }
      ],
      discounts: [
        {
          description: 'вивчення 2-х мов однією особою',
          displayAmount: '5% на другу мову'
        },
        {
          description: 'навчання 2-х або більше дітей з однієї сім\'ї',
          displayAmount: '5% кожній дитині'
        }
      ]
    },
    'khm_pol_indiv': {
      id: 'khm_pol_indiv',
      title: 'Індивідуальні заняття',
      schoolId: common.SchoolIds.NARODNA_VOLIA,
      language: common.Languages.POLISH,
      services: [
        {
          id: 'big_gr',
          description: '7 занять по 1 год',
          // notes: '45 хв для найменших діток',
          amount: 105000,
          amountDescription: 'грн'
        },
        // {
        //   id: 'big_gr',
        //   description: '7 занять по 1 г 15 хв',
        //   amount: 170000,
        //   amountDescription: 'грн'
        // },
        {
          id: 'personal',
          description: 'По Skype. Viber',
          notes: '7 занять по 1 год',
          amount: 120000,
          amountDescription: 'грн'
        }
      ],
      
    },
    //// Irpin
    // English
    'irp_eng_preschool': {
      id: 'irp_eng_preschool',
      title: 'Дошкільнята',
      description: '',
      schoolId: common.SchoolIds.IRPIN,
      language: common.Languages.ENGLISH,
      services: [
        {
          id: 'big_gr',
          description: 'Група 4-6 учнів',
          notes: '8 занять по 40 хв',
          amount: 56000,
          amountDescription: 'грн'
        },
        {
          id: 'med_gr',
          description: 'Група 2-3 учні',
          notes: '8 занять по 35 хв',
          amount: 64000,
          amountDescription: 'грн'
        },
        {
          id: 'personal',
          description: 'Індивідуально',
          notes: '8 занять по 35 хв',
          amount: 72000,
          amountDescription: 'грн'
        }
      ],
      discounts: null
    },
    'irp_eng_school': {
      id: 'irp_eng_school',
      title: 'Школярі',
      description: '',
      schoolId: common.SchoolIds.IRPIN,
      language: common.Languages.ENGLISH,
      services: [
        {
          id: 'jumbo_gr',
          description: 'Група 7-10 учнів',
          notes: '8 занять по 60 хв',
          amount: 48000,
          amountDescription: 'грн'
        },
        {
          id: 'big_gr',
          description: 'Група 4-6 учнів',
          notes: '8 занять по 60 хв',
          amount: 68000,
          amountDescription: 'грн'
        },
        {
          id: 'med_gr',
          description: 'Група 2-3 учнів',
          notes: '10 занять по 45 хв',
          amount: 64000,
          amountDescription: 'грн'
        },
        {
          id: 'personal',
          description: 'Індивідуально',
          notes: '8 занять по 45 хв',
          amount: 72000,
          amountDescription: 'грн'
        }
      ],
      discounts: null
    },
    'irp_eng_adult': {
      id: 'irp_eng_adult',
      title: 'Дорослі',
      description: '',
      schoolId: common.SchoolIds.IRPIN,
      language: common.Languages.ENGLISH,
      services: [
        {
          id: 'jumbo_gr',
          description: 'Група 7-10 учнів',
          notes: '8 занять по 75 хв',
          amount: 120000,
          amountDescription: 'грн'
        },
        {
          id: 'big_gr',
          description: 'Група 4-6 учнів',
          notes: '8 занять по 75 хв',
          amount: 145000,
          amountDescription: 'грн'
        },
        {
          id: 'med_gr',
          description: 'Група 2-3 учнів',
          notes: '10 занять по 75 хв',
          amount: 200000,
          amountDescription: 'грн'
        },
        {
          id: 'personal',
          description: 'Індивідуально',
          notes: '8 занять по 60 хв',
          amount: 144000,
          amountDescription: 'грн'
        }
      ],
      discounts: null
    }
    
  }

  constructor() { }


  public getLanguagesForSchool(schoolId: common.SchoolId): Promise<common.Language[]> {
      const langs = Object.keys(this.servicesMock)
        .filter(key => this.servicesMock[key].schoolId === schoolId)
        .map(key => this.servicesMock[key].language);
      
      const uniqLang = Array.from(new Set(langs));

      return Promise.resolve(uniqLang);
  }


  public getServiceCategoriesForSchoolAndLang(
    schoolId: common.SchoolId, lang: common.Language): Promise<services.Category[]> {
    const categories = Object.keys(this.servicesMock)
      .map(key => this.servicesMock[key])
      .filter(cat => cat.schoolId === schoolId && cat.language === lang)

    return Promise.resolve(categories);
  }
}
