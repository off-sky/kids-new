import { common } from ".";

export module services {

    export class Service {
        id: string;
        description: string;
        amount: number;
        amountDescription: string;
        notes?: string;
    }

    export class Category {
        id: string;
        description: string;
        discounts: Discount[];
        language: common.Language;
        title: string;
        schoolId: common.SchoolId;
        services: Service[];
    }

    export class Discount {
        description: string;
        displayAmount: string;
    }

    export module db {

    }
}