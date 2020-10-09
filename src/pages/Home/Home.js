import React, { lazy } from 'react';

const HomeHeading = lazy(() => import('./HomeHeading'));
const HomeBody = lazy(() => import('./HomeBody'));
const Layout = lazy(() => import('../../components/Layout'));

function Home() {
  return (
    <Layout heading={HomeHeading}>
      <HomeBody />
    </Layout>
  );
}

export default Home;
