<template>
  <div>
    <div class="flex items-center mb-7">
      <div class="flex items-center w-250px">
        text：
        <n-input v-model:value="textValue" type="text" />
      </div>
    </div>
    <div class="h-500px w-800px">
      <ElAmap ref="AmapRef" :center="[116.473195, 39.973253]" :zoom="13">
        <ElMarkerText
          v-for="text in textList"
          :key="text.anchor"
          v-model:text="textValue"
          v-bind="text"
        />
      </ElAmap>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { ElAmap, ElAmapExpose, ElMarkerText } from "@dabu/vue3-amap";
import type { ElMarkerTextProps } from "@dabu/vue3-amap";
import { useDark } from "@pureadmin/utils";
const { isDark } = useDark();
const AmapRef = ref<ElAmapExpose | null>(null);
const textValue = ref('文本标记内容')
// marker
const textList = ref<Array<ElMarkerTextProps>>([
  {
    anchor: "center", // 设置文本标记锚点
    draggable: true,
    cursor: "pointer",
    angle: 10,
    position: [116.493195, 39.993253],
    style: {
      padding: ".75rem 1.25rem",
      "margin-bottom": "1rem",
      "border-radius": ".25rem",
      "background-color": "white",
      width: "15rem",
      "border-width": 0,
      "box-shadow": "0 2px 6px 0 rgba(114, 124, 245, .5)",
      "text-align": "center",
      "font-size": "20px",
      color: "blue",
    },
  },
]);

let map: AMap.Map = null;
onMounted(() => {
  map = AmapRef.value?.getInstance();
  map.setMapStyle(isDark.value ? "amap://styles/dark" : "amap://styles/normal");
});

watch(
  () => isDark.value,
  (val) => {
    if (map) {
      map.setMapStyle(val ? "amap://styles/dark" : "amap://styles/normal");
    }
  }
);
</script>
