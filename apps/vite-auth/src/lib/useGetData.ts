import { useCallback } from 'react';
import { useToken } from './useToken';
import axios from 'axios';

export type Data = {
  message: string;
};
type GetData = () => Promise<Data | undefined>;
export const useGetData = (): GetData => {
  const token = useToken();

  const getData = useCallback(async () => {
    if (!token) return undefined;
    const response = await axios.get<Data>('http://localhost:5000/api', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }, [token]);

  return getData;
};
