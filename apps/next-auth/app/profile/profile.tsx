'use client';

import { useUser } from '@clerk/nextjs';
import { useApiData } from '../../lib/useApiData';

export const Profile = () => {
  const user = useUser();
  const apiData = useApiData();

  return (
    <>
      <p>Profile Page {user?.user?.emailAddresses?.[0].emailAddress || ''}</p>
      {apiData && <p>Data: {apiData.message}</p>}
    </>
  );
};
