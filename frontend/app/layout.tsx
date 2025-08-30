// frontend/app/layout.tsx
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Skeleton Frontend',
  description: 'Next.js + FastAPI skeleton',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body style={{ margin: 20, fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto' }}>
        {children}
      </body>
    </html>
  );
}
