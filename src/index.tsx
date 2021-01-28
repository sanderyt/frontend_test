import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Demo } from './pages/Demo';
import { Popup } from './pages/Popup';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/demo" component={Demo} />
      <Route exact path="/popup" component={Popup} />
    </Switch>
  </Router>
);

(window as any).WisePops = {
  start() {
    render(<App />, document.getElementById('root'));
  }
};

// render(<App />, document.getElementById('root'));
