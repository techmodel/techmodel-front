import { connect } from 'react-redux';
import userActions from 'store/actions/user';
import Login from './Login';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
    login: userActions.startLogin
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);