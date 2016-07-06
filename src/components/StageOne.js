// @flow
import React, { Element as ReactElement } from 'react';

function StageOne(props): ReactElement {
  return (
    <div style={{ backgroundColor: 'blue' }}>
      StageOne
      <div>Draw Title:</div>
      <input
        id="messageTitle"
        placeholder="Title.."
        onChange={props.changeTitle}
        value={props.messageTitle} required
      ></input>
      <br />
      <div>Message:</div>
      <textarea
        id="message"
        value={`${props.messageTitle} \n${props.message}: Jan Kowalski`}
        readOnly
      ></textarea>

      <button onClick={props.goToStageTwo}>Next</button>
    </div>
  );
}
StageOne.propTypes = {
  changeTitle: React.PropTypes.func.isRequired,
  messageTitle: React.PropTypes.string.isRequired,
  message: React.PropTypes.string.isRequired,
  goToStageTwo: React.PropTypes.func.isRequired,
};
export default StageOne;
