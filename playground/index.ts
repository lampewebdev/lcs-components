import "@lcs-components/base/base.scss";
import "@lcs-components/theme-default/theme.scss";

import { createApp } from "vue";
import Playground from "./Playground.vue";

const app = createApp(Playground);
app.mount("#app");
