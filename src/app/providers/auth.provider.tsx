'use client';

import { Appearance } from '@clerk/types/dist/appearance';
import { dark } from '@clerk/themes';
import React from 'react';
import { ClerkProvider } from '@clerk/nextjs';
import { useTheme } from 'next-themes';
import { AppTheme } from '@/app/enums';

export default function AuthProvider({ children }: {
  children: React.ReactNode
}) {
  const { resolvedTheme } = useTheme();

  const defaultClerkAppearanceSettings: Appearance = {
    variables: {
      colorPrimary: 'red',
    },
  };

  if (resolvedTheme === AppTheme.DARK) {
    defaultClerkAppearanceSettings.baseTheme = dark;
    defaultClerkAppearanceSettings.variables!.colorBackground = 'rgb(55,65,81)';
  }

  return (
    <ClerkProvider appearance={defaultClerkAppearanceSettings}>
      {children}
    </ClerkProvider>
  );
}
