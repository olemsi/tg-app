import { ProgressBar } from './ProgressBar.tsx';

interface HeaderProps {
  obtained: number;
  total: number;
}

export function Header({ obtained, total }: HeaderProps) {
  return (
    <header className="app-header">
      <h1 className="app-title">Tamagotchi Uni Tracker</h1>
      <ProgressBar obtained={obtained} total={total} size="large" />
    </header>
  );
}
