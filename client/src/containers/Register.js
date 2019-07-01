import { connect } from 'react-redux';
import * as userAuthAction from '../actions/userAuthAction';
import Register from '../components/Register';

// map state from store to props
const mapStateToProps = (state) => {
  return {
    //you can now say this.props.mappedAppSate
    user: state.userState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    mappeduserRegister: userinfo => dispatch(userAuthAction.register(userinfo))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Register);
