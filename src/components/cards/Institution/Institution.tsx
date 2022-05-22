import { FC, useState } from 'react';
import { useTheme } from 'styled-components';
import { Modal } from '@mui/material';
import { Card, Picture } from 'components/primitives/Card';
import { Institution } from 'types/institution';
import { OrganizationName, InstitutionType, institutionModalStyles } from './Institution.styled';

interface IProps {
    instition: Institution;
}

const InstitutionCard: FC<IProps> = ({
    instition
}) => {
    const theme = useTheme();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { pictureLocation, name, type } = instition;

    return (
        <Card theme={theme} onClick={() => setIsOpen(true)}>
            <Picture>
            <img src={
                    pictureLocation
                    ?? 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                }
                alt='1'
            />
            </Picture>
            <OrganizationName>{name}</OrganizationName>
            <InstitutionType>
                {type}
            </InstitutionType>
            <Modal style={institutionModalStyles} open={isOpen} onClose={() => setIsOpen(false)}>
                <div className='hello'>Hello!</div>
            </Modal>
        </Card>
    )
};

export default InstitutionCard;
