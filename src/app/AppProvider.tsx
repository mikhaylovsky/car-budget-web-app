import { AuthProvider, StoreProvider, ThemeProvider } from '@/app/providers';
import React from 'react';

export default function AppProvider({ children }: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <StoreProvider>
          {children}
        </StoreProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
