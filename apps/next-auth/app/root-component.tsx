'use client';

import { useApiData } from '../lib/useApiData';

export const RootComponent = () => {
  const data = useApiData();

  return <p>{data?.message || 'No data'}</p>;
};
