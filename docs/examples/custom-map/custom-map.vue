<template>
  <div class="h-300px w-700px">
    <ElAmap>
      <my-map />
    </ElAmap>
  </div>
</template>

<script setup lang="ts">
import { ElAmap } from "@dabu/vue3-amap";
import myMap from "./children.vue";
</script>
