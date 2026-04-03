<template>
  <main class="index">
    <section class="hero app-card">
      <div class="app-chip">{{ t('ui.mobileOnly') }}</div>
      <div class="logo">
        <img src="@/assets/stack.svg" alt="vue-page-stack logo" />
      </div>
      <div class="content">
        <h1 class="app-section-title">Vue Page Stack</h1>
        <p class="explain app-section-copy">{{ t('explain') }}</p>
      </div>
      <div class="meta">
        <div class="meta-item">
          <span class="meta-label">{{ t('ui.version') }}</span>
          <span class="meta-value">v{{ APP_VERSION }}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">{{ t('language') }}</span>
          <span class="meta-value">{{ language }}</span>
        </div>
      </div>
      <div class="form">
        <van-button class="hero-button" type="primary" @click="onExperience" block>{{ t('quickStart') }}</van-button>
      </div>
    </section>
    <section class="change-language app-card">
      <div class="panel-head">
        <p class="panel-title">{{ t('language') }}</p>
        <p class="panel-copy">{{ t('ui.languageHint') }}</p>
      </div>
      <van-field
        v-model="language"
        is-link
        readonly
        name="picker"
        :label="t('language')"
        :aria-label="t('language')"
        @click="showPicker = true"
      />
      <van-popup v-model:show="showPicker" position="bottom">
        <van-picker
          :columns="columns"
          @confirm="onConfirm"
          @cancel="showPicker = false"
          :confirm-button-text="t('confirm-button-text')"
          :cancel-button-text="t('cancel-button-text')"
        />
      </van-popup>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { i18n, getLocale, setI18nLanguage } from '../../i18n';
import { APP_NAME, APP_VERSION } from '@/constants/app';
import { LANGUAGE_OPTIONS, getLanguageLabel } from '@/constants/languages';
import { ROUTE_PATHS } from '@/constants/routes';
import { applyRouteTitle } from '@/router/title';
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
  applyRouteTitle(router.currentRoute.value, i18n, APP_NAME);
};

const onExperience = () => {
  router.push(ROUTE_PATHS.home);
};
</script>

<style lang="scss">
.index {
  min-height: 100%;
  padding: 20px var(--app-page-padding) 24px;
  background:
    radial-gradient(circle at top left, rgba(127, 166, 175, 0.22), transparent 34%),
    radial-gradient(circle at top right, rgba(47, 95, 103, 0.12), transparent 28%),
    var(--app-gradient-hero);

  .hero {
    padding: 22px 18px 20px;
  }

  .logo {
    display: flex;
    justify-content: center;
    padding-top: 10px;

    img {
      width: min(58vw, 260px);
    }
  }

  .content {
    margin-top: 10px;
    text-align: center;
  }

  .explain {
    margin-top: 12px;
  }

  .meta {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
    margin-top: 22px;
  }

  .meta-item {
    padding: 14px 12px;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.72);
  }

  .meta-label {
    display: block;
    font-size: 11px;
    color: var(--app-text-muted);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .meta-value {
    display: block;
    margin-top: 8px;
    color: var(--app-text-strong);
    font-size: 15px;
    font-weight: 700;
  }

  .form {
    margin-top: 18px;
  }

  .hero-button {
    background: linear-gradient(135deg, #5e8690, #426a73) !important;
    border-color: #426a73 !important;
    box-shadow: 0 12px 20px rgba(66, 106, 115, 0.18) !important;
  }

  .change-language {
    margin-top: 16px;
    padding: 18px 16px;
  }

  .panel-head {
    margin-bottom: 12px;
  }

  .panel-title {
    margin: 0;
    color: var(--app-text-strong);
    font-size: 16px;
    font-weight: 700;
  }

  .panel-copy {
    margin: 6px 0 0;
    color: var(--app-text-muted);
    font-size: 13px;
    line-height: 1.6;
  }
}
</style>
