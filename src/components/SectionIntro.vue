<template>
  <div class="section-intro" :class="{ 'is-centered': centered }">
    <div v-if="kicker" class="kicker">{{ kicker }}</div>
    <div class="title">{{ title }}</div>
    <div v-if="copy" class="copy">{{ copy }}</div>
  </div>
</template>

<script setup>
defineProps({
  kicker: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  copy: {
    type: String,
    default: ''
  },
  centered: {
    type: Boolean,
    default: false
  }
});
</script>

<style lang="scss">
.section-intro {
  color: var(--app-text-default);

  .kicker {
    font-size: 11px;
    color: var(--app-primary-strong);
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .title {
    margin-top: 6px;
    color: var(--app-text-strong);
    font-size: 20px;
    font-weight: 800;
    line-height: 1.18;
    text-wrap: balance;
  }

  .copy {
    margin-top: 6px;
    color: var(--app-text-muted);
    font-size: 13px;
    line-height: 1.6;
    text-wrap: balance;
  }
}

.section-intro.is-centered {
  text-align: center;
}
</style>
