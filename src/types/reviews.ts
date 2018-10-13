
export module reviews {

    export class Review {

        authorName: string;
        text: string;
        textBrief: string;
        teacherId: string;
        isTruncated: boolean;
        
        private briefLength: number;

        constructor(revDb?: db.Review, briefLength: number = 50) {
            this.authorName = revDb.author_name;
            this.text = revDb.text;
            this.teacherId = revDb.teacher_id;
            this.briefLength = briefLength;
            this.setBriefText();
        }

        private setBriefText(): void {
            let briefTxt = this.text.substr(0, this.briefLength);
            this.isTruncated = this.text.length > this.briefLength;
            if (this.isTruncated) {
                briefTxt += '...';
            }
            this.textBrief = briefTxt;
        }


    }

    export module db {

        export interface Review {
            id: string;
            author_name: string;
            text: string;
            teacher_id?: string;
        }
    }
}