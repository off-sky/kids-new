import { common } from ".";

export module teachers {
    export class Teacher {
        id: string;
        email: string;
        experienceYears: number;
        firstName: string;
        lastName: string;
        brief: string;
        phones: string[];
        photo: string;
        office: common.SchoolId;
        languages: common.Language[];
        displaySpecialty: string;

        constructor(teacherObj: db.Teacher) {
            this.id = teacherObj.id;
            this.experienceYears = teacherObj.experience_years;
            this.email = teacherObj.email;
            this.firstName = teacherObj.first_name;
            this.lastName = teacherObj.last_name;
            this.brief = teacherObj.brief;
            this.displaySpecialty = teacherObj.displaySpecialty;
            this.languages = teacherObj.languages;
            this.office = teacherObj.office;
            if (teacherObj.phones) {
                this.phones = Object.keys(teacherObj.phones);
            }
            this.photo = teacherObj.photo;
        }

        public get displayName(): string {
            return `${this.lastName} ${this.firstName}`;
        }
    }

    export module db {
        export interface Teacher {
            id: string;
            experience_years: number;
            first_name: string;
            last_name: string;
            email?: string;
            phones?: {
                [phoneId: string]: string;
            };
            brief: string;
            office: common.SchoolId;
            photo: string;
            languages: common.Language[];
            displaySpecialty: string;
        }
    }
}