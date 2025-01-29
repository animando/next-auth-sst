import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <SignOutButton />
        <Link to="/profile">Profile</Link>
      </SignedIn>
    </header>
  );
}

export default Header;
