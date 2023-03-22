<script setup>
import describe from './describe.vue'
import tags from './tags.vue'
</script>

<ClientOnly>
  <describe />
</ClientOnly>

## 🏷️ 标签

<ClientOnly>
  <tags :className="'type-it1'" :values="['支持Vue3']" />
  <tags :className="'type-it2'" :tagNameList="['浏览器']" :values="['支持任意运行在浏览器的JS语言']" :speed="100" />
</ClientOnly>

## 📦 安装

```bash
# with npm
npm install @dabu/vue3-amap

# or with yarn
yarn add @dabu/vue3-amap

# or with pnpm
pnpm add @dabu/vue3-amap
```

## 📑 初始化

```ts
import { useAmap } from '@dabu/vue3-amap'
import '@dabu/vue3-amap/dist/style.css'

const { initAMapApiLoader } = useAmap()
async function setupApp() {
  await initAMapApiLoader({
    key: '', // 高德地图 Key
    version: '2.0'
  })
  const app = createApp(App)
  app.mount('#app')
}
setupApp()
```
