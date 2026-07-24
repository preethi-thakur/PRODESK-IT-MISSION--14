import { Providers } from './Providers';
import './globals.css';

export const metadata = {
  title: 'Auth App',
  description: 'Authentication App with Firebase and Redux'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
