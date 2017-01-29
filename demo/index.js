import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { render } from 'react-dom';
import App from './App';
import { Simple, ShowUser, LinkStyle, ClickEvent, Separator } from './examples/Index';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/simple" component={Simple} />
    <Route path="/showuser" component={ShowUser} />
    <Route path="/linkstyle" component={LinkStyle} />
    <Route path="/clickevent" component={ClickEvent} />
    <Route path="/separator" component={Separator} />
  </Router>
), document.getElementById('app'))
