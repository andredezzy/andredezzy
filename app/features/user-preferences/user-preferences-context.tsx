'use client';

import React from 'react';

import { type getUserPreferences } from './get-user-preferences';

type UserPreferencesContext = ReturnType<typeof getUserPreferences>;

type UserPreferencesProviderProps = {
  userPreferences: UserPreferencesContext;
  children: React.ReactNode;
};

const Context = React.createContext<UserPreferencesContext | null>(null);

export const UserPreferencesProvider = ({
  userPreferences,
  children,
}: UserPreferencesProviderProps) => {
  const value = React.useMemo(() => userPreferences, [userPreferences]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useUserPreferences = () => {
  const context = React.useContext(Context);

  if (!context) {
    throw new Error(
      `useUserPreferences must be used within UserPreferencesProvider.`,
    );
  }

  return context;
};
