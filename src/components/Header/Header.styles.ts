import styled from 'styled-components';
import { Link } from '@mui/material';

export const Wrapper = styled.div`
  padding: 10px;
  background: white;
  display: flex;
  align-items: center;
`;

export const MenuItem = styled(Link)`
  background: #3f51b5;
  padding: 5px 10px;
  color: white !important;
  border-radius: 25px;
  margin-left: 10px !important;
`;

export const Logo = styled.div``;

export const MenuItems = styled.div`
  flex: 1 1 auto;
`;

export const AccountItem = styled.div`
  flex: 0 0 auto;
  color: #3f51b5;
`;
