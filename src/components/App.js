// @flow
import React, { Element as ReactElement } from 'react';
import 'whatwg-fetch';
import { withRouter } from 'react-router';
import StageIdentifier from './StageIdentifier';
import { styles } from '../css/styles';

export default withRouter(class App extends React.Component {
  static propTypes: Object = {
    stage: React.PropTypes.number.isRequired,
    stages: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
  };
  static defaultProps: Object = {
    stage: 0,
    stages: [0, 1, 2, 3],
    userData: {
      username: undefined,
      password: undefined,
      smsAvailable: undefined,
    },
  };
  constructor(props: Object) {
    super(props);
    this.changeStage = this.changeStage.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  state: Object = {
    stage: this.props.stage,
    stages: this.props.stages,
    userData: this.props.smsAvailable,
  };
  changeStage(stageNumber:number): void {
    this.setState({
      stage: stageNumber,
    });
  }
  handleLogin(): void {
    let formData = {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value,
    };
    fetch('/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((data) => {
      if (data.status !== 200) {
        console.log('login failure');
      } else {
        console.log('login success');
        this.setState({
          userData: {
            username: data.username,
            password: data.password,
            smsAvailable: data.smsAvailable,
          },
          stage: 1,
        });
        this.props.router.push('stage1');
      }
    }, () => {
      alert('connection problems');
    });
  }
  render(): ReactElement {
    return (
      <div style={styles.main}>
        <div style={styles.mainTop}>
          <div> Awesome logo!</div>
          <div>
            {this.state.stages.map((stageNum:number, i:number) =>
              <StageIdentifier
                key={i}
                stageNum={stageNum}
                styles={stageNum <= this.state.stage ? styles.activeStage : styles.stage}
                changeStage={this.changeStage}
              />
            )}
          </div>
        </div>
        <div style={styles.mainBottom}>
          {this.props.children && React.cloneElement(this.props.children, {
            stage: this.state.stage,
            login: this.handleLogin,
          })
          }
        </div>
      </div>
    );
  }
});
