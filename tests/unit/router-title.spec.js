import { describe, expect, it, vi } from 'vitest';
import { HOME_TAB_QUERY_VALUES } from '@/constants/homeTabs';
import { ROUTE_PATHS } from '@/constants/routes';
import { applyRouteTitle, getRouteTitleKey, installRouteTitleSync } from '@/router/title';

describe('route title sync', () => {
  it('maps the about tab on home route to the about title key', () => {
    expect(
      getRouteTitleKey({
        path: ROUTE_PATHS.home,
        query: { tab: HOME_TAB_QUERY_VALUES.about },
        meta: { titleKey: 'route.home' }
      })
    ).toBe('route.about');
  });

  it('applies a translated title when a route title key exists', () => {
    const i18n = {
      global: {
        t: vi.fn(key => `translated:${key}`)
      }
    };

    applyRouteTitle({ path: ROUTE_PATHS.login, query: {}, meta: { titleKey: 'route.login' } }, i18n, 'fallback');

    expect(document.title).toBe('translated:route.login');
  });

  it('registers afterEach sync using the fallback title when no title key exists', () => {
    const afterEach = vi.fn(callback => {
      callback({ path: '/unknown', query: {}, meta: {} });
    });

    installRouteTitleSync({ afterEach }, { global: { t: key => key } }, 'fallback');

    expect(afterEach).toHaveBeenCalledTimes(1);
    expect(document.title).toBe('fallback');
  });
});
