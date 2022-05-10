import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { Modal } from '@mui/material';

import * as s from './VolunteerCard.styled';
import VolunteerModal from '../VolunteerModal';
import { Volunteer } from '../../types/volunteer';

export default function VolunteerCard({ volunteer }: { volunteer: Volunteer }) {
  const theme = useTheme();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <s.VolunteerCard onClick={() => !open && setOpen(true)}>
      <s.ProfilePhoto>
        <img
          src={volunteer.profilePictureLocation ?? 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}
          alt='1'
        />
      </s.ProfilePhoto>
      <s.Username>{volunteer.first_name} {volunteer.last_name}</s.Username>
      <s.Occupation>
        {volunteer.company_roles}
        <br />@ {volunteer.company_name}
      </s.Occupation>
      <Modal style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} open={open} onClose={(...a) => setOpen(false)}>
        <VolunteerModal volunteer={volunteer} />
      </Modal>
    </s.VolunteerCard>
  );
}
