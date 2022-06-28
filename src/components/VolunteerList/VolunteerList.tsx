import React from 'react';
import ItemList from '../primitives/ItemList';
import VolunteerCard from '../VolunteerCard';
import classNames from 'classnames' 
import appStyles from '../../App.module.scss'

import * as s from './VolunteerList.styled';

interface Props {
  items: any[]
}

export default function VolunteerList({ items }: Props) {
  return (
    <div className={classNames(appStyles.horizontalFlex)}>
      {items.concat(items).map((item, i) =>
        <VolunteerCard item={item} key={i} />)}
    </div>
  );
}
