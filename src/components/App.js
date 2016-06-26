// @flow
import React, { Element as ReactElement } from 'react';
import StageIdentifier from './StageIdentifier';

const styles = {
  main: {
    width: '60vh',
    height: '90vh',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  mainTop: {
    backgroundColor: 'red',
    height: '25vh',
  },
  mainBottom: {
    backgroundColor: 'yellow',
    height: '65vh',
  },
  stage: {
    display: 'inline-block',
    border: '1px solid green',
    width: 40,
    height: 40,
  },
  activeStage: {
    display: 'inline-block',
    border: '1px solid green',
    width: 40,
    height: 40,
    backgroundColor: 'green',
  },
  stageContainer: {
    display: 'inline-block',
    width: '100%',
    height: '100%',
    verticalAlign: 'top',
    WebkitTransition: 'width 0.5s ease-in-out',
    MozTransition: 'width 0.5s ease-in-out',
    OTransition: 'width 0.5s ease-in-out',
    transition: 'width 0.5s ease-in-out',
  },
  visibleContent: {
    visibility: 'visible',
    opacity: 1,
    transition: 'opacity 0.25s linear',
  },
  invisibleContent: {
    visibility: 'hidden',
    opacity: 0,
    transition: 'visibility 0s 0.25s, opacity 0.25s linear',
  },
};

export default class App extends React.Component {
  static propTypes: Object = {
    stage: React.PropTypes.number.isRequired,
    stages: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
  };
  static defaultProps: Object = {
    stage: 0,
    stages: [0, 1, 2, 3],
  };
  constructor(props: Object) {
    super(props);
    this.changeStage = this.changeStage.bind(this);
  }
  state: Object = {
    stage: this.props.stage,
    stages: this.props.stages,
  };
  changeStage(stageNumber:number): void {
    this.setState({
      stage: stageNumber,
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
          {this.props.children}
        </div>
      </div>
    );
  }
}
