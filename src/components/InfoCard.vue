<template>
  <div class="info-card app-card" :data-testid="testId || null">
    <div class="label">{{ label }}</div>
    <div class="value" :class="{ 'is-multiline': multiline }">{{ value }}</div>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: ''
  },
  value: {
    type: [String, Number],
    default: ''
  },
  multiline: {
    type: Boolean,
    default: false
  },
  testId: {
    type: String,
    default: ''
  }
});
</script>

<style lang="scss">
.info-card {
  min-height: 88px;
  padding: 14px;

  .label {
    font-size: 12px;
    color: var(--app-text-muted);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .value {
    margin-top: 10px;
    font-size: 18px;
    font-weight: 600;
    color: var(--app-text-strong);
    word-break: break-word;
  }

  .value.is-multiline {
    font-size: 14px;
    line-height: 1.6;
    font-weight: 500;
  }
}
</style>
