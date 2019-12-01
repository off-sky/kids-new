import { schools } from "./schools";

export module common {

    export type City = 'khmelnytsky' | 'irpin';

    export class Cities {
        public static readonly KHMELNYTSKY: City = 'khmelnytsky';
        public static readonly IRPIN: City = 'irpin';
    }


    export type Language = 'english' | 'german' | 'polish';

    export class Languages {
        public static readonly ENGLISH: Language = 'english';
        public static readonly GERMAN: Language = 'german';
        public static readonly POLISH: Language = 'polish';

        public static getDisplayLanguage(lang: Language): string {
            switch (lang) {
                case this.ENGLISH: return 'Англійська';
                case this.GERMAN: return 'Німецька';
                case this.POLISH: return 'Польська';
            }
        }
    }

    export type SchoolId = 'narodna_volia' | 'irpin' | 'ozerna';

    export class SchoolIds {
        public static readonly NARODNA_VOLIA: SchoolId = 'narodna_volia';
        public static readonly IRPIN: SchoolId = 'irpin';
        public static readonly OZERNA: SchoolId = 'ozerna';

        public static getBriefOfficeName(officeId: SchoolId): string {
            switch(officeId) {
                case SchoolIds.NARODNA_VOLIA: {
                  return 'Народної Волі, 1А';
                }
                case SchoolIds.IRPIN: {
                  return 'Шевченка, 25';
                }
                case SchoolIds.OZERNA: {
                    return 'Озерна';
                }
            }
        }

        public static getFullOfficeName(officeId: SchoolId): string {
            switch(officeId) {
                case SchoolIds.NARODNA_VOLIA: {
                    return 'Хмельницький (вул. Народної Волі, 1А)';
                }
                case SchoolIds.IRPIN: {
                    return 'Ірпінь (вул. Шевченка, 25)';
                }
                case SchoolIds.OZERNA: {
                    return 'Хмельницький, район Озерна';
                }
            }
        }
    }

    export interface SelectSchoolPopupData {
        schools: schools.School[],
        currentSchool: schools.School
    }

    export const DEFAULT_SCHOOL_ID = SchoolIds.NARODNA_VOLIA;

    export type SiteSection = 'services' | 'teachers' | 'contact-info';

    export class SiteSections {
        public static readonly SERVICES: SiteSection = 'services';
        public static readonly TEACHERS: SiteSection = 'teachers';
        public static readonly CONTACT_INFO: SiteSection = 'contact-info';
    }
}