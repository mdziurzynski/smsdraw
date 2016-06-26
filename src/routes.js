// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import StageOne from './components/StageOne';
import StageTwo from './components/StageTwo';
import StageThree from './components/StageThree';

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/stage1" component={StageOne} />
    <Route path="/stage2" component={StageTwo} />
    <Route path="/stage3" component={StageThree} />
  </Route>
);
