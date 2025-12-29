import Providers from './providers';
import { ToastContainer } from 'react-toastify';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/base.css" />
        <link rel="stylesheet" href="/css/vendor.css" />
        <link rel="stylesheet" href="/css/main.css" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body id="top">
        <Providers>
          {children}
          <ToastContainer position="top-right" autoClose={2000} />
        </Providers>
      </body>
    </html>
  );
}
