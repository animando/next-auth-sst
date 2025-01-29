import { useEffect, useState } from 'react';
import { Data, useGetData } from './useGetData';

export const useApiData = () => {
  const [data, setData] = useState<Data>();
  const getData = useGetData();

  useEffect(() => {
    void getData().then((d) => setData(d));
  }, [getData]);

  return data;
};
