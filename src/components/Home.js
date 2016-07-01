// @flow
import React, { Element as ReactElement } from 'react';

function Home(props): ReactElement {
  return (
    <div style={{ backgroundColor: 'grey' }}>
      Home
      <div>About</div>
      <div>Login Form</div>
      <input id="username" placeholder="Username"></input>
      <input id="password" type="password" placeholder="Password"></input>
      <button onClick={props.login}>Log In</button>
    </div>
  );
}
Home.propTypes = {
  login: React.PropTypes.func.isRequired,
};
export default Home;
