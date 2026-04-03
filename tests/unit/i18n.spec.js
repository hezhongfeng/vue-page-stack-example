import { beforeEach, describe, expect, it } from 'vitest';
import { LOCALE_STORAGE_KEY } from '@/constants/languages';
import { resolveLocale, setI18nLanguage, setupI18n } from '@/i18n';

describe('i18n locale helpers', () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.lang = '';
  });

  it('restores a supported locale from storage', () => {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, 'en');

    expect(resolveLocale()).toBe('en');
  });

  it('falls back to zh when storage contains an unsupported locale', () => {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, 'fr');

    expect(resolveLocale()).toBe('zh');
  });

  it('persists locale changes and updates the html lang attribute', () => {
    const i18n = setupI18n({
      legacy: false,
      locale: 'zh',
      messages: {
        zh: { home: '主页' },
        en: { home: 'Home' }
      }
    });

    setI18nLanguage(i18n, 'en');

    expect(window.localStorage.getItem(LOCALE_STORAGE_KEY)).toBe('en');
    expect(document.documentElement.lang).toBe('en');
  });
});
