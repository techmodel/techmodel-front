import { FC, useState } from 'react';
import { useTheme } from 'styled-components';
import { Modal } from '@mui/material';
import { Card, Picture } from 'components/primitives/Card';
import { Volunteer } from 'types/volunteer';
import { Username, Occupation, volunteerModalStyles } from './Volunteer.styled';

interface IProps {
    volunteer: Volunteer;
}

const VolunteerCard: FC<IProps> = ({
    volunteer
}) => {
    const theme = useTheme();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { profilePictureLocation, name, occupation } = volunteer;

    return (
        <Card theme={theme} onClick={() => setIsOpen(true)}>
            <Picture>
            <img src={
                    profilePictureLocation
                    ?? 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                }
                alt='1'
            />
            </Picture>
            <Username>{name}</Username>
            <Occupation>
                {occupation.role}
                <br />@ {occupation.employer}
            </Occupation>
            <Modal style={volunteerModalStyles} open={isOpen} onClose={() => setIsOpen(false)}>
                <div className='hello'>Hello!</div>
            </Modal>
        </Card>
    )
};

export default VolunteerCard;
