import React, { lazy } from 'react';
import { Link } from 'react-router-dom';

import './Navigation.scss';

const ProfileSummary = lazy(() => import('../ProfileSummary'));

function Navigation() {
  return (
    <nav className="Navigation">
      <div className="Navigation_primary">
        <ul>
          <li className="Navigation_item">
            <Link to="/">Home</Link>
          </li>
          <li className="Navigation_item">
            <Link to="/about">About</Link>
          </li>
          <li className="Navigation_item">
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      <div className="Navigation_secondary">
        <ProfileSummary />
      </div>
    </nav>
  );
}

export default Navigation;
