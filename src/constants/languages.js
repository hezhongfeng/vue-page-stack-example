export const LOCALE_STORAGE_KEY = 'locale';

export const LANGUAGE_OPTIONS = [
  { text: '简体中文', value: 'zh' },
  { text: 'English', value: 'en' }
];

export function getLanguageLabel(locale) {
  return LANGUAGE_OPTIONS.find(item => item.value === locale)?.text ?? LANGUAGE_OPTIONS[0].text;
}
