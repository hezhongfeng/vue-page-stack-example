import { onBeforeUnmount, onMounted, ref } from 'vue';
import BScroll from '@better-scroll/core';

export function useBetterScroll(wrapperRef, options = {}) {
  const instance = ref(null);

  const refresh = () => {
    instance.value?.refresh();
  };

  onMounted(() => {
    if (!wrapperRef.value) {
      return;
    }

    instance.value = new BScroll(wrapperRef.value, options);
    refresh();
  });

  onBeforeUnmount(() => {
    instance.value?.destroy();
    instance.value = null;
  });

  return {
    instance,
    refresh
  };
}
