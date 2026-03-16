import { mockTelegramEnv } from '@tma.js/sdk-react';

mockTelegramEnv({
  launchParams: {
    tgWebAppVersion: '8.0',
    tgWebAppPlatform: 'tdesktop',
    tgWebAppThemeParams: {
      bg_color: '#ffffff',
      text_color: '#000000',
      hint_color: '#999999',
      link_color: '#168acd',
      button_color: '#3390ec',
      button_text_color: '#ffffff',
      secondary_bg_color: '#f0f0f0',
      section_bg_color: '#ffffff',
      section_header_text_color: '#3390ec',
      accent_text_color: '#3390ec',
      destructive_text_color: '#ff3b30',
      section_separator_color: '#e0e0e0',
      subtitle_text_color: '#999999',
    },
  },
});
