import { FC, useState } from 'react';
import { useTheme } from 'styled-components';
import { Modal } from '@mui/material';
import { Card, Picture } from 'components/primitives/Card';
// import { Director } from 'types/director';
import { OrganizationName, GeoArea, directorModalStyles } from './Director.styled';

interface IProps {
    director: any;
}

const DirectorCard: FC<IProps> = ({
    director
}) => {
    const theme = useTheme();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { profilePictureLocation, name, occupation } = director;

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
            <OrganizationName>{name}</OrganizationName>
            <GeoArea>
                {occupation.role}
                <br />@ {occupation.employer}
            </GeoArea>
            <Modal style={directorModalStyles} open={isOpen} onClose={() => setIsOpen(false)}>
                <div className='hello'>Hello!</div>
            </Modal>
        </Card>
    )
};

export default DirectorCard;
