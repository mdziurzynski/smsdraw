// @flow
import React, { Element as ReactElement } from 'react';

export default class Home extends React.Component {
  static propTypes: Object = {
    stage: React.PropTypes.number.isRequired,
    styles: React.PropTypes.object.isRequired,
    visibilityStyle: React.PropTypes.object.isRequired,
  };
  render(): ReactElement {
    return (
      <div style={Object.assign({}, this.props.styles, { backgroundColor: 'grey' })}>
        <div style={this.props.visibilityStyle}>
          Home
        </div>
      </div>
    );
  }
}
