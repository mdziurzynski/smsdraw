// @flow
import React, { Element as ReactElement } from 'react';

export default class Home extends React.Component {
  static propTypes: Object = {
    stage: React.PropTypes.number.isRequired,
    styles: React.PropTypes.object.isRequired,
  };
  constructor(props:object) {
    super(props);
    this.login = this.handleLogin.bind(this);
  }
  handleLogin() {
    console.log('Logging in...');
  }
  render(): ReactElement {
    return (
      <div style={{ backgroundColor: 'grey' }}>
        Home
        <div>About</div>
        <div>Login Form</div>
        <input placeholder="Username"></input>
        <input placeholder="Password"></input>
        <button onClick={this.login}>Log In</button>
      </div>
    );
  }
}
