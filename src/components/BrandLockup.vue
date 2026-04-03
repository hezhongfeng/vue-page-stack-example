<template>
  <div class="brand-lockup">
    <div class="mark">
      <img src="@/assets/stack.svg" alt="vue-page-stack logo" />
    </div>
    <div v-if="eyebrow" class="eyebrow">{{ eyebrow }}</div>
    <div class="title">{{ title }}</div>
    <div v-if="description" class="description">{{ description }}</div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Vue Page Stack'
  },
  eyebrow: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  }
});
</script>

<style lang="scss">
.brand-lockup {
  text-align: center;

  .mark {
    display: flex;
    justify-content: center;

    img {
      width: min(52vw, 220px);
    }
  }

  .eyebrow {
    margin-top: 8px;
    color: var(--app-text-muted);
    font-size: 12px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .title {
    margin-top: 12px;
    color: var(--app-text-strong);
    font-size: clamp(32px, 10vw, 52px);
    font-weight: 800;
    line-height: 1.02;
    text-wrap: balance;
  }

  .description {
    margin-top: 10px;
    color: var(--app-text-muted);
    font-size: 14px;
    line-height: 1.7;
    text-wrap: balance;
  }
}
</style>
