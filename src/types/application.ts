export module appl {

    export class ContactApplication {
        name: string;
        phone: string;
        email: string;
        serviceId: string;
        officeId: string;
        captchaToken: string;

        public get isValid(): boolean {
            return !!this.name &&
                   (!!this.phone || !!this.email) &&
                   !!this.captchaToken;
        }

        public getDbObject(): db.ContactApplication {
            const dbObj = {
                name: this.name,
            } as db.ContactApplication;
            if (this.phone) {
                dbObj.phone = this.phone;
            }
            if (this.email) {
                dbObj.email = this.email;
            }
            if (this.serviceId) {
                dbObj.serviceId = this.serviceId;
            }
            if (this.officeId) {
                dbObj.officeId = this.officeId;
            }
            if (this.captchaToken) {
                dbObj.captcha_token = this.captchaToken;
            }
            return dbObj;
        }
    }

    export module db {
        
        export interface ContactApplication {
            name: string;
            phone: string;
            email: string;
            captcha_token: string;
            serviceId?: string;
            officeId?: string;
        }
    }
}