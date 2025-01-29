import { auth } from '@clerk/nextjs/server';
import { Profile } from './profile';

const ProfilePage = async () => {
  const a = await auth();

  return (
    <>
      <div>
        <pre>{JSON.stringify(a)}</pre>
        <Profile />
      </div>
    </>
  );
};

export default ProfilePage;
