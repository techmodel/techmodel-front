export interface Institution {
    name: string;
    type: string;
    pictureLocation?: string;
}

export enum SchoolType {
    'יסודי',
    'ביניים',
    'תיכון',
    'תנועת נוער',
}

export enum SchoolCommunityType {
    'יהודית-חילונית',
    'יהודית-דתית',
    'יהודית-חרדית',
    'ערבית',
    'דרוזית',
}

