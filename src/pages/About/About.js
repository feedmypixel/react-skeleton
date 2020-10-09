import React, { lazy } from 'react';

const AboutHeading = lazy(() => import('./AboutHeading'));
const AboutBody = lazy(() => import('./AboutBody'));
const Layout = lazy(() => import('../../components/Layout'));

function About() {
  return (
    <Layout heading={AboutHeading}>
      <AboutBody />
    </Layout>
  );
}

export default About;
