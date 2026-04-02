<template>
  <div class="my">
    <div class="logo">
      <img src="@/assets/stack.svg" />
      <div class="package">
        <div class="version">v{{ APP_VERSION }}</div>
        <div class="auther">Author: {{ ABOUT_AUTHOR }}</div>
      </div>
    </div>
    <div class="desc">{{ t('aboutPage.desc1') }}</div>
    <div class="desc">{{ t('aboutPage.desc2') }}</div>
    <div class="desc">{{ t('aboutPage.desc3') }}</div>
  </div>
</template>

<script setup>
import { ABOUT_AUTHOR } from '@/constants/about';
import { APP_VERSION } from '@/constants/app';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style lang="scss">
.my {
  height: 100%;
  .logo {
    display: flex;
    align-items: center;
    flex-direction: column;
    .package {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 1.5;
      top: 55vw;
      font-size: 18px;
      color: var(--app-text-muted);
      padding-top: 3vw;
    }
    img {
      padding-top: var(--app-logo-padding-top);
      width: var(--app-logo-width);
    }
  }
  .desc {
    margin: 10px 20px 10px 20px;
    line-height: 1.8;
    font-size: 14px;
    color: var(--app-text-muted);
  }
}
</style>
