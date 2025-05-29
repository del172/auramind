import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AuraMind - Sleep & Relaxation Resource',
  description: 'A comprehensive resource for sleep and relaxation techniques during stressful life situations',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-blue-100">
          {children}
        </main>
      </body>
    </html>
  );
}
