<template>
  <section class="my">
    <div class="hero app-card">
      <div class="logo">
        <img src="@/assets/stack.svg" alt="vue-page-stack logo" />
      </div>
      <div class="package">
        <div class="version">v{{ APP_VERSION }}</div>
        <div class="auther">Author: {{ ABOUT_AUTHOR }}</div>
      </div>
      <section-intro class="intro" :title="t('aboutPage.desc1')" centered />
    </div>
    <div class="desc app-card">{{ t('aboutPage.desc2') }}</div>
    <div class="desc app-card">{{ t('aboutPage.desc3') }}</div>
  </section>
</template>

<script setup>
import { ABOUT_AUTHOR } from '@/constants/about';
import { APP_VERSION } from '@/constants/app';
import SectionIntro from '@/components/SectionIntro.vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style lang="scss">
.my {
  min-height: 100%;
  padding: 14px var(--app-page-padding) calc(var(--app-tabbar-height) + 18px);

  .hero {
    padding: 18px 16px 20px;
    text-align: center;
  }

  .logo {
    display: flex;
    justify-content: center;

    img {
      width: min(42vw, 180px);
    }
  }

  .package {
    margin-top: 12px;
    color: var(--app-text-muted);
    line-height: 1.6;
  }

  .version {
    color: var(--app-text-strong);
    font-size: 18px;
    font-weight: 800;
  }

  .auther {
    margin-top: 4px;
    font-size: 13px;
    letter-spacing: 0.04em;
  }

  .intro {
    margin-top: 18px;
  }

  .desc {
    margin-top: 12px;
    padding: 18px 16px;
    line-height: 1.8;
    font-size: 14px;
    color: var(--app-text-muted);
  }
}
</style>
