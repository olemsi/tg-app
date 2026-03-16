import { cloudStorage } from '@tma.js/sdk-react';

function isCloudStorageAvailable(): boolean {
  try {
    return cloudStorage.isSupported();
  } catch {
    return false;
  }
}

export function useCloudStorage() {
  const available = isCloudStorageAvailable();

  async function getItem(key: string): Promise<string | undefined> {
    if (available) {
      const value = await cloudStorage.getItem(key);
      return value || undefined;
    }
    return localStorage.getItem(key) ?? undefined;
  }

  async function setItem(key: string, value: string): Promise<void> {
    if (available) {
      await cloudStorage.setItem(key, value);
    } else {
      localStorage.setItem(key, value);
    }
  }

  return { getItem, setItem };
}
