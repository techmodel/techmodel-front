import { Institution } from 'types/institution';

const mockInstitutions = [
    {
        name: 'מספר 1',
        type: 'test',
    },
    {
        name: 'מספר 2',
        type: 'test',
    },
    {
        name: 'מספר 3',
        type: 'test',
    },
    {
        name: 'מספר 4',
        type: 'test',
    },
    {
        name: 'מספר 5',
        type: 'test',
    },
    {
        name: 'מספר 6',
        type: 'test',
    }
]

const getAll = (): Institution[] => {
    return [
        ...mockInstitutions,
        ...mockInstitutions,
        ...mockInstitutions,
        ...mockInstitutions,
        ...mockInstitutions,
        ...mockInstitutions,
        ...mockInstitutions,
        ...mockInstitutions,
        ...mockInstitutions,
        ...mockInstitutions,
        ...mockInstitutions,
        ...mockInstitutions,
    ];
};

const institutionService = {
    getAll,
}

export default institutionService;
