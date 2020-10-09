import React, { useContext } from 'react';

import { UserDetailsContext } from '../../context/UserDetails';

function ProfileSummary() {
  const { data, loading, error } = useContext(UserDetailsContext);

  if (loading) {
    return <span></span>;
  }

  if (error) {
    return <span></span>;
  }

  return (
    <ul>
      <li>Username: {data.name}</li>
    </ul>
  );
}

export default ProfileSummary;
