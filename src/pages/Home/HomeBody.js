import React, { Fragment } from 'react';

import withData from './components/withData';

function HomeBody({ catFact, error, loading }) {
  if (loading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Error: {error}</span>;
  }

  return (
    <Fragment>
      <h3>Today's cat fact</h3>
      <p>{catFact}</p>
    </Fragment>
  );
}

export default withData(HomeBody);
