import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

export const metadata = {
  title: 'Min filmlista',
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body className="container py-4">
        {children}
      </body>
    </html>
  );
}