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
