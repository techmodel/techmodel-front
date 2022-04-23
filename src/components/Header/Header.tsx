import { useState } from 'react';
import { Wrapper, Logo, MenuItems, AccountItem, MenuItem } from './Header.styles';
import { AccountCircle, Menu } from '@mui/icons-material';

const Header = () => {
  return (
    <Wrapper>
      <Logo></Logo>
      <MenuItems>
        <MenuItem href='/'>בקשות</MenuItem>
        <MenuItem href='/'>יצירת בקשה</MenuItem>
      </MenuItems>
      <AccountItem>
        התנתק
        <AccountCircle />
      </AccountItem>
    </Wrapper>
  );
};

export default Header;
