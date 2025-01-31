import { useEffect, useState } from 'react';
import { Data, getData } from './getData';

export const useApiData = () => {
  const [data, setData] = useState<Data>();

  useEffect(() => {
    void getData()
      .then((d) => setData(d))
      .catch((e) => {
        setData({ message: e.message });
      });
  }, []);

  return data;
};
