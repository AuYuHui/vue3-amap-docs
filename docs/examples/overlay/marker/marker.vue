<template>
  <div>
    <div class="h-500px w-800px">
      <ElAmap ref="AmapRef" :center="[116.473195, 39.973253]" :zoom="13">
        <ElMarker
          v-for="marker in markerList"
          :key="marker.id"
          :label="marker.label"
          :position="marker.position"
          :icon="marker.icon"
          :anchor="marker.anchor"
          :draggable="marker.draggable"
          :content="marker.content"
          :cursor="marker.cursor"
        />
      </ElAmap>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElAmap, ElAmapExpose, ElMarker } from "@dabu/vue3-amap";
import type { ElMarkerProps } from "@dabu/vue3-amap";
const AmapRef = ref<ElAmapExpose | null>(null);

const markerIcon = new AMap.Icon({
  size: new AMap.Size(46, 28),
  image: "https://a.amap.com/jsapi_demos/static/demo-center/marker/icon.png",
  imageSize: new AMap.Size(46, 28),
});

// marker
const markerList = ref<Array<ElMarkerProps>>([
  {
    position: [116.493195, 39.993253],
    label: {
      content: "测试点一",
      offset: [0, 0],
      direction: "right",
    },
    id: 1,
  },
  {
    position: [116.473195, 39.993253],
    label: {
      content: "我是可以拖拽的",
      offset: [0, 0],
      direction: "top",
    },
    draggable: true,
    cursor: "move",
    id: 2,
  },
  {
    position: [116.453195, 39.993253],
    label: {
      offset: [0, 0],
      direction: "bottom",
      content: "<div class='labelContent'>anchor:bottom-center</div>",
    },
    cursor: "wait",
    icon: markerIcon,
    anchor: "bottom-center",
    id: 3,
  },
  {
    position: [116.473195, 39.973253],
    label: {
      offset: [0, 0],
      direction: "bottom",
      content: "使用自定义Icon的Marker",
    },
    icon: "https://a.amap.com/jsapi_demos/static/demo-center/icons/dir-via-marker.png",
    anchor: "bottom-center",
    id: 4,
  },
]);
</script>
