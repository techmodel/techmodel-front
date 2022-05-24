import VolunteerCard from 'components/cards/Volunteer';
import List from 'components/primitives/List';
import { FC } from 'react';
import { Volunteer } from 'types/volunteer';

interface IProps {
    volunteers: Volunteer[];
}

const VolunteerList: FC<IProps> = ({volunteers}) => {
    return (
        <List>
            {
                volunteers.map(
                    volunteer => <VolunteerCard volunteer={volunteer} />
                )
            }
        </List>
    )
}

export default VolunteerList;
