import { Link } from 'react-router-dom';
import { signUpUserType } from '../../../../types/SignUp.types';
import * as s from './UserType.styles';

const UserType = ({ userType }: { userType: signUpUserType }) => {
  return (
    <Link to={userType.path}>
      <s.UserType>
        <s.UserTypePhoto>
          <img src={userType.image} alt={userType.title} />
        </s.UserTypePhoto>

        <div>
          <h3>{userType.title}</h3>
          <p>{userType.description}</p>
        </div>
      </s.UserType>
    </Link>
  );
};
export default UserType;
