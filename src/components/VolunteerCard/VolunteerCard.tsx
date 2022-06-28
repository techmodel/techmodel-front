import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { Modal } from '@mui/material';

import * as s from './VolunteerCard.styled';
import VolunteerModal from '../VolunteerModal';
import { Volunteer } from '../../types/volunteer';
import styles from './VolunteerCard.module.scss';
import appStyles from '../../App.module.scss'
import classNames from 'classnames' 

interface Props {
  item: Volunteer
}

const defaultImage = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'

export default function VolunteerCard({ item }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className={classNames(appStyles.box, appStyles.verticalFlex, appStyles.justifyCenter, appStyles.alignCenter, styles.container)} onClick={() => !open && setOpen(true)}>
      <div className={styles.image}>
        <img src={item.profilePictureLocation ?? defaultImage}/>
      </div>
      <s.Username>{item.name}</s.Username>
      <s.Occupation>
        {item.occupation.role}
        <br />@ {item.occupation.employer}
      </s.Occupation>
      {/* <Modal style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} open={open} onClose={(...a) => setOpen(false)}>
        <VolunteerModal volunteer={item} />
      </Modal> */}
    </div>
  );
}
