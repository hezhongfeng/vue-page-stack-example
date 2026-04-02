<template>
  <div class="main-list">
    <div class="header-placeholder"></div>
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

  .header-placeholder {
    height: var(--app-header-height);
  }

  .scroll {
    height: calc(100% - 70px);
  }
}
</style>
