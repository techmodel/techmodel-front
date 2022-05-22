import volunteerService from 'api/volunteer';
import VolunteerList from 'components/volunteer/VolunteerList';
import { FC } from 'react';

interface IProps {

};

const DirectorPage: FC<IProps> = () => {
    const volunteerList = volunteerService.getAll();
    return (
        <VolunteerList
            volunteers={volunteerList}
        />
    )
};

export default DirectorPage;
