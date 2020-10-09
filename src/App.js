import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import withUserDetails from './components/withUserDetails';
import Routes from './Routes';

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default withUserDetails(App);
