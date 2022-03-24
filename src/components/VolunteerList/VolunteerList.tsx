import React from 'react';
import VolunteerCard from '../VolunteerCard';

import * as s from './VolunteerList.styled';

export default function VolunteerList({ volunteers }: any) {
  return (
    <s.VolunteerList>
      {volunteers.map((volunteer: any) => (
        <VolunteerCard volunteer={volunteer} key={volunteer.id} />
      ))}
    </s.VolunteerList>
  );
}
