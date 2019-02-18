import React from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../actions';
import SingleForm from './SingleForm';

class SignIn extends React.Component {
  onSubmit = formValues => {
    // console.log(formValues);
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

export default connect(
  null,
  { signIn }
)(SignIn);
