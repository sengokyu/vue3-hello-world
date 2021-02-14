import "balm-ui/dist/balm-ui.css";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const BalmUI = require("balm-ui");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const BalmUIPlus = require("balm-ui/dist/balm-ui-plus");

createApp(App)
  .use(BalmUI)
  .use(BalmUIPlus)
  .mount("#app");
