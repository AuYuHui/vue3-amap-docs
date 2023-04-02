<template>
  <div>
    <div class="flex items-center mb-7">
      <div class="flex items-center w-250px">
        center：
        <n-input :value="circle.center.toString()" read-only type="text" />
      </div>
      <div class="flex items-center w-200px ml-5">
        radius：
        <n-slider v-model:value="circle.radius" :step="1" :min="10" />
      </div>
    </div>
    <div class="h-500px w-800px">
      <ElAmap ref="AmapRef" :center="[116.473195, 39.973253]" :zoom="13">
        <ElMarkerCircle v-model:center="circle.center" v-bind="circle"  />
      </ElAmap>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { ElAmap, ElAmapExpose, ElMarkerCircle } from "@dabu/vue3-amap";
import type { ElMarkerCircleProps } from "@dabu/vue3-amap";
const AmapRef = ref<ElAmapExpose | null>(null);

// marker
const circle = reactive<ElMarkerCircleProps>({
  center: [116.473571, 39.993083],
  radius: 20,
  fillColor: "#409EFF",
  strokeColor: "#000A58",
  fillOpacity: 0.5,
  strokeWeight: 1,
  draggable: true
});
</script>
