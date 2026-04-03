import { describe, expect, it } from 'vitest';
import { getStoredUsername, setStoredUsername } from '@/utils/sessionStorage';

describe('session storage helpers', () => {
  it('stores and restores the username', () => {
    const storage = window.sessionStorage;
    storage.clear();

    setStoredUsername('codex', storage);

    expect(getStoredUsername(storage)).toBe('codex');
  });

  it('returns an empty string when no username exists', () => {
    const storage = window.sessionStorage;
    storage.clear();

    expect(getStoredUsername(storage)).toBe('');
  });
});
