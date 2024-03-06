import type { Metadata } from 'next';
import Sidebar from '@/app/components/Sidebar';
import React from 'react';
import Content from '@/app/components/Content';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Budget web app',
};

export default function AppLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <Sidebar />

      <Content>{ children }</Content>
    </main>
  );
}
