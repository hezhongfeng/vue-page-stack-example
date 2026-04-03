<template>
  <div class="main-detail">
    <stack-header></stack-header>
    <div class="p-scroll-wrap">
      <div class="desc-wrap">
        <div class="app-chip">{{ t('ui.stateCache') }}</div>
        <section-intro :title="t('detail.desc')" :copy="t('detail.tip')" />
      </div>
      <div class="status-grid">
        <info-card
          v-for="card in statusCards"
          :key="card.key"
          :label="card.label"
          :value="card.value"
          :multiline="card.multiline"
          :test-id="`detail-card-${card.key}`"
        />
      </div>
      <div class="form">
        <van-field v-model="textValue" data-testid="detail-input" clearable :placeholder="t('detail.placeholder')" />
        <div class="input-feedback app-card">
          <div class="feedback-label">{{ t('detail.inputStatusLabel') }}</div>
          <div class="feedback-value">
            {{ textValue ? t('detail.inputStatusReady') : t('detail.inputStatusEmpty') }}
          </div>
        </div>
        <div class="actions-title">{{ t('detail.actionsTitle') }}</div>
        <van-button
          v-for="action in actionButtons"
          :key="action.key"
          :data-testid="action.testId"
          @click="action.handler"
          :loading="action.loading"
          :disabled="action.disabled"
          :type="action.primary ? 'primary' : 'default'"
          block
        >
          {{ action.label }}
        </van-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onActivated, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { DETAIL_ACTION_ORDER, DETAIL_CARD_KEYS } from '@/constants/detail';
import { ROUTE_PATHS, getMainDetailPath } from '@/constants/routes';
import { useDetailDemoState } from '@/composables/useDetailDemoState';
import InfoCard from '@/components/InfoCard.vue';
import SectionIntro from '@/components/SectionIntro.vue';
import StackHeader from './components/StackHeader.vue';

const { t } = useI18n();

const router = useRouter();
const route = useRoute();
const isNavigating = ref(false);

const { textValue, detailValues, handleActivated } = useDetailDemoState(route, t);

const statusCards = computed(() =>
  DETAIL_CARD_KEYS.map(key => ({
    key,
    label: t(`detail.${key}`),
    value: detailValues.value[key],
    multiline: key === 'cachedInput'
  }))
);

onActivated(() => {
  isNavigating.value = false;
  handleActivated();
});

const navigate = async action => {
  if (isNavigating.value) {
    return;
  }

  isNavigating.value = true;

  try {
    await action();
  } finally {
    isNavigating.value = false;
  }
};

const onLogin = () => {
  navigate(() => router.push(ROUTE_PATHS.login));
};

const onReplace = () => {
  navigate(() => router.replace(getMainDetailPath(Number(route.params.id) + 1)));
};

const onPushSame = () => {
  navigate(() => router.push(getMainDetailPath(Number(route.params.id) + 1)));
};

const onPush = () => {
  navigate(() => router.push(ROUTE_PATHS.home));
};

const actionMap = {
  same: {
    handler: onPushSame,
    primary: true
  },
  login: {
    handler: onLogin,
    primary: false
  },
  list: {
    handler: onPush,
    primary: false
  },
  replace: {
    handler: onReplace,
    primary: false
  }
};

const actionButtons = computed(() =>
  DETAIL_ACTION_ORDER.map(key => ({
    key,
    label: key === 'replace' ? t('detail.replace') : t(`detail.push.${key}`),
    testId: `detail-action-${key}`,
    loading: key === 'same' && isNavigating.value,
    disabled: isNavigating.value,
    ...actionMap[key]
  }))
);
</script>

<style lang="scss">
.main-detail {
  min-height: 100%;
  padding-top: var(--app-header-height);
  background:
    radial-gradient(circle at top right, rgba(127, 166, 175, 0.14), transparent 24%),
    transparent;

  .p-scroll-wrap {
    height: calc(100% - 90px);
    padding-bottom: 20px;
  }

  .desc-wrap {
    padding: 20px var(--app-page-padding) 10px;
    line-height: 1.8;
    color: var(--app-text-default);

    :deep(.section-intro) {
      margin-top: 12px;
    }

    :deep(.section-intro .title) {
      font-size: 24px;
    }

    :deep(.section-intro .copy) {
      margin-top: 10px;
      line-height: 1.7;
    }
  }

  .status-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
    padding: 0 var(--app-page-padding) 10px;
  }

  .form {
    padding: 0 var(--app-page-padding) 10px;
    margin-top: 6px;

    .actions-title {
      margin-top: 16px;
      margin-bottom: 10px;
      font-size: 13px;
      color: var(--app-text-muted);
    }

    > * {
      margin-top: 10px;
    }

    :deep(.van-field) {
      border-radius: 16px;
      overflow: hidden;
    }

    .input-feedback {
      margin-top: 10px;
      padding: 12px 14px;
    }

    .feedback-label {
      font-size: 12px;
      color: var(--app-text-muted);
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    .feedback-value {
      margin-top: 6px;
      color: var(--app-text-strong);
      font-size: 14px;
      font-weight: 600;
      line-height: 1.6;
    }
  }
}
</style>
