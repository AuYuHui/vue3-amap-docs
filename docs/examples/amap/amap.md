<script setup>
import amap from './amap.vue'
</script>

# ElAmap(示例)

<ClientOnly>
  <amap />
</ClientOnly>

<details>

<summary>查看代码</summary>

<<< @/examples/amap/amap.vue

</details>


### 参数

| **参数** | **说明**       | **类型** | **默认值** |
| ------------ | -------------- | -------- | -------- |
| center     | 初始中心经纬度  | `Array`  | [114.05834626586915, 22.546789983033168] |
| zoom    | 地图显示的缩放级别，可以设置为浮点数；若center与level未赋值，地图初始化默认显示用户所在城市范围。 | `Number` |  |
| zooms     | 图显示的缩放级别范围, 取值范围 [2 ~ 30] | `Array` | [2, 20] |
