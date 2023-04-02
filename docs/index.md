---
layout: home

hero:
  name: "@dabu/vue3-amap"
  text: Vue3高德地图组件库
  tagline: 基于 Vue3 + Vite + TS
  image:
    src: /logo.png
    alt: "@dabu/vue3-amap"
  actions:
    - theme: brand
      text: 开始
      link: /guide/guide
    - theme: alt
      text: Follow
      link: https://github.com/AuYuHui

features:
  - icon: 🆕
    title: 最新流行技术栈
    details: 基于Vue3、Vite4、TS等最新技术栈开发
  - icon: 🦾
    title: 强类型
    details: 使用 TypeScript 编写，拥有强大的类型推导提示
---

<script setup>
import { onMounted, h } from 'vue'
import { useMessage } from "./components/message"
import { addReleaseTag } from './.vitepress/utils/addReleaseTag.js'

onMounted(() => {
  addReleaseTag()
})

const mess = h("span", {}, [
  "文档使用",
  h(
    "a",
    {
      href: "https://vitepress.vuejs.org/",
      target: "_blank",
      style: {
        color: "#409eff",
      },
    },
    [" vitepress "]
  ),
  h(
    "span",
    "编写，vitepress 处于非稳定版本阶段，如点击页面遇到卡顿，请刷新浏览器即可"
  ),
])

const { message } = useMessage()

if(process.env.NODE_ENV !== 'development') message?.info(() => mess, { closable: true, duration: 12000 })
</script>
