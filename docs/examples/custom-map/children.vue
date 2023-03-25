<template>
  <div></div>
</template>

<script setup lang="ts">
import { useParent } from "@dabu/vue3-amap";
import { useMessage } from "../../components/message";

const { message } = useMessage();
const { parent } = useParent();
console.log(parent);
const map = parent?.getInstance();
console.log(map);
// 加载插件
AMap.plugin(["AMap.AutoComplete", "AMap.PlaceSearch"], () => {
  const ps = new AMap.PlaceSearch({
    pageSize: 20,
  });
  console.log(ps);
});
</script>

<style scoped></style>
