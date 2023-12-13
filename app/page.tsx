import { ThemeSwitcher } from './components/theme-switcher';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-24">
      <h1 className="text-2xl font-bold">André &quot;Dezzy&quot; Victor</h1>

      <ThemeSwitcher />
    </main>
  );
}
