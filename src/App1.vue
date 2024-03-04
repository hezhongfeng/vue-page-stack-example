<script>
import { ref, h, Transition } from 'vue';
import { RouterView } from 'vue-router';
// import { VuePageStackFunction } from 'vue-page-stack';
import { VuePageStack } from '../../vue-page-stack/dist/vue-page-stack.es';

// const transitionName = ref('forward');

// const onBack = () => {
//   transitionName.value = 'back';
// };

// const onForward = () => {
//   transitionName.value = 'forward';
// };

export default {
  setup() {
    const transitionName = ref('forward');
    // const count = ref(1);
    // const onBack = () => {
    //   // console.log('back');
    //   count.value = count.value + 1;
    //   console.log('back' + count.value);
    //   // transitionName.value = 'back';
    // };

    // const onForward = () => {
    //   transitionName.value = 'forward';
    // };
    // return () => {
    //   return [h('main', null, [h(RouterView, { onClick: onBack }, ({ Component }) => Component)])];
    // };
    return () => {
      return h(RouterView, { class: 'router-view-c' }, ({ Component }) =>
        h(
          Transition,
          {
            name: transitionName.value
          },
          () => h(VuePageStack, {}, Component)
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
