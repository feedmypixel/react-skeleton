import React, { useContext } from 'react';

import { UserDetailsContext } from '../../context/UserDetails';

function LastOnline() {
  const { data, loading, error } = useContext(UserDetailsContext);

  if (loading) {
    return <span></span>;
  }

  if (error) {
    return <span></span>;
  }

  return (
    <ul>
      <li>Last Online: {data.lastOnline}</li>
    </ul>
  );
}

export default LastOnline;
