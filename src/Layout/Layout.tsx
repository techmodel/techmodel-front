import Nav from 'components/nav/Nav';
import React from 'react';
import appStyles from '../App.module.scss';
import classNames from 'classnames';
import * as s from './Layout.styled';

export default function Layout({ children }: any) {
  return (
    <div className={classNames(appStyles.flexGrow1, appStyles.horizontalFlex)}>
      <Nav/>
      {children}
    </div>
  );
}
