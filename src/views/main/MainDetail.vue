<template>
  <div class="main-detail">
    <stack-header></stack-header>
    <div class="p-scroll-wrap">
      <div class="desc-wrap">
        <div class="desc">{{ t('detail.desc') }}</div>
      </div>
      <div class="form">
        <van-field v-model="textValue" :placeholder="t('detail.placeholder')" />
        <van-button @click="onPushSame" type="primary" block>{{ t('detail.push.same') }}</van-button>
        <van-button @click="onLogin" type="primary" block>{{ t('detail.push.login') }}</van-button>
        <van-button @click="onPush" type="primary" block>{{ t('detail.push.list') }}</van-button>
        <van-button @click="onReplace" type="primary" block>{{ t('detail.replace') }}</van-button>
        <van-button type="primary" block>{{ t('detail.currentPageNumber') + ' ' + route.params.id }}</van-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onActivated } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { ROUTE_PATHS, getMainDetailPath } from '@/constants/routes';
import StackHeader from './components/StackHeader.vue';

const { t } = useI18n();

const router = useRouter();
const route = useRoute();

const userName = ref('');
const textValue = ref('');

onActivated(() => {
  if (window.sessionStorage.username) {
    userName.value = window.sessionStorage.username;
  }
  if (textValue.value) {
    textValue.value = textValue.value + ' + activated';
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
  padding-top: 45px;
  .p-scroll-wrap {
    height: calc(100% - 90px);
  }
  .desc-wrap {
    padding: 20px 10px 10px 10px;
    line-height: 2;
    font-size: 16px;
    color: #333;
  }
  .form {
    padding: 0 10px 10px 10px;
    > * {
      margin-top: 10px;
    }
  }
  .index {
    margin-top: 20vw;
  }
}
</style>
