import { StrictMode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import { ClerkProvider } from '@clerk/clerk-react';
import Header from './header';
import { Profile } from './profile/profile';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env.local file');
}
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const routes = [
  {
    path: '/',
    component: App,
  },
  {
    path: '/profile',
    component: Profile,
  },
];

root.render(
  <StrictMode>
    <BrowserRouter>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <Header />
        <main>
          <Routes>
            {routes.map(({ path, component: Component }) => (
              <Route key={path} path={path} Component={Component} />
            ))}
          </Routes>
        </main>
      </ClerkProvider>
    </BrowserRouter>
  </StrictMode>
);
