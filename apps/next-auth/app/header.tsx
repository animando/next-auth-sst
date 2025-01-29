import Link from 'next/link';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from '@clerk/nextjs';
export const Header = async () => {
  return (
    <nav>
      <SignedIn>
        <SignOutButton />
        <Link href="/profile">Profile</Link>
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </nav>
  );
};
