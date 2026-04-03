<template>
  <div class="main-list">
    <div class="header-placeholder"></div>
    <div class="intro app-card">
      <section-intro :kicker="t('ui.stackDemo')" :title="t('home')" :copy="t('ui.mainListHint')" />
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
import SectionIntro from '@/components/SectionIntro.vue';
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
    margin: 6px var(--app-page-padding) 12px;
    padding: 14px 14px 15px;
  }

  :deep(.section-intro .copy) {
    max-width: 28em;
  }

  .scroll {
    height: calc(100% - 150px);
  }
}
</style>
