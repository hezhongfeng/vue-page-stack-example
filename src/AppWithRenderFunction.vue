<script>
import { ref, h, Transition } from 'vue';
import { RouterView } from 'vue-router';
import { VuePageStack } from 'vue-page-stack';
// import { VuePageStack } from '../../vue-page-stack/dist/vue-page-stack.es';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const transitionName = ref('forward');
    const route = useRoute();
    return () => {
      return h(RouterView, { class: 'router-view-c' }, ({ Component }) =>
        h(
          Transition,
          {
            name: transitionName.value,
            key: route.fullPath
          },
          () => h(VuePageStack, Component)
        )
      );
    };
  }
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
