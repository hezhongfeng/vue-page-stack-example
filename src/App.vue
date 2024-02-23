<template>
  <router-view v-slot="{ Component }">
    <vue-page-stack>
      <transition :name="transitionName">
        <component :is="Component" class="router-view-c"></component>
      </transition>
    </vue-page-stack>
  </router-view>
</template>

<script setup>
import { ref } from 'vue';

const transitionName = ref('forward');
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
  transition: opacity 0.5s, transform 0.5s;
  width: 100%;
}

// .forward-enter-active,
// .forward-leave-active {
//   transition: all 0.5s ease-out;
// }

.forward-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.forward-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

// .forward-enter,
// .back-leave-active {
//   opacity: 5;
//   transform: translateX(100%);
// }

// .forward-leave-active,
// .back-enter {
//   opacity: 5;
//   transform: translateX(-100%);
// }
</style>
