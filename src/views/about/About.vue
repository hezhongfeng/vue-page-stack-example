<template>
  <div class="my">
    <div class="logo">
      <img src="@/assets/stack.svg" />
      <div class="package">
        <div class="version">v3.1.5</div>
        <div class="auther">Author: hezf</div>
      </div>
    </div>
    <div class="desc">{{ t('aboutPage.desc1') }}</div>
    <div class="desc">{{ t('aboutPage.desc2') }}</div>
    <div class="desc">{{ t('aboutPage.desc3') }}</div>
  </div>
</template>

<script setup>
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
      color: #8799a3;
      padding-top: 3vw;
    }
    img {
      padding-top: 10vw;
      width: 50vw;
    }
  }
  .desc {
    margin: 10px 20px 10px 20px;
    line-height: 1.8;
    font-size: 14px;
    color: #8799a3;
  }
}
</style>
