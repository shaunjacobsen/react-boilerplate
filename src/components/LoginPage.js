import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from './../actions/auth';

export const LoginPage = props => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Boilerplate</h1>
      <p>Tagline</p>
      <button className="button" onClick={props.startLogin}>Login with Google</button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => {
  return {
    startLogin: () => dispatch(startLogin()),
  };
};

export default connect(undefined, mapDispatchToProps)(LoginPage);
