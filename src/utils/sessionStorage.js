export const USERNAME_STORAGE_KEY = 'username';

export function getStoredUsername(storage = window.sessionStorage) {
  return storage.getItem(USERNAME_STORAGE_KEY) || '';
}

export function setStoredUsername(username, storage = window.sessionStorage) {
  storage.setItem(USERNAME_STORAGE_KEY, username);
}
