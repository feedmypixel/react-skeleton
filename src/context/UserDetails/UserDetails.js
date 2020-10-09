import React, { createContext, useEffect, useState } from 'react';
import ky from 'ky';

const UserDetailsContext = createContext({});

async function fetchUserDetails() {
  const data = await ky.get('/user-details.json').json();
  return data;
}

const UserDetailsProvider = ({ children }) => {
  const [{ data, loading, error }, setUserDetailsData] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(function getUserDetails() {
    fetchUserDetails()
      .then((userDetails) =>
        setUserDetailsData({
          data: userDetails,
          loading: false,
          error: null,
        })
      )
      .catch((error) =>
        setUserDetailsData({
          data: null,
          loading: false,
          error,
        })
      );
  }, []);

  return (
    <UserDetailsContext.Provider value={{ data, loading, error }}>
      {children}
    </UserDetailsContext.Provider>
  );
};

export { UserDetailsContext, UserDetailsProvider };
