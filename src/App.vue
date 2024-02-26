<template>
  <router-view v-slot="{ Component }">
    <vue-page-stack @back="onBack" @forward="onForward">
      <transition :name="transitionName">
        <component :is="Component" :key="$route.fullPath" class="router-view-c"></component>
      </transition>
    </vue-page-stack>
  </router-view>
</template>

<script setup>
import { ref } from 'vue';

const transitionName = ref('forward');

const onBack = () => {
  transitionName.value = 'back';
};

const onForward = () => {
  transitionName.value = 'forward';
};
</script>

<style lang="scss">
:root {
  --van-primary-color: #41b883;
  --van-font-size-md: 16px;
}
#app {
  position: relative;
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

.router-view-c {
  position: absolute;
  transition: opacity 0.4s, transform 0.4s;
  width: 100%;
}

.forward-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.back-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}

.forward-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.back-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
