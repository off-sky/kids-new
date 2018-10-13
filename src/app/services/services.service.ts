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
      title: 'Поглиблене вивчення',
      description: '10 занять по 1 год (45 хв для найменших діток)',
      schoolId: common.SchoolIds.NARODNA_VOLIA,
      language: common.Languages.ENGLISH,
      services: [
        {
          id: 'big_gr',
          description: 'Група 6-14 чоловік',
          amount: 55000,
          amountDescription: 'грн'
        },
        {
          id: 'med_gr',
          description: 'Група 2-5 чоловік',
          amount: 64000,
          amountDescription: 'грн'
        },
        {
          id: 'personal',
          description: 'Індивідуально',
          amount: 150000,
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
      title: 'Інтенсивне вивчення',
      description: '10 занять по 1 год 20 хв',
      schoolId: common.SchoolIds.NARODNA_VOLIA,
      language: common.Languages.ENGLISH,
      services: [
        {
          id: 'big_gr',
          description: 'Група 6-14 чоловік',
          amount: 63000,
          amountDescription: 'грн'
        },
        {
          id: 'med_gr',
          description: 'Група 2-5 чоловік',
          amount: 74000,
          amountDescription: 'грн'
        },
        {
          id: 'personal',
          description: 'Індивідуально',
          amount: 180000,
          amountDescription: 'грн'
        }
      ],
      discounts: null
    },
    'khm_eng_skype': {
      id: 'khm_eng_skype',
      title: 'Заняття по Skype, Viber',
      description: '10 занять по 1 год',
      schoolId: common.SchoolIds.NARODNA_VOLIA,
      language: common.Languages.ENGLISH,
      services: [
        {
          id: 'personal',
          description: 'Індивідуально',
          amount: 170000,
          amountDescription: 'грн'
        }
      ],
      discounts: null
    },
    // German
    'khm_ger_deep': {
      id: 'khm_ger_deep',
      title: 'Поглиблене вивчення',
      description: '7 занять по 50 хв (45 хв для найменших діток)',
      schoolId: common.SchoolIds.NARODNA_VOLIA,
      language: common.Languages.GERMAN,
      services: [
        {
          id: 'big_gr',
          description: 'Група 6-14 чоловік',
          amount: 43000,
          amountDescription: 'грн'
        },
        {
          id: 'med_gr',
          description: 'Група 2-5 чоловік',
          amount: 57000,
          amountDescription: 'грн'
        },
        {
          id: 'personal',
          description: 'Індивідуально',
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
    'khm_ger_intense': {
      id: 'khm_ger_intense',
      title: 'Інтенсивне вивчення',
      description: '7 занять по 1 год 20 хв',
      schoolId: common.SchoolIds.NARODNA_VOLIA,
      language: common.Languages.GERMAN,
      services: [
        {
          id: 'big_gr',
          description: 'Група 6-14 чоловік',
          amount: 65000,
          amountDescription: 'грн'
        },
        {
          id: 'med_gr',
          description: 'Група 2-5 чоловік',
          amount: 72000,
          amountDescription: 'грн'
        },
        {
          id: 'personal',
          description: 'Індивідуально',
          amount: 140000,
          amountDescription: 'грн'
        }
      ],
      discounts: null
    },
    'khm_ger_skype': {
      id: 'khm_ger_skype',
      title: 'Заняття по Skype, Viber',
      description: '7 занять по 1 год',
      schoolId: common.SchoolIds.NARODNA_VOLIA,
      language: common.Languages.GERMAN,
      services: [
        {
          id: 'personal',
          description: 'Індивідуально',
          amount: 120000,
          amountDescription: 'грн'
        }
      ],
      discounts: null
    },
    // Polish
    'khm_pol_deep': {
      id: 'khm_pol_deep',
      title: 'Поглиблене вивчення',
      description: '7 занять по 50 хв (45 хв для найменших діток)',
      schoolId: common.SchoolIds.NARODNA_VOLIA,
      language: common.Languages.POLISH,
      services: [
        {
          id: 'big_gr',
          description: 'Група 6-14 чоловік',
          amount: 43000,
          amountDescription: 'грн'
        },
        {
          id: 'med_gr',
          description: 'Група 2-5 чоловік',
          amount: 57000,
          amountDescription: 'грн'
        },
        {
          id: 'personal',
          description: 'Індивідуально',
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
    'khm_pol_intense': {
      id: 'khm_pol_intense',
      title: 'Інтенсивне вивчення',
      description: '7 занять по 1 год 20 хв',
      schoolId: common.SchoolIds.NARODNA_VOLIA,
      language: common.Languages.POLISH,
      services: [
        {
          id: 'big_gr',
          description: 'Група 6-14 чоловік',
          amount: 65000,
          amountDescription: 'грн'
        },
        {
          id: 'med_gr',
          description: 'Група 2-5 чоловік',
          amount: 72000,
          amountDescription: 'грн'
        },
        {
          id: 'personal',
          description: 'Індивідуально',
          amount: 140000,
          amountDescription: 'грн'
        }
      ],
      discounts: null
    },
    'khm_pol_skype': {
      id: 'khm_pol_skype',
      title: 'Заняття по Skype, Viber',
      description: '7 занять по 1 год',
      schoolId: common.SchoolIds.NARODNA_VOLIA,
      language: common.Languages.POLISH,
      services: [
        {
          id: 'personal',
          description: 'Індивідуально',
          amount: 120000,
          amountDescription: 'грн'
        }
      ],
      discounts: null
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
