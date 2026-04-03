<template>
  <div class="login">
    <div class="form">
      <brand-lockup class="logo" :title="t('loginHero.title')" :description="t('loginHero.description')" />
      <van-form @submit="onLogin">
        <van-cell-group inset>
          <van-field
            v-model="userName"
            name="username"
            :label="t('loginForm.usernameLabel')"
            :aria-label="t('loginForm.usernameLabel')"
            autocomplete="username"
            spellcheck="false"
            :placeholder="t('placeholder.username') + '…'"
          />
          <van-field
            v-model="password"
            name="password"
            type="password"
            :label="t('loginForm.passwordLabel')"
            :aria-label="t('loginForm.passwordLabel')"
            autocomplete="current-password"
            :placeholder="t('placeholder.password') + '…'"
          />
        </van-cell-group>
        <p class="form-tip">{{ t('loginForm.tip') }}</p>
        <div class="action-wrap">
          <van-button
            :loading="isSubmitting"
            :disabled="isSubmitDisabled"
            native-type="submit"
            type="primary"
            block
          >
            {{ t('login') }}
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { showFailToast, showSuccessToast } from 'vant';
import BrandLockup from '@/components/BrandLockup.vue';
import { setStoredUsername } from '@/utils/sessionStorage';

const { t } = useI18n();

const userName = ref('');
const password = ref('');
const isSubmitting = ref(false);

const router = useRouter();
const isSubmitDisabled = computed(() => !userName.value.trim() || isSubmitting.value);

const onLogin = async event => {
  event?.preventDefault?.();
  const nextUserName = userName.value.trim();

  if (isSubmitting.value) {
    return;
  }

  if (!nextUserName) {
    showFailToast(t('feedback.usernameRequired'));
    return;
  }

  isSubmitting.value = true;

  try {
    setStoredUsername(nextUserName);
    showSuccessToast(t('feedback.loginSaved'));
    await router.back();
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style lang="scss">
.login {
  min-height: 100%;
  padding: 24px var(--app-page-padding);
  background:
    radial-gradient(circle at top left, rgba(23, 107, 87, 0.16), transparent 30%),
    radial-gradient(circle at top right, rgba(243, 181, 98, 0.18), transparent 30%),
    var(--app-gradient-hero);

  .form {
    position: relative;
    overflow: hidden;
    padding: 24px 16px 18px;
    border-radius: 28px;
    background: rgba(255, 253, 248, 0.84);
    box-shadow: var(--app-card-shadow-strong);
    backdrop-filter: blur(20px);

    .logo {
      margin-bottom: 18px;
    }

    .form-tip {
      margin: 14px 4px 0;
      color: var(--app-text-muted);
      font-size: 12px;
      line-height: 1.7;
    }

    .action-wrap {
      margin: 18px 0 0;
    }
  }
}
</style>
