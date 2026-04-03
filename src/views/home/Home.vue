<template>
  <div class="c-home">
    <div class="h-body">
      <main-list v-show="selectedIndex === '0'"></main-list>
      <about v-show="selectedIndex === '1'"></about>
    </div>
    <div class="h-tabbars">
      <van-tabbar v-model="selectedIndex">
        <van-tabbar-item v-for="item in tabs" :name="item.value" :key="item.value" :icon="item.icon">{{
          item.label
        }}</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { HOME_TAB_VALUES, getHomeTabQueryValue, normalizeHomeTab } from '@/constants/homeTabs';
import { ROUTE_PATHS } from '@/constants/routes';
import MainList from '../main/MainList.vue';
import About from '../about/About.vue';

const { t } = useI18n();
const route = useRoute();
const router = useRouter();

const selectedIndex = computed({
  get: () => normalizeHomeTab(route.query.tab),
  set: value => {
    router.replace({
      path: ROUTE_PATHS.home,
      query: {
        ...route.query,
        tab: getHomeTabQueryValue(value)
      }
    });
  }
});

const tabs = computed(() => {
  return [
    {
      value: HOME_TAB_VALUES.main,
      label: t('home'),
      icon: selectedIndex.value === HOME_TAB_VALUES.main ? 'wap-home' : 'wap-home-o'
    },
    {
      value: HOME_TAB_VALUES.about,
      label: t('about'),
      icon: selectedIndex.value === HOME_TAB_VALUES.about ? 'manager' : 'manager-o'
    }
  ];
});
</script>

<style lang="scss">
.c-home {
  height: 100%;

  .h-body {
    height: calc(100% - var(--app-tabbar-height));
  }

  .h-tabbars {
    :deep(.van-tabbar) {
      height: var(--app-tabbar-height);
      padding-bottom: env(safe-area-inset-bottom);
    }

    :deep(.van-tabbar-item__icon) {
      margin-bottom: 4px;
    }

    :deep(.van-tabbar-item--active) {
      color: var(--app-primary-strong);
    }

    :deep(.van-tabbar-item--active .van-tabbar-item__text) {
      color: var(--app-primary-strong);
    }
  }
}
</style>
