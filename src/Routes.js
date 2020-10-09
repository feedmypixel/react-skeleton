import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Products = lazy(() => import('./pages/Products'));

function Routes() {
  return (
    <Suspense fallback={<span>...Loading</span>}>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />
        <Route path="/" component={Home} />
      </Switch>
    </Suspense>
  );
}

export default Routes;
