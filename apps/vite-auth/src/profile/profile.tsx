'use client';
import { useApiData } from '../lib/useApiData';

export const Profile = () => {
  const apiData = useApiData();

  return (
    <>
      {/* <p>Profile Page {user?.user?.emailAddresses?.[0].emailAddress || ''}</p>*/}
      {apiData && <p>Data: {apiData.message}</p>}
    </>
  );
};
