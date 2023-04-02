<script setup>
import { onMounted, shallowRef } from "vue"
const dynamicComponent = shallowRef()
onMounted(() => {
  import('./marker-circle.vue').then(module => {
    dynamicComponent.value = module.default
  })
})
</script>

# ElMarkerCircle(示例)


<ClientOnly>
  <component :is="dynamicComponent" />
</ClientOnly>

<details>

<summary>查看代码</summary>

<<< @/examples/overlay/marker-circle/marker-circle.vue

</details>



### 类型定义

组件导出以下类型定义：

```ts
import type { ElMarkerCircleProps, ElMarkerCircleExpose } from "@dabu/vue3-amap";
```





### Props

| **参数** | **说明**       | **类型** | **默认值** |
| ------------ | -------------- | -------- | -------- |
| center | 圆心位置 | Array | - |
| zIndex | 多边形覆盖物的叠加顺序。地图上存在多个多边形覆盖物叠加时，通过该属性使级别较高的多边形覆盖物在上层显示 | Number | 10 |
| bubble | 是否将覆盖物的鼠标或touch等事件冒泡到地图上 | Boolean | false |
| cursor | 指定鼠标悬停时的值 | String | pointer |
| radius | 圆半径，单位:px 最大值64 | Number | - |
| strokeColor | 线条颜色，使用16进制颜色代码赋值 | String | \#006600 |
| strokeOpacity | 轮廓线透明度，取值范围[0,1]，0表示完全透明，1表示不透明 | Number | 0.9 |
| strokeWeight | 轮廓线宽度 | Number | - |
| fillColor | 圆形填充颜色,使用16进制颜色代码赋值。 | String | \#006600 |
| fillOpacity | 圆形填充透明度，取值范围[0,1]，0表示完全透明，1表示不透明 | Number | 0.9 |
| draggable | 是否可拖拽移动 | draggable | false |
| extData | 用户自定义属性 | Object | - |





### Events

| 事件名     | 说明                                                         | 回调参数         |
| ---------- | ------------------------------------------------------------ | ---------------- |
| click      | 鼠标左键单击事件                                             | event: MapsEvent |
| dblclick   | 鼠标左键双击事件                                             | event: MapsEvent |
| rightclick | 鼠标右键单击事件                                             | event: MapsEvent |
| mouseover  | 鼠标移近点标记时触发事件                                     | event: MapsEvent |
| mouseout   | 鼠标移出点标记时触发事件                                     | event: MapsEvent |
| mouseup    | 鼠标在点标记上按下后抬起时触发事件                           | event: MapsEvent |
| mousedown  | 鼠标在点标记上按下时触发事件                                 | event: MapsEvent |
| touchstart | 触摸开始时触发事件，仅适用移动设备                           | event: MapsEvent |
| touchmove  | 拖拽地图过程中触发，仅适用移动设备                           | event: MapsEvent |
| touchend   | 触摸结束时触发事件，仅适用移动设备                           | event: MapsEvent |