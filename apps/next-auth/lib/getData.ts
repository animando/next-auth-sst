'use server';

import axios from 'axios';
import { cookies } from 'next/headers';

export type Data = {
  message: string;
};
export const getData = async () => {
  const session = (await cookies()).get('__session');

  const response = await axios.get<Data>('http://localhost:5000/api', {
    headers: { Authorization: `Bearer ${session?.value || ''}` },
  });
  return response.data;
};
