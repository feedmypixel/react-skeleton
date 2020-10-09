import React from 'react';

import { UserDetailsProvider } from '../../context/UserDetails';

const withUserDetails = (Component) => (props) => {
  return (
    <UserDetailsProvider>
      <Component {...props} />
    </UserDetailsProvider>
  );
};

export default withUserDetails;
