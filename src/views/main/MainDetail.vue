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
import { ref, onMounted, onActivated, onBeforeUnmount, onUnmounted, onDeactivated } from 'vue';
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router';
import { useI18n } from 'vue-i18n';
import StackHeader from './StackHeader.vue';

const { t } = useI18n();

const router = useRouter();
const route = useRoute();

const userName = ref('');
const textValue = ref('');

onBeforeUnmount(() => {
  console.log('detail onBeforeUnmount ' + textValue.value);
});

onUnmounted(() => {
  console.log('detail onUnmounted ' + textValue.value);
});

onDeactivated(() => {
  console.log('detail onDeactivated ' + textValue.value);
});

onMounted(() => {
  console.log('detail mounted ' + textValue.value);
});

onActivated(() => {
  console.log('detail activated');
  if (window.sessionStorage.username) {
    userName.value = window.sessionStorage.username;
  }
  if (textValue.value) {
    textValue.value = textValue.value + ' + activated';
  }
});

onBeforeRouteUpdate(() => {});

const onLogin = () => {
  router.push('/login');
};
const onReplace = () => {
  router.replace('/main-detail/' + (Number(route.params.id) + 1));
};
const onPushSame = () => {
  router.push('/main-detail/' + (Number(route.params.id) + 1));
};
const onPush = () => {
  router.push('/home');
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
