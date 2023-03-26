<script setup>
import { onMounted, shallowRef } from "vue"
const dynamicComponent = shallowRef()
onMounted(() => {
  import('./custom-map.vue').then(module => {
    dynamicComponent.value = module.default
  })
})
</script>

# 自定义组件(示例)
###### 当你需要基于 Vue3-Amap 开发更多自定义组件的时候，你可以通过hook `useParent` 的方法，并将你的组件嵌套在 `ElAmap` 组件内，就可以通过parent.getInstance() 访问到地图所关联的AMap.Map实例。

------



###### 这里是一个基本的例子，例中我们调用了map.setFitView和map.setCenter方法，实现了 UI 与地图的简单联合交互。

<ClientOnly>
  <component :is="dynamicComponent" />
</ClientOnly>

```vue
<template>
  <div class="h-700px w-900px">
    <ElAmap>
      <my-custom-map />
    </ElAmap>
  </div>
</template>

<script setup lang="ts">
import { ElAmap } from "@dabu/vue3-amap";
import myCustomMap from "./my-custom-map.vue";
</script>
```
<details>

<summary>查看自定义组件代码</summary>

<<< @/examples/custom-map/my-custom-map.vue

</details>


