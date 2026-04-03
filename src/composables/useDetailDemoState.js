import { computed, ref } from 'vue';
import { getStoredUsername } from '@/utils/sessionStorage';

export function useDetailDemoState(route, t) {
  const userName = ref('');
  const textValue = ref('');
  const activationCount = ref(0);

  const currentPageId = computed(() => route.params.id);

  const detailValues = computed(() => ({
    currentPageNumber: currentPageId.value,
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
    textValue,
    detailValues,
    handleActivated
  };
}
