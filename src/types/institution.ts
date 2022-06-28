export interface Institution {
    name: string;
    type: string;
    pictureLocation?: string;
}

export type SchoolType = 'יסודי'
    | 'ביניים'
    | 'תיכון'
    | 'תנועת נוער';

export type SchoolCommunityType = 'יהודית-חילונית'
    | 'יהודית-דתית'
    | 'יהודית-חרדית'
    | 'ערבית'
    | 'דרוזית';

