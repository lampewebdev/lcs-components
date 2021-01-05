import "@lcs-components/theme-default/theme.scss";

import { createApp } from "vue";
import Playground from "./Playground.vue";
import LcsButton from "@lcs-components/button";
import breakpoints from "@lcs-components/base";

console.log(breakpoints);

const app = createApp(Playground);
app.component(LcsButton.name, LcsButton);
app.mount("#app");
