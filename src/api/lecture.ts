import { Lecture } from 'types/lecture';

const getAll = (): Lecture[] => {
    return [
        {
            institution: 'אי-שלום',
            geoArea: 'צפון',
            title: 'איך מתקדמים?'
        }
    ];
}

const lectureService = {
    getAll,
}

export default lectureService;
