import React from 'react';
import ItemList from '../primitives/ItemList';
import VolunteerCard from '../VolunteerCard';

import * as s from './VolunteerList.styled';

export default function VolunteerList({ volunteers }: any) {
  return (
    <ItemList>
      {volunteers.map((volunteer: any) => (
        <VolunteerCard volunteer={volunteer} key={volunteer.id} />
      ))}
    </ItemList>
  );
}
