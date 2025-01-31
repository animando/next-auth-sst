'use server';

import { auth } from '@clerk/nextjs/server';
export type Data = {
  message: string;
};

const secretKey = process.env['CLERK_SECRET_KEY'];
if (!secretKey) {
  throw Error('CLERK_SECRET_KEY not defined');
}
export const getData = async () => {
  const { userId } = await auth();

  if (!userId) {
    throw new Error('You must be signed in');
  }

  return { message: 'Verified' };
};
