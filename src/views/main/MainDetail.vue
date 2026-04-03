<template>
  <div class="main-detail">
    <stack-header></stack-header>
    <div class="p-scroll-wrap">
      <div class="desc-wrap">
        <div class="app-chip">{{ t('ui.stateCache') }}</div>
        <div class="desc">{{ t('detail.desc') }}</div>
        <div class="tip">{{ t('detail.tip') }}</div>
      </div>
      <div class="status-grid">
        <div v-for="card in statusCards" :key="card.key" class="status-card app-card">
          <div class="label">{{ card.label }}</div>
          <div class="value" :class="{ 'value-text': card.multiline }">{{ card.value }}</div>
        </div>
      </div>
      <div class="form">
        <van-field v-model="textValue" :placeholder="t('detail.placeholder')" />
        <div class="actions-title">{{ t('detail.actionsTitle') }}</div>
        <van-button
          v-for="action in actionButtons"
          :key="action.key"
          @click="action.handler"
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
import { computed, onActivated } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { DETAIL_ACTION_ORDER, DETAIL_CARD_KEYS } from '@/constants/detail';
import { ROUTE_PATHS, getMainDetailPath } from '@/constants/routes';
import { useDetailDemoState } from '@/composables/useDetailDemoState';
import StackHeader from './components/StackHeader.vue';

const { t } = useI18n();

const router = useRouter();
const route = useRoute();

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
  handleActivated();
});

const onLogin = () => {
  router.push(ROUTE_PATHS.login);
};

const onReplace = () => {
  router.replace(getMainDetailPath(Number(route.params.id) + 1));
};

const onPushSame = () => {
  router.push(getMainDetailPath(Number(route.params.id) + 1));
};

const onPush = () => {
  router.push(ROUTE_PATHS.home);
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

    .desc {
      margin-top: 12px;
      font-size: 24px;
      font-weight: 800;
      color: var(--app-text-strong);
      text-wrap: balance;
    }

    .tip {
      margin-top: 10px;
      font-size: 13px;
      line-height: 1.7;
      color: var(--app-text-muted);
    }
  }

  .status-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
    padding: 0 var(--app-page-padding) 10px;
  }

  .status-card {
    min-height: 88px;
    padding: 14px;
    .label {
      font-size: 12px;
      color: var(--app-text-muted);
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    .value {
      margin-top: 10px;
      font-size: 18px;
      font-weight: 600;
      color: var(--app-text-strong);
      word-break: break-word;
    }

    .value-text {
      font-size: 14px;
      line-height: 1.6;
      font-weight: 500;
    }
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
  }
}
</style>
