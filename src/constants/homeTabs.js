export const HOME_TAB_VALUES = {
  main: '0',
  about: '1'
};

export const HOME_TAB_QUERY_VALUES = {
  main: 'main',
  about: 'about'
};

export function normalizeHomeTab(queryValue) {
  return queryValue === HOME_TAB_QUERY_VALUES.about ? HOME_TAB_VALUES.about : HOME_TAB_VALUES.main;
}

export function getHomeTabQueryValue(tabValue) {
  return tabValue === HOME_TAB_VALUES.about ? HOME_TAB_QUERY_VALUES.about : HOME_TAB_QUERY_VALUES.main;
}
