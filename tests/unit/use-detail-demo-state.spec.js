import { describe, expect, it } from 'vitest';
import { useDetailDemoState } from '@/composables/useDetailDemoState';
import { USERNAME_STORAGE_KEY } from '@/utils/sessionStorage';

describe('useDetailDemoState', () => {
  it('surfaces a user-facing page number, activation count and cached input state', () => {
    window.sessionStorage.clear();
    window.sessionStorage.setItem(USERNAME_STORAGE_KEY, 'Alice');

    const route = {
      params: {
        id: '3'
      }
    };

    const t = key =>
      ({
        'detail.noUser': 'guest',
        'detail.emptyInput': 'no input yet'
      })[key];

    const state = useDetailDemoState(route, t);

    expect(state.detailValues.value.currentPageNumber).toBe('4');
    expect(state.detailValues.value.activationCount).toBe(0);
    expect(state.detailValues.value.cachedInput).toBe('no input yet');

    state.handleActivated();
    state.textValue.value = 'remember me';

    expect(state.detailValues.value.currentUserName).toBe('Alice');
    expect(state.detailValues.value.activationCount).toBe(1);
    expect(state.detailValues.value.cachedInput).toBe('remember me');
  });

  it('falls back to page 1 when the route id is invalid', () => {
    const route = {
      params: {
        id: '-1'
      }
    };

    const t = key =>
      ({
        'detail.noUser': 'guest',
        'detail.emptyInput': 'no input yet'
      })[key];

    const state = useDetailDemoState(route, t);

    expect(state.detailValues.value.currentPageNumber).toBe('1');
  });
});
