import volunteerService from 'api/volunteer';
import VolunteerList from 'components/volunteer/VolunteerList';
import { FC } from 'react';

interface IProps {

};

const DirectorPage: FC<IProps> = () => {
    const volunteerList = volunteerService.getAll();
    return (
        <main className='director-page'>
            <VolunteerList
                volunteers={volunteerList}
            />
        </main>
    )
};

export default DirectorPage;
