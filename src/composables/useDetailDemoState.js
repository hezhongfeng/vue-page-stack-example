import { computed, ref } from 'vue';
import { getStoredUsername } from '@/utils/sessionStorage';

export function useDetailDemoState(route, t) {
  const userName = ref('');
  const textValue = ref('');
  const activationCount = ref(0);

  const currentPageId = computed(() => route.params.id);
  const currentPageNumber = computed(() => {
    const pageIndex = Number.parseInt(currentPageId.value, 10);

    if (Number.isNaN(pageIndex) || pageIndex < 0) {
      return '1';
    }

    return String(pageIndex + 1);
  });

  const detailValues = computed(() => ({
    currentPageNumber: currentPageNumber.value,
    currentUserName: userName.value || t('detail.noUser'),
    activationCount: activationCount.value,
    cachedInput: textValue.value || t('detail.emptyInput')
  }));

  const handleActivated = () => {
    activationCount.value += 1;
    userName.value = getStoredUsername();
  };

  return {
    currentPageId,
    currentPageNumber,
    textValue,
    detailValues,
    handleActivated
  };
}
