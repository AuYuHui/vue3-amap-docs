<script setup>
import { onMounted, shallowRef } from "vue"
const dynamicComponent = shallowRef()
onMounted(() => {
  import('./amap.vue').then(module => {
    dynamicComponent.value = module.default
  })
})
</script>

# ElAmap(示例)
::: danger
 父级容器必须设置宽高
:::

<ClientOnly>
  <component :is="dynamicComponent" />
</ClientOnly>

<details>

<summary>查看代码</summary>

<<< @/examples/amap/amap.vue

</details>



### 类型定义

组件导出以下类型定义：

```ts
import type { ElAmapProps, ElAmapExpose } from "@dabu/vue3-amap";
```





### Props

| **参数** | **说明**       | **类型** | **默认值** |
| ------------ | -------------- | -------- | -------- |
| center     | 初始中心经纬度  | Array  | [116.397428, 39.90923] |
| zoom    | 地图显示的缩放级别，可以设置为浮点数；若center与level未赋值，地图初始化默认显示用户所在城市范围。 | Number | 11 |
| rotation | 地图顺时针旋转角度，取值范围 [0-360] | Number | 0 |
| pitch | 俯仰角度，默认 0，最大值根据地图当前 zoom 级别不断增大，2D地图下无效 。 | Number | 0 |
| viewMode | 地图视图模式，默认为‘2D’，可选’3D’，选择‘3D’会显示 3D 地图效果。 | String | 2D |
| terrain | 地图是否展示地形，此属性适用于 3D 地图。默认为值 false 不展示地形，可选 true ，选择 true 会展示地形效果。(注意：此属性适用于 JSAPI v2.1Beta 及以上版本)。 | Boolean | false |
| features | 设置地图上显示的元素种类, 支持'bg'（地图背景）、'point'（POI点）、'road'（道路）、'building'（建筑物） | Array | ['bg', 'point', 'road', 'building'] |
| layers | 地图图层数组，数组可以是图层 中的一个或多个，默认为普通二维地图 | Array | - |
| zooms | 地图显示的缩放级别范围, 默认为 [2, 20] ，取值范围 [2 ~ 30] | Array | [2, 20] |
| dragEnable | 地图是否可通过鼠标拖拽平移, | Boolean | true |
| zoomEnable | 地图是否可缩放 | Boolean | true |
| jogEnable | 地图是否使用缓动效果 | Boolean | true |
| pitchEnable | 是否允许设置俯仰角度, 3D 视图下为 true, 2D 视图下无效。 | Boolean | true |
| rotateEnable | 地图是否可旋转 | Boolean | true |
| animateEnable | 地图平移过程中是否使用动画 | Boolean | true |
| keyboardEnable | 地图是否可通过键盘控制 | Boolean | true |
| doubleClickZoom   | 地图是否可通过双击鼠标放大地图 | Boolean | true |
| scrollWheel       | 地图是否可通过鼠标滚轮缩放浏览 | Boolean | true |
| touchZoom         | 地图在移动终端上是否可通过多点触控缩放浏览地图 | Boolean | true |
| touchZoomCenter   | 当touchZoomCenter=1的时候，手机端双指缩放的以地图中心为中心，否则默认以双指中间点为中心。 | Number | 1 |
| showLabel         | 是否展示地图文字和 POI 信息 | Boolean | true |
| defaultCursor     | 地图默认鼠标样式。参数 defaultCursor 应符合 CSS 的 cursor 属性规范。 | String | default |
| isHotspot         | 是否开启地图热点和标注的 hover 效果。PC端默认是true, 移动端默认是 false。 | Boolean | true |
| mapStyle          | 设置地图的显示样式 | String | - |
| wallColor         | 地图楼块的侧面颜色 | string \| number[] | - |
| roofColor         | 地图楼块的顶面颜色 | string \| number[] | - |
| showBuildingBlock | 是否展示地图 3D 楼块 | Boolean | true |
| showIndoorMap     | 是否自动展示室内地图 | Boolean | false |
| labelRejectMask   | 文字是否拒绝掩模图层进行掩模 | Boolean | false |
| skyColor          | 天空颜色，3D 模式下带有俯仰角时会显示 | string \| number[] | - |
| mask              | 为 Map 实例指定掩模的路径，各图层将只显示路径范围内图像，3D视图下有效 | Array | - |
| WebGLParams       | 额外配置的WebGL参数 | any | - |



### Events

| 事件名       | 说明                                                         | 回调参数         |
| ------------ | ------------------------------------------------------------ | ---------------- |
| resize       | 地图容器尺寸改变事件                                         | event: MapsEvent |
| complete     | 地图资源加载完成后触发事件                                   | event: MapsEvent |
| click        | 鼠标左键单击事件                                             | event: MapsEvent |
| dblclick     | 鼠标左键双击事件                                             | event: MapsEvent |
| mapmove      | 地图平移时触发事件                                           | event: MapsEvent |
| hotspotclick | 鼠标点击热点时触发                                           | event: MapsEvent |
| hotspotover  | 鼠标滑过热点时触发                                           | event: MapsEvent |
| hotspotout   | 鼠标移出热点时触发                                           | event: MapsEvent |
| movestart    | 地图平移开始时触发                                           | event: MapsEvent |
| moveend      | 地图移动结束后触发，包括平移，以及中心点变化的缩放。如地图有拖拽缓动效果，则在缓动结束后触发 | event: MapsEvent |
| zoomchange   | 地图缩放级别更改后触发                                       | event: MapsEvent |
| zoomstart    | 缩放开始时触发                                               | event: MapsEvent |
| zoomend      | 缩放结束时触发                                               | event: MapsEvent |
| rotatechange | 地图旋转 rotation 更改后触发                                 | event: MapsEvent |
| rotatestart  | 地图旋转 rotation 开始时触发                                 | event: MapsEvent |
| rotateend    | 地图旋转 rotation 结束时触发                                 | event: MapsEvent |
| mousemove    | 鼠标在地图上移动时触发                                       | event: MapsEvent |
| mousewheel   | 鼠标滚轮开始缩放地图时触发                                   | event: MapsEvent |
| mouseover    | 鼠标移入地图容器内时触发                                     | event: MapsEvent |
| mouseout     | 鼠标移出地图容器时触发                                       | event: MapsEvent |
| mouseup      | 鼠标在地图上单击抬起时触发                                   | event: MapsEvent |
| mousedown    | 鼠标在地图上单击按下时触发                                   | event: MapsEvent |
| rightclick   | 鼠标右键单击事件                                             | event: MapsEvent |
| dragstart    | 开始拖拽地图时触发                                           | event: MapsEvent |
| dragging     | 拖拽地图过程中触发                                           | event: MapsEvent |
| dragend      | 停止拖拽地图时触发。如地图有拖拽缓动效果，则在拽停止，缓动开始前触发 | event: MapsEvent |
| touchstart   | 触摸开始时触发事件，仅适用移动设备                           | event: MapsEvent |
| touchmove    | 拖拽地图过程中触发，仅适用移动设备                           | event: MapsEvent |
| touchend     | 触摸结束时触发事件，仅适用移动设备                           | event: MapsEvent |

