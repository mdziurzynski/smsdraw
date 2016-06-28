// @flow
import React, { Element as ReactElement } from 'react';
import StageOne from './StageOne';
import StageTwo from './StageTwo';
import StageThree from './StageThree';

export default class StageContainer extends React.Component {
  static propTypes: Object = {
    stage: React.PropTypes.number.isRequired,
    styles: React.PropTypes.object.isRequired,
    visibilityStyle: React.PropTypes.object.isRequired,
  };
  render(): ReactElement {
    return (
      <div style={Object.assign({}, this.props.styles, { backgroundColor: 'grey' })}>
        <div style={this.props.visibilityStyle}>
          Stage {this.props.stage}
        </div>
      </div>
    );
  }
}
