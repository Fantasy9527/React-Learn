import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, Link } from 'react-router'
import {App, About,NoMatch} from './components/Main';

// Render the main component into the dom
// ReactDOM.render(<App />, document.getElementById('app'));

ReactDOM.render(
  <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/NoMatch"  component={NoMatch} />
  </Router>
, document.getElementById('app'));
