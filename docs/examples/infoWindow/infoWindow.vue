<template>
  <div>
    <div class="mb-7 w-full">
      <n-descriptions label-placement="top" bordered :column="100">
        <n-descriptions-item
          v-for="(item, index) in markers"
          :key="index"
          :label="`第${index + 1}个AOI`"
          class="w-full h-full"
        >
          {{ item.comment }}
        </n-descriptions-item>
      </n-descriptions>
    </div>
    <div class="h-500px w-800px">
      <ElAmap ref="AmapRef" :center="[116.465812, 39.991939]" :zoom="14">
        <ElMarker
          v-for="(marker, index) in markers"
          :key="index"
          :position="marker.position"
          @click="handleMarkerClick(marker)"
        />
        <ElElInfoWindow
          ref="InfoWindowRef"
          :position="activeAoi.position"
          auto-move
          is-custom
        >
          <div class="info-window-content" v-if="activeAoi">
            <n-card>
              <n-icon
                :component="Close"
                class="button-close"
                size="20"
                @click="handleCloseClick"
              />
              <h3>该点的位置</h3>
              <div>
                {{ activeAoi.position[0] }}, {{ activeAoi.position[1] }}
              </div>
              <div>
                <NInput
                  v-model:value="activeAoi.comment"
                  placeholder="编辑备注"
                />
              </div>
            </n-card>
          </div>
        </ElElInfoWindow>
      </ElAmap>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { Close } from "@vicons/ionicons5";
import { NDescriptions, NDescriptionsItem } from "naive-ui";
import {
  ElAmap,
  ElAmapExpose,
  ElMarker,
  ElElInfoWindow,
  ElMarkerProps,
} from "@dabu/vue3-amap";
import type { ElInfoWindowExpose } from "@dabu/vue3-amap";
const AmapRef = ref<ElAmapExpose | null>(null);
const InfoWindowRef = ref<ElInfoWindowExpose | null>(null);
// marker
const aois: Array<ElMarkerProps> = [
  [116.465812, 39.991939],
  [116.4712, 39.996749],
  [116.470788, 39.989426],
  [116.475671, 40.000064],
  [116.46557, 39.999829],
].map((position, i) => ({
  position,
  comment: `第${i}个点`,
})) as unknown as Array<ElMarkerProps>;
const markers = reactive<Array<ElMarkerProps>>(aois);
const activeAoi = ref<any>(markers[0]);

function handleMarkerClick(value: ElMarkerProps) {
  activeAoi.value = value;
  const infoWindow = InfoWindowRef.value?.getInstance();
  const map = AmapRef.value?.getInstance();
  infoWindow.open(map);
}

function handleCloseClick() {
  const infoWindow = InfoWindowRef.value?.getInstance();
  infoWindow.close();
}
</script>

<style scoped>
.info-window-content {
  position: relative;
  width: 220px;
  background-color: #fff;
}

.info-window-content h3 {
  margin-top: 0;
}

.info-window-content .button-close {
  position: absolute;
  right: 0.5em;
  top: 0.5em;
  cursor: pointer;
}
</style>
