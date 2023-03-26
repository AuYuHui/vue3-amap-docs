<script setup>
import { onMounted, shallowRef } from "vue"
const dynamicComponent = shallowRef()
onMounted(() => {
  import('./marker.vue').then(module => {
    dynamicComponent.value = module.default
  })
})
</script>

# ElMarker(示例)

<ClientOnly>
  <component :is="dynamicComponent" />
</ClientOnly>

<details>

<summary>查看代码</summary>

<<< @/examples/overlay/marker/marker.vue

</details>



### 类型定义

组件导出以下类型定义：

```ts
import type { ElMarkerProps } from "@dabu/vue3-amap";
```





### Props

| **参数** | **说明**       | **类型** | **默认值** |
| ------------ | -------------- | -------- | -------- |
| visible | 点标记是否可见 | Boolean | true |
| position | 点标记在地图上显示的位置 | Array | - |
| icon | 在点标记中显示的图标。可以传一个图标地址，也可以传Icon对象。有合法的content内容设置时，此属性无效 | AMap.Icon \| String | - |
| title | 鼠标滑过点标记时的文字提示。不设置则鼠标滑过点标无文字提示。 | String | - |
| label | 添加文本标注 | LabelOptions | - |
| clickable | 点标记是否可点击 | Boolean | true |
| draggable | 设置点标记是否可拖拽移动 | Boolean | false |
| cursor | 指定鼠标悬停时的值 | String | pointer |
| topWhenClick | 鼠标点击时marker是否置顶 | Boolean | false |
| bubble | 事件是否冒泡 | Boolean | false |
| content | 点标记显示内容。可以是HTML要素字符串或者HTML DOM对象。content有效时，icon属性将被覆盖 | String | - |
| zIndex | 点标记的叠加顺序。地图上存在多个点标记叠加时，通过该属性使级别较高的点标记在上层显示 | Number | 12 |
| offset | 点标记显示位置偏移量 | Array | [0,0] |
| angle | 点标记的旋转角度，，广泛用于改变车辆行驶方向 | Number | 0 |
| zooms | 点标记显示的层级范围，超过范围不显示 | Array | [2, 20] |
| height | 设置Marker点是否离地绘制，默认值为0，等于0时贴地绘制。大于0时离地绘制 | Number | 0 |
| extData | 用户自定义属性 ，支持JavaScript API任意数据类型 | Object | - |
| anchor | 设置点标记锚点 | String | top-left |




### Events

| 事件名     | 说明                                                         | 回调参数         |
| ---------- | ------------------------------------------------------------ | ---------------- |
| click      | 鼠标左键单击事件                                             | event: MapsEvent |
| dblclick   | 鼠标左键双击事件                                             | event: MapsEvent |
| mousemove  | 鼠标移动事件                                                 | event: MapsEvent |
| mouseover  | 鼠标移近点标记时触发事件                                     | event: MapsEvent |
| mouseout   | 鼠标移出点标记时触发事件                                     | event: MapsEvent |
| mouseup    | 鼠标在点标记上按下后抬起时触发事件                           | event: MapsEvent |
| mousedown  | 鼠标在点标记上按下时触发事件                                 | event: MapsEvent |
| rightclick | 鼠标右键单击事件                                             | event: MapsEvent |
| dragstart  | 开始拖拽点标记时触发事件                                     | event: MapsEvent |
| dragging   | 鼠标拖拽移动点标记时触发事件                                 | event: MapsEvent |
| dragend    | 点标记拖拽移动结束触发事件                                   | event: MapsEvent |
| moving     | 点标记在执行moveTo，moveAlong动画时触发事件，Object对象的格式是{passedPath:Array.}。其中passedPath为对象在moveAlong或者moveTo过程中走过的路径。 | event: MapsEvent |
| moveend    | 点标记执行moveTo动画结束时触发事件，也可以由moveAlong方法触发 | event: MapsEvent |
| movealong  | 点标记执行moveAlong动画一次后触发事件                        | event: MapsEvent |
| touchstart | 触摸开始时触发事件，仅适用移动设备                           | event: MapsEvent |
| touchmove  | 拖拽地图过程中触发，仅适用移动设备                           | event: MapsEvent |
| touchend   | 触摸结束时触发事件，仅适用移动设备                           | event: MapsEvent |

