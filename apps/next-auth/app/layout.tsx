import './global.css';
import { ClerkProvider } from '@clerk/nextjs';
import { Header } from './header';

export const metadata = {
  title: 'Some app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <Header />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
