<script setup>
import { onMounted, shallowRef } from "vue"
const dynamicComponent = shallowRef()
onMounted(() => {
  import('./text.vue').then(module => {
    dynamicComponent.value = module.default
  })
})
</script>

# ElMarkerText(示例)

::: tip
纯文本标记。文本标记的展示内容为纯文本。继承自 Marker 类，具有 Marker 的大部分属性、方法和事件。
 Props 和 Events 只展示扩展属性
:::

<ClientOnly>
  <component :is="dynamicComponent" />
</ClientOnly>

<details>

<summary>查看代码</summary>

<<< @/examples/overlay/text/text.vue

</details>



### 类型定义

组件导出以下类型定义：

```ts
import type { ElMarkerTextProps } from "@dabu/vue3-amap";
```





### Props

| **参数** | **说明**       | **类型** | **默认值** |
| ------------ | -------------- | -------- | -------- |
| text | 标记显示的文本内容 | String | - |
| style | 设置文本样式，同css样式表，如:{'background-color':'red'} | Object | - |

