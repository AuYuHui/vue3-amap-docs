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

<ClientOnly>
  <component :is="dynamicComponent" />
</ClientOnly>

<details>

<summary>查看代码</summary>

<<< @/examples/custom-map/custom-map.vue

</details>


