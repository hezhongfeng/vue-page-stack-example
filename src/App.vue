<template>
  <router-view v-slot="{ Component }">
    <vue-page-stack>
      <component :is="Component" :key="$route.fullPath"></component>
    </vue-page-stack>
  </router-view>
</template>

<script setup>
import { watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

watch(route, to => {
  if (to.params['stack-key-dir'] === 'forward') {
    console.log('forward');
  } else {
    console.log('back');
  }
});
</script>

<style lang="scss">
:root {
  --van-primary-color: #41b883;
  --van-font-size-md: 16px;
}
#app {
  height: 100%;
  background-color: rgb(247, 247, 250);
  @keyframes show {
    0% {
      transform: translateY(100px);
    }

    60% {
      transform: translateY(-80upx);
    }

    100% {
      transform: translateY(0px);
    }
  }
}
</style>
