import { Link } from '@material-ui/core';
import { Wrapper } from './Header.styles';

const Header = () => {
  return (
    <Wrapper>
      <Link href='/'>בקשות</Link>
      <Link href='/'>יצירת בקשה</Link>
      <Link href='/'>התנתקות</Link>
    </Wrapper>
  );
};

export default Header;
