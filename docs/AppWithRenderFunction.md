# AppWithRenderFunction

这个文档保留了项目里曾经使用过的一种应用壳层写法，方便后续对比 `render function` 和 `template` 两种实现方式。

当前项目运行时使用的是 [`src/App.vue`](/Users/hezf/github/vue-page-stack-example/src/App.vue)，这个文档仅作为历史实现记录，不参与实际构建。

## 说明

- 这是一个基于 `render function` 的 `RouterView + Transition + VuePageStack` 组合方案
- 当前仓库已经统一保留 `template` 版本的 `App.vue`
- 如果只是维护项目，优先看 `src/App.vue`
- 如果是研究 `vue-page-stack` 的不同接入方式，可以参考下面这份实现

## 历史实现

```vue
<script>
import { ref, h, Transition } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import { VuePageStack } from 'vue-page-stack';

export default {
  setup() {
    const transitionName = ref('forward');
    const route = useRoute();

    return () =>
      h(RouterView, { class: 'router-view-c' }, ({ Component }) =>
        h(
          Transition,
          {
            name: transitionName.value,
            key: route.fullPath
          },
          () => h(VuePageStack, Component)
        )
      );
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
```
