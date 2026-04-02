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
      <div class="message-wrap">{{ message }}</div>
    </div>
  </div>
</template>

<style lang="scss">
.main-item {
  height: 40vw;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4);

  .content {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .message-wrap {
      line-height: 1.5;
      padding: 0 18px;
      font-size: 16px;
      text-align: center;
      color: #333;
    }
  }
}
</style>
