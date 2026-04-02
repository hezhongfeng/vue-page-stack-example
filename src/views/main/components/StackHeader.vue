<template>
  <header class="stack-header">
    <button class="h-left" type="button" aria-label="Go back" @click="onBack">
      <van-icon aria-hidden="true" size="20" name="arrow-left" />
    </button>
    <h1>{{ title }}</h1>
    <button class="h-right" type="button" aria-label="Go forward" @click="onForward">
      <van-icon aria-hidden="true" size="20" name="arrow" />
    </button>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

defineProps({
  title: {
    type: String,
    default: '',
    required: false
  }
});

const emit = defineEmits(['back', 'forward']);

const onBack = () => {
  router.back();
  emit('back');
};

const onForward = () => {
  router.forward();
  emit('forward');
};
</script>

<style lang="scss">
.stack-header {
  height: var(--app-header-height);
  line-height: var(--app-header-height);
  width: 100%;
  text-align: center;
  background: rgba(255, 253, 248, 0.84);
  border-bottom: var(--app-border-color) 1px solid;
  position: fixed;
  top: 0;
  backdrop-filter: blur(20px);
  z-index: 10;

  > h1 {
    font-size: 18px;
    color: var(--app-text-strong);
    margin: 0;
    font-weight: 800;
    letter-spacing: 0.01em;
  }

  > .h-left {
    position: absolute;
    top: 0;
    left: 0;
    height: var(--app-header-height);
    min-width: 52px;
    font-size: 16px;
    padding: 0 12px;
    color: var(--app-text-strong);
    border: 0;
    background: transparent;
  }

  > .h-right {
    position: absolute;
    top: 0;
    right: 0;
    height: var(--app-header-height);
    min-width: 52px;
    font-size: 16px;
    padding: 0 12px;
    color: var(--app-text-strong);
    border: 0;
    background: transparent;
  }
}
</style>
