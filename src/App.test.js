import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {expect } from 'chai'; //chai is an assertion library used with mocha
import sinon from 'sinon';  //sinon is a mocking framework for mochaÍ

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
