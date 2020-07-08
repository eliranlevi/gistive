import AsyncStorage from "@react-native-community/async-storage";

const SETTINGS_KEY = "settings";

async function storeItem(key: string, data: string): Promise<void> {
  await AsyncStorage.setItem(key, data);
}

async function getItem<T>(key: string): Promise<T> {
  const item: string | null = await AsyncStorage.getItem(key);

  return item ? JSON.parse(item) : {};
}

export async function storeSettings({ username, token }: SettingsStorage): Promise<void> {
  await storeItem(SETTINGS_KEY, JSON.stringify({
    username,
    token,
  }));
}

export async function getSettings(): Promise<SettingsStorage> {
  return (await getItem<SettingsStorage>(SETTINGS_KEY));
}

interface SettingsStorage {
  username: string | undefined;
  token: string | undefined;
}
