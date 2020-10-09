import React from 'react';

import transformCatFact from '../transformers/transformCatFacts';
import useCatFact from '../hooks/useCatFact';

const withData = (Component) => () => {
  const [data, loading, error] = useCatFact();
  const catFact = transformCatFact(data);

  return <Component catFact={catFact} loading={loading} error={error} />;
};

export default withData;
