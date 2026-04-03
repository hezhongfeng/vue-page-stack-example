import { HOME_TAB_QUERY_VALUES } from '@/constants/homeTabs';
import { ROUTE_PATHS } from '@/constants/routes';

export function getRouteTitleKey(route) {
  if (route.path === ROUTE_PATHS.home && route.query?.tab === HOME_TAB_QUERY_VALUES.about) {
    return 'route.about';
  }

  return route.meta?.titleKey;
}

export function applyRouteTitle(route, i18n, fallbackTitle) {
  const titleKey = getRouteTitleKey(route);
  document.title = titleKey ? i18n.global.t(titleKey) : fallbackTitle;
}

export function installRouteTitleSync(router, i18n, fallbackTitle) {
  router.afterEach(to => {
    applyRouteTitle(to, i18n, fallbackTitle);
  });
}
