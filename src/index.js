import React from 'react'
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import { Demo } from './pages/Demo'

const App = () => (
  <Router>
    <Route exact path="/demo" component={Demo} />
  </Router>
)

render(<App />, document.getElementById('root'))
