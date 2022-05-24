import InstitutionCard from 'components/cards/Institution';
import List from 'components/primitives/List';
import { FC } from 'react';
import { Institution } from 'types/institution';

interface IProps {
    institutions: Institution[];
}

const InstitutionList: FC<IProps> = ({institutions}) => {
    return (
        <List>
            {
                institutions.map(
                    institution => <InstitutionCard instition={institution} />
                )
            }
        </List>
    )
}

export default InstitutionList;
