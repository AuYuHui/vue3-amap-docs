import { type Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "@dabu/vue3-amap/dist/style.css";
import "uno.css";
import "./style/code.css";
import "./style/overrides.css";

import naive from "naive-ui";

import { NaiveTheme, Description, DescriptionPopover } from "../../components";

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(naive);
    app.component("naive-theme", NaiveTheme);
    app.component("description", Description);
    app.component("description-popover", DescriptionPopover);
  },
};

export default theme;
