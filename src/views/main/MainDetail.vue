<template>
  <div class="main-detail">
    <stack-header></stack-header>
    <div class="p-scroll-wrap">
      <div class="desc-wrap">
        <div class="desc">{{ t('detail.desc') }}</div>
        <div class="tip">{{ t('detail.tip') }}</div>
      </div>
      <div class="status-grid">
        <div class="status-card">
          <div class="label">{{ t('detail.currentPageNumber') }}</div>
          <div class="value">{{ currentPageId }}</div>
        </div>
        <div class="status-card">
          <div class="label">{{ t('detail.currentUserName') }}</div>
          <div class="value">{{ userName || t('detail.noUser') }}</div>
        </div>
        <div class="status-card">
          <div class="label">{{ t('detail.activationCount') }}</div>
          <div class="value">{{ activationCount }}</div>
        </div>
        <div class="status-card">
          <div class="label">{{ t('detail.cachedInput') }}</div>
          <div class="value value-text">{{ textValue || t('detail.emptyInput') }}</div>
        </div>
      </div>
      <div class="form">
        <van-field v-model="textValue" :placeholder="t('detail.placeholder')" />
        <div class="actions-title">{{ t('detail.actionsTitle') }}</div>
        <van-button @click="onPushSame" type="primary" block>{{ t('detail.push.same') }}</van-button>
        <van-button @click="onLogin" block>{{ t('detail.push.login') }}</van-button>
        <van-button @click="onPush" block>{{ t('detail.push.list') }}</van-button>
        <van-button @click="onReplace" block>{{ t('detail.replace') }}</van-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onActivated, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { ROUTE_PATHS, getMainDetailPath } from '@/constants/routes';
import StackHeader from './components/StackHeader.vue';

const { t } = useI18n();

const router = useRouter();
const route = useRoute();

const userName = ref('');
const textValue = ref('');
const activationCount = ref(0);

const currentPageId = computed(() => route.params.id);

onActivated(() => {
  activationCount.value += 1;
  if (window.sessionStorage.username) {
    userName.value = window.sessionStorage.username;
  }
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
</script>

<style lang="scss">
.main-detail {
  min-height: 100%;
  padding-top: var(--app-header-height);

  .p-scroll-wrap {
    height: calc(100% - 90px);
    padding-bottom: 20px;
  }

  .desc-wrap {
    padding: 20px 10px 10px 10px;
    line-height: 2;
    font-size: 16px;
    color: #333;

    .tip {
      font-size: 13px;
      line-height: 1.7;
      color: var(--app-text-muted);
    }
  }

  .status-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
    padding: 0 10px 10px;
  }

  .status-card {
    min-height: 88px;
    padding: 12px;
    border-radius: 12px;
    background: #fff;
    box-shadow: 0 8px 18px rgba(24, 39, 75, 0.06);

    .label {
      font-size: 12px;
      color: var(--app-text-muted);
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
    padding: 0 10px 10px 10px;

    .actions-title {
      margin-top: 16px;
      margin-bottom: 10px;
      font-size: 13px;
      color: var(--app-text-muted);
    }

    > * {
      margin-top: 10px;
    }
  }
}
</style>
