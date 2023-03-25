<template>
  <div>
    <div class="flex items-center mb-7">
      <div class="flex items-center w-250px">
        center：
        <n-input :value="amapOptions.center?.join(',')" read-only type="text" />
      </div>
      <div class="flex items-center w-200px ml-5">
        zoom：<n-input-number
          v-model:value="amapOptions.zoom"
          readonly
          :show-button="false"
        />
      </div>
    </div>
    <div class="h-300px w-700px">
      <ElAmap
        ref="AmapRef"
        v-model:center="amapOptions.center"
        v-model:zoom="amapOptions.zoom"
      >
        <ElMarker
          :position="[116.473778, 39.990661]"
          :label="{
            content: 'Hello, Vue3-AMap!',
            offset: [0, 0],
            direction: 'bottom',
          }"
        />
      </ElAmap>
    </div>
    <div class="mt-5">
      <n-button @click="handleGetInstance">获取地图实例</n-button>
      <n-button @click="handleDestroy" type="error" class="ml-4"
        >销毁地图</n-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { ElAmap, ElMarker } from "@dabu/vue3-amap";
import type { ElAmapProps, ElAmapExpose } from "@dabu/vue3-amap";
import { useMessage } from "../../components/message";
const { message } = useMessage();
const AmapRef = ref<ElAmapExpose | null>(null);
// 组件参数
const amapOptions = reactive<ElAmapProps>({
  zoom: 10,
  center: [116.397428, 39.90923],
});
// 获取地图实例 按钮点击事件
function handleGetInstance() {
  const map = AmapRef.value?.getInstance();
  message?.info(() => "获取成功，请在控制台查看", {
    closable: true,
    duration: 2000,
  });
  console.log(map);
}

// 销毁地图 按钮点击事件
function handleDestroy() {
  AmapRef.value?.destroy();
}
</script>
