// @flow
import React, { Element as ReactElement } from 'react';
import { Link } from 'react-router';

export default class StageIdentifier extends React.Component {
  static propTypes: Object = {
    stageNum: React.PropTypes.number.isRequired,
    styles: React.PropTypes.object.isRequired,
    changeStage: React.PropTypes.func.isRequired,
  };
  constructor(props: Object) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.props.changeStage(this.props.stageNum);
  }
  render(): ReactElement {
    let linkTo = this.props.stageNum === 0 ? '/' : `/stage${this.props.stageNum}`;
    return (
      <Link to={linkTo}>
        <div
          style={this.props.styles}
          onClick={this.onClick}
        >{this.props.stageNum}</div>
      </Link>
    );
  }
}
