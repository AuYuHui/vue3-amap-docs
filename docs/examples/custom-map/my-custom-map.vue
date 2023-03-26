<template>
  <div class="absolute top-2 left-2">
    <ElMarker
      v-for="poi in poiList"
      :key="poi.id"
      :position="[poi.location.getLng(), poi.location.getLat()]"
      :label="{
        content: poi.name,
        offset: [0, 0],
        direction: 'bottom',
      }"
      @mouseover="hoverItem = poi"
      @mouseout="hoverItem = null"
    />
    <n-card>
      <n-input
        v-model:value="inputValue"
        :style="{ width: '70%' }"
        placeholder="请输入关键词"
      />
      <n-button
        type="primary"
        class="ml-5"
        :disabled="!inputValue.length"
        ghost
        @click="handleSearch"
      >
        搜索
      </n-button>
      <div v-show="poiList.length">
        <n-spin :show="loading">
          <n-list bordered class="!pl-0 h-300px w-300px overflow-auto">
            <n-list-item
              v-for="item in poiList"
              :key="item.id"
              class="cursor-pointer"
              @click="handleClickItem(item)"
            >
              <n-thing :title="item.name">
                <template #description>
                  {{ item.address }}
                </template>
              </n-thing>
            </n-list-item>
          </n-list>
        </n-spin>
      </div>
      <template #footer>
        <n-spin :show="loading" v-show="poiList.length">
          <n-pagination
            :item-count="searchParams.total"
            :page-slot="7"
            @update-page="handleChange"
          />
        </n-spin>
      </template>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { useParent, ElMarker } from "@dabu/vue3-amap";
import { reactive, ref } from "vue";
import { useMessage } from "../../components/message";
const { parent } = useParent();
const { message } = useMessage();
const loading = ref(false);
const inputValue = ref("");
// 鼠标点击的列表项
const hoverItem = ref<AMap.PlaceSearch.Poi | null>(null);
// 获取父组件实例
const map = parent?.getInstance();
const searchParams = reactive({
  pageSize: 20,
  pageIndex: 1,
  total: 0,
});
// 结果列表
const poiList = ref<AMap.PlaceSearch.PoiList["pois"]>([]);
let search: AMap.PlaceSearch = null;
/**
 *  加载插件
 *  报类型错误请安装对应类型的声明文件
 *  npm install -D @types/amap-js-api-autocomplete
 *  npm install -D @types/amap-js-api-place-search
 */

map.plugin(["AMap.PlaceSearch"], () => {
  search = new AMap.PlaceSearch({
    pageSize: searchParams.pageSize,
  });
});
// 查询结果
function searchPoi() {
  loading.value = true;
  search.search(
    inputValue.value,
    (status, result: AMap.PlaceSearch.SearchResult) => {
      if (status === "complete") {
        console.log(result);
        searchParams.pageIndex = result.poiList.pageIndex;
        searchParams.total = result.poiList.count;
        // 结果列表
        poiList.value = result.poiList.pois;
        // 查询完成
        loading.value = false;

        fitView();
      } else {
        message.error("搜索失败");
      }
    }
  );
}
// 点击的Item
function handleClickItem(item: AMap.PlaceSearch.Poi) {
  hoverItem.value = item;
  map.setCenter([item.location.getLng(), item.location.getLat()]);
}

// 根据覆盖物调整显示范围
function fitView() {
  requestAnimationFrame(() => {
    map.setFitView(null, false, [0, 0, 300, 0]);
  });
}

// 搜索按钮
function handleSearch() {
  if (!inputValue.value) {
    message.error("请输入关键词");
    return;
  }
  searchPoi();
}

function handleChange(page: number) {
  search.setPageIndex(page);
  searchPoi();
}
</script>

<style scoped></style>
