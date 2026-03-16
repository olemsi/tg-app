import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { initApp } from './init.ts';
import App from './App.tsx';
import './App.css';

if (import.meta.env.DEV) {
  await import('./mockEnv.ts');
}

try {
  initApp();
} catch (e) {
  console.error('Failed to init TMA SDK:', e);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
