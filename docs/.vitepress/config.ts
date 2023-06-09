import fg from "fast-glob";
import { resolve } from "pathe";
import Unocss from "unocss/vite";
import { sync } from "fast-glob";
import { withPwa } from "@vite-pwa/vitepress";
// import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig, type DefaultTheme } from "vitepress";

export default withPwa(
  defineConfig({
    base: "/",
    head: [
      [
        "meta",
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
        },
      ],
      ["link", { rel: "icon", href: "/logo.png", type: "image/svg+xml" }],
      [
        "link",
        {
          rel: "alternate icon",
          href: "/favicon.ico",
          type: "image/png",
          sizes: "16x16",
        },
      ],
      ["meta", { name: "keywords", content: "vue3-amap" }],
      ["link", { rel: "mask-icon", href: "/logo.png", color: "#ffffff" }],
      [
        "link",
        {
          rel: "apple-touch-icon",
          href: "/apple-touch-icon.png",
          sizes: "180x180",
        },
      ],
      [
        "script",
        {},
          `
            // your JavaScript code goes here
            window._AMapSecurityConfig = {
              securityJsCode:'3cc7f7d2fa66fef63ddeacda9db0bea7',
            }
          `
      ],
      [
        "script",
        {
          src: "https://webapi.amap.com/maps?v=2.0&key=dbf3f6a5dafa9bd013fab9098a5df12f&plugin=AMap.AutoComplete,AMap.PlaceSearch",
        },
      ],
      [
        "script",
        {},
          `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?fa9142c0d692d2f19830b86a1acd72d1";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
          `
      ],
    ],
    pwa: {
      base: "/",
      scope: "/",
      outDir: ".vitepress/dist",
      registerType: "autoUpdate",
      includeAssets: fg.sync("**/*.{png,svg,ico,txt}", {
        cwd: resolve(__dirname, "public"),
      }),
      manifest: {
        name: "vue3-amap",
        short_name: "@dabu/vue3-amap",
        theme_color: "#ffffff",
        icons: [
          {
            src: "logo.png",
            sizes: "165x165",
            type: "image/svg",
            purpose: "any maskable",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{css,js,html,svg,png,ico,txt,woff2}"],
      },
      devOptions: {
        enabled: true,
        navigateFallback: "/",
      },
    },
    markdown: {
      theme: {
        dark: "min-dark",
        light: "min-light",
      },
    },
    lastUpdated: true,
    title: "@dabu/vue3-amap",
    themeConfig: {
      logo: "/logo.png",
      siteTitle: "@dabu/vue3-amap",
      outlineTitle: "目录",
      outline: [2, 6],
      editLink: {
        pattern: "https://github.com/AuYuHui/vue3-amap-docs/tree/main/docs/:path",
        text: "在 GitHub 上编辑此页",
      },
      socialLinks: [
        {
          icon: {
            svg: '<svg t="1668429676610" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1895" width="260" height="260"><path d="M787.696941 669.515294c0 44.935529-23.431529 118.181647-78.787765 118.181647-55.416471 0-78.848-73.246118-78.848-118.181647 0-44.875294 23.431529-118.181647 78.848-118.181647 55.356235 0 78.787765 73.306353 78.787765 118.181647zM315.090824 551.333647c-55.356235 0-78.787765 73.306353-78.787765 118.181647 0 44.935529 23.431529 118.181647 78.787765 118.181647s78.787765-73.246118 78.787764-118.181647c0-44.875294-23.431529-118.181647-78.787764-118.181647zM1024 561.212235c0 68.367059-6.746353 140.950588-37.526588 203.715765-81.257412 164.321882-304.609882 180.284235-464.594824 180.284235-162.454588 0-399.36-14.095059-483.689412-180.284235C6.746353 702.765176 0 629.579294 0 561.212235c0-89.871059 24.636235-174.742588 83.727059-243.651764a338.160941 338.160941 0 0 1-16.624941-104.688942c0-46.140235 10.420706-92.220235 31.382588-134.144 97.219765 0 159.382588 42.465882 233.231059 100.291765a823.536941 823.536941 0 0 1 190.162823-21.504c57.825882 0 116.314353 6.204235 172.333177 19.696941 73.246118-57.223529 135.348706-98.484706 231.363764-98.484706 20.961882 41.863529 31.382588 88.003765 31.382589 134.144 0 35.117176-5.541647 70.174118-16.624942 103.424C999.424 385.807059 1024 471.341176 1024 561.212235z m-137.878588 108.303059c0-94.147765-57.163294-177.212235-157.515294-177.212235-40.598588 0-79.329882 7.408941-119.988706 12.950588-31.984941 4.939294-63.969882 6.746353-96.617412 6.746353s-64.632471-1.807059-96.617412-6.746353c-39.996235-5.541647-79.390118-12.950588-119.988706-12.950588-100.291765 0-157.515294 83.064471-157.515294 177.212235 0 188.295529 172.272941 217.208471 322.43953 217.208471h103.424c150.166588 0.060235 322.379294-28.912941 322.379294-217.208471z" p-id="1896"></path></svg>',
          },
          link: "https://github.com/AuYuHui/vue3-amap",
        },
        {
          icon: {
            svg: '<svg t="1680444342161" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2745" width="200" height="200"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23" p-id="2746"></path></svg>',
          },
          link: "https://gitee.com/AuYuHui/vue3-amap",
        },
      ],
      nav: [
        {
          text: "指引",
          link: "/guide/guide",
          activeMatch: `^/guide/`,
        },
        {
          text: "高德地图",
          items: [
            {
              text: "开放平台",
              link: "https://lbs.amap.com/"
            },
            {
              text: "JSAPI文档",
              link: "https://lbs.amap.com/api/jsapi-v2/summary/"
            }
          ]
        }
      ],
      sidebar: [
        {
          text: "介绍",
          items: [
            {
              text: "快速开始",
              link: "/guide/guide",
            },
          ],
        },
        {
          text: "地图",
          items: [
            {
              text: "地图组件",
              link: "/examples/amap/amap",
            },
          ],
        },
        {
          text: "自定义",
          items: [
            {
              text: "自定义组件",
              link: "/examples/custom-map/custom-map",
            },
          ],
        },
        {
          text: "点标记",
          items: [
            {
              text: "Marker",
              link: "/examples/overlay/marker/marker",
            },
            {
              text: "Text",
              link: "/examples/overlay/text/text",
            },
            {
              text: "CircleMarker",
              link: "/examples/overlay/marker-circle/marker-circle",
            }
          ],
        },
        {
          text: "信息窗体",
          items: [
            {
              text: "InfoWindow",
              link: "/examples/infoWindow/infoWindow",
            },
          ],
        },
      ],
      footer: {
        message: "Released under the MIT License.",
        copyright: "Copyright © 2023-present AuYuHui",
      },
      lastUpdatedText: "最近更新时间",
    },
    vite: {
      server: {
        host: "0.0.0.0",
      },
      optimizeDeps: {
        include: ["typeit", "@vueuse/core", "@vicons/ionicons5"],
        exclude: ["@pureadmin/utils"],
      },
      build: {
        chunkSizeWarningLimit: 10000,
      },
      // @ts-ignore
      plugins: [Unocss()],
    },
    vue: {
      reactivityTransform: true,
    },
  })
);
