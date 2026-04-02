<script setup>
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const props = defineProps({
  index: {
    type: Number
  },
  item: {
    type: Object,
    default() {
      return {};
    }
  }
});

const emit = defineEmits(['click']);
const { t } = useI18n();

const isAnimationend = ref(false);

const message = computed(() => {
  if (props.item.messageKey) {
    return t(props.item.messageKey);
  }

  return props.item.message || String(props.index);
});

const styleObject = computed(() => {
  return {
    'background-color': props.item.background || '',
    animation: isAnimationend.value ? 'none' : 'show ' + ((props.index + 1) * 0.2 + 0.1) + 's 1'
  };
});

const onClick = () => {
  emit('click');
};

const animationend = () => {
  isAnimationend.value = true;
};
</script>

<template>
  <div class="main-item" :style="styleObject" @click="onClick" @animationend="animationend">
    <div class="content">
      <div class="badge">{{ props.index + 1 }}</div>
      <div class="message-wrap">{{ message }}</div>
    </div>
  </div>
</template>

<style lang="scss">
.main-item {
  height: 34vw;
  min-height: 136px;
  margin: 0 var(--app-page-padding) 10px;
  border-radius: 22px;
  box-shadow: var(--app-card-shadow);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.32);

  .content {
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 12px;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.04)),
      linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 28%);

    .badge {
      position: absolute;
      top: 12px;
      left: 12px;
      min-width: 30px;
      height: 30px;
      padding: 0 10px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.4);
      color: rgba(22, 50, 43, 0.88);
      font-size: 12px;
      font-weight: 800;
      line-height: 30px;
      text-align: center;
      backdrop-filter: blur(8px);
    }

    .message-wrap {
      max-width: 100%;
      line-height: 1.5;
      padding: 18px 20px 0;
      font-size: 17px;
      font-weight: 650;
      text-align: center;
      color: rgba(22, 50, 43, 0.92);
      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.28);
    }
  }
}
</style>
