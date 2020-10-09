import React, { lazy } from 'react';

import './Footer.scss';

const LastOnline = lazy(() => import('../LastOnline'));

function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer_primary">
        <p>Footer</p>
      </div>

      <div className="Footer_secondary">
        <LastOnline />
      </div>
    </footer>
  );
}

export default Footer;
