import { init, miniApp, themeParams, viewport } from '@tma.js/sdk-react';

export function initApp(): void {
  init();

  themeParams.mount();
  themeParams.bindCssVars();

  miniApp.mount();
  miniApp.bindCssVars();

  try {
    viewport.mount();
    viewport.bindCssVars();
  } catch {
    // viewport may not be available in all environments
  }

  miniApp.ready();
}
