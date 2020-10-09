import React, { Fragment, lazy } from 'react';

import './Layout.scss';

const Header = lazy(() => import('../Header'));
const Navigation = lazy(() => import('../Navigation'));
const Footer = lazy(() => import('../Footer'));

function Layout({ heading: PageHeading, children }) {
  return (
    <Fragment>
      <Header />
      <Navigation />
      <main>
        <div className="Page-container">
          <div className="Page-body">
            <PageHeading />
          </div>
        </div>
        <div className="Page-container">
          <div className="Page-body">{children}</div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
