'use client';

import { SunIcon, MoonIcon, MonitorSmartphoneIcon } from 'lucide-react';
import { useTransition } from 'react';

import { setTheme } from '@/features/user-preferences/set-theme';
import { useUserPreferences } from '@/features/user-preferences/user-preferences-context';
import { cn } from '@/lib/utils';

export function ThemeSwitcher() {
  const { theme } = useUserPreferences();
  const [_isPending, startTransition] = useTransition();

  function changeTheme(value: string) {
    startTransition(() => {
      setTheme(value);
    });
  }

  return (
    <div className="flex gap-2">
      <button
        type="button"
        className={cn(
          'text-muted-foreground hover:text-foreground rounded-full p-2 transition-colors',
          {
            'bg-accent text-foreground cursor-default': !theme,
          },
        )}
        onClick={() => changeTheme('system')}
        title="Tema do sistema"
      >
        <MonitorSmartphoneIcon className="h-5 w-5" />
      </button>

      <button
        type="button"
        className={cn(
          'text-muted-foreground hover:text-foreground rounded-full p-2 transition-colors',
          {
            'bg-accent text-foreground cursor-default': theme === 'light',
          },
        )}
        onClick={() => changeTheme('light')}
        title="Tema claro"
      >
        <SunIcon className="h-5 w-5" />
      </button>

      <button
        type="button"
        className={cn(
          'text-muted-foreground hover:text-foreground rounded-full p-2 transition-colors',
          {
            'bg-accent text-foreground cursor-default': theme === 'dark',
          },
        )}
        onClick={() => changeTheme('dark')}
        title="Tema escuro"
      >
        <MoonIcon className="h-5 w-5" />
      </button>
    </div>
  );
}
