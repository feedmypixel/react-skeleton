import { useEffect, useState } from 'react';
import ky from 'ky';

async function fetchCatFacts() {
  const data = await ky
    .get('https://cat-fact.herokuapp.com/facts/random?amount=1')
    .json();
  return data;
}

function useCatFact() {
  const [{ data, loading, error }, setCatFactData] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(function getProfileData() {
    fetchCatFacts()
      .then((catFacts) =>
        setCatFactData({
          data: catFacts,
          loading: false,
          error: null,
        })
      )
      .catch((error) =>
        setCatFactData({
          data: null,
          loading: false,
          error,
        })
      );
  }, []);

  return [data, loading, error];
}

export default useCatFact;
