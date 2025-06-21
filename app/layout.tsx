import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'عائلة الخضيري',
  description: 'موقع عائلة الخضيري - تراث وأصالة',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@100..900&family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-arabic-primary antialiased">
        {children}
      </body>
    </html>
  );
}