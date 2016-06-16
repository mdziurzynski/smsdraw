jest.unmock('../src/components/App');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import app from '../src/components/App';

describe('App', () => {
  it('hello word text returned by App', () => {
    const helloWorld = TestUtils.renderIntoDocument(
      app()
    );

    const helloWorldNode = ReactDOM.findDOMNode(helloWorld);

    expect(helloWorldNode.textContent).toEqual('Hello world!');
  });
});
