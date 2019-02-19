import React from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../actions';
import SingleForm from '../forms/SingleForm';

class LoginPage extends React.Component {
  onSubmit = formValues => {
    this.props.signIn(formValues);
  };
  render() {
    return (
      <div>
        <h3>SignIn</h3>
        <SingleForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state.auth);
  return {
    state: state.auth
  };
};

export default connect(
  mapStateToProps,
  { signIn }
)(LoginPage);
