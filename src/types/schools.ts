import { common } from ".";

export module schools {

    export class School {
        id: common.SchoolId;
        city: string;
        mapUrl: string;
        facebookUrl?: string;
        website?: string;
        streetAddress: string;
        instUrl?: string;
        imgData: string;
        contactIds: string[];
    }
}