import { common } from ".";

export module schools {

    export class School {
        id: common.SchoolId;
        city: string;
        mapUrl: string;
        streetAddress: string;
        imgData: string;
        contactIds: string[];
    }
}