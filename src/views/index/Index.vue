<template>
  <div class="index">
    <div class="desc">
      <div class="logo">
        <img src="@/assets/stack.svg" />
      </div>
    </div>
    <div class="content">
      <p class="explain">{{ t('explain') }}</p>
      <p class="version">v{{ APP_VERSION }}</p>
    </div>
    <div class="form">
      <van-button type="primary" @click="onExperience" block>{{ t('quickStart') }}</van-button>
    </div>
    <div class="change-language">
      <van-field v-model="language" is-link readonly name="picker" :label="t('language')" @click="showPicker = true" />
      <van-popup v-model:show="showPicker" position="bottom">
        <van-picker
          :columns="columns"
          @confirm="onConfirm"
          @cancel="showPicker = false"
          :confirm-button-text="t('confirm-button-text')"
          :cancel-button-text="t('cancel-button-text')"
        />
      </van-popup>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { i18n, getLocale, setI18nLanguage } from '../../i18n';
import { APP_VERSION } from '@/constants/app';
import { LANGUAGE_OPTIONS, getLanguageLabel } from '@/constants/languages';
import { ROUTE_PATHS } from '@/constants/routes';
import { useRouter } from 'vue-router';

const router = useRouter();

const { t } = useI18n();

const language = ref(getLanguageLabel(getLocale(i18n)));

const showPicker = ref(false);

const columns = LANGUAGE_OPTIONS;

const onConfirm = ({ selectedOptions }) => {
  language.value = selectedOptions[0]?.text;
  showPicker.value = false;
  setI18nLanguage(i18n, selectedOptions[0]?.value);
  document.title = t('route.index');
};

const onExperience = () => {
  router.push(ROUTE_PATHS.home);
};
</script>

<style lang="scss">
.index {
  height: 100%;
  .desc {
    position: relative;
    padding-top: 10vw;
    .logo {
      display: flex;
      justify-content: center;
      img {
        width: 50vw;
      }
    }
  }
  .content {
    width: 100%;
    color: #8799a3;
    font-size: 18px;
    .explain {
      width: 100%;
      padding: 0 15px;
      text-align: center;
      font-size: 14px;
      line-height: 2;
    }
    .version {
      margin-top: 15px;
      text-align: center;
    }
  }
  .form {
    margin: 10px;
    padding-top: 80px;
  }
  .change-language {
    padding: 10px;
    position: fixed;
    bottom: 10px;
    left: 0;
    right: 0;
    .language-title {
      margin-bottom: 10px;
    }
  }
}
</style>
