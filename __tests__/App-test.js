jest.unmock('../src/components/App');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import App from '../src/components/App';

describe('App stages container', () => {

  it('Initialised with stage = 0', () => {
    const appElement = TestUtils.renderIntoDocument(
      <App />
    );  
    expect(appElement.state.stage).toEqual(0);
  });
  it('Changes stage based on given props', () => {
    const appElement = TestUtils.renderIntoDocument(
      <App stage={2} />
    );  
    expect(appElement.state.stage).toEqual(2);
  });
});
