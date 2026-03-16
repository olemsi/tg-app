import { ProgressBar } from './ProgressBar.tsx';

interface HeaderProps {
  obtained: number;
  total: number;
  title: string;
}

export function Header({ obtained, total, title }: HeaderProps) {
  return (
    <header className="app-header">
      <h1 className="app-title">{title}</h1>
      <ProgressBar obtained={obtained} total={total} size="large" />
    </header>
  );
}
