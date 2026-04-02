<template>
  <header class="stack-header">
    <div class="h-left">
      <van-icon @click="onBack" size="20" name="arrow-left" />
    </div>
    <h1>{{ title }}</h1>
    <div class="h-right">
      <van-icon @click="onForward" size="20" name="arrow" />
    </div>
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
  line-height: 44px;
  width: 100%;
  text-align: center;
  background-color: #fff;
  border-bottom: var(--app-border-color) 1px solid;
  position: fixed;
  top: 0;

  > h1 {
    font-size: 20px;
    color: var(--app-text-strong);
    margin: 0;
    font-weight: 400;
  }

  > .h-left {
    position: absolute;
    top: 0;
    left: 0;
    height: 44px;
    font-size: 16px;
    padding-left: 10px;
    color: var(--app-text-strong);
  }

  > .h-right {
    position: absolute;
    top: 0;
    right: 0;
    height: 44px;
    font-size: 16px;
    padding-right: 10px;
    color: var(--app-text-strong);
  }
}
</style>
