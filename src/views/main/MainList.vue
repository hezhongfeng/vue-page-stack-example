<template>
  <div class="main-list">
    <div class="header-placeholder"></div>
    <div class="intro app-card">
      <div class="intro-kicker">{{ t('ui.stackDemo') }}</div>
      <div class="intro-title">{{ t('home') }}</div>
      <div class="intro-copy">{{ t('ui.mainListHint') }}</div>
    </div>
    <div class="scroll" ref="wrapper">
      <div class="scroll-content">
        <main-item
          v-for="(item, index) of list"
          :key="index"
          :item="item"
          :index="index"
          @click="onClick(item)"
        ></main-item>
      </div>
    </div>
    <stack-header :title="t('home')"></stack-header>
  </div>
</template>

<script setup>
import { nextTick, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useBetterScroll } from '@/composables/useBetterScroll';
import { MAIN_LIST_ITEMS } from '@/constants/mainList';
import { getMainDetailPath } from '@/constants/routes';
import MainItem from './components/MainItem.vue';
import StackHeader from './components/StackHeader.vue';

const router = useRouter();
const { t } = useI18n();

const list = ref(MAIN_LIST_ITEMS);

const wrapper = ref(null);

const { refresh } = useBetterScroll(wrapper, {
  click: true,
  wheel: true
});

const onClick = item => {
  router.push(getMainDetailPath(item.id));
};

nextTick(() => {
  refresh();
});
</script>

<style lang="scss">
.main-list {
  height: 100%;
  position: relative;
  padding-bottom: calc(var(--app-tabbar-height) + 10px);

  .header-placeholder {
    height: var(--app-header-height);
  }

  .intro {
    margin: 8px var(--app-page-padding) 14px;
    padding: 18px 16px;
  }

  .intro-kicker {
    font-size: 11px;
    color: var(--app-primary-strong);
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .intro-title {
    margin-top: 8px;
    color: var(--app-text-strong);
    font-size: 22px;
    font-weight: 800;
  }

  .intro-copy {
    margin-top: 8px;
    color: var(--app-text-muted);
    font-size: 14px;
    line-height: 1.6;
  }

  .scroll {
    height: calc(100% - 170px);
  }
}
</style>
