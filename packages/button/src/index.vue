<template>
  <div class="lcs-button">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "LcsButton",
  props: {},
  setup() {
    // your code
  },
});
</script>

<style lang="scss">
:root {
  --text-color: #1a1c20;
  --bkg-color: #f6f6f6;
  --act-color: #f0a500;
  --bkg-logo: #1a1c20;
}

body.dark-theme {
  --text-color: #f6f6f6;
  --bkg-color: #1a1c20;
}

body.oled-theme {
  --text-color: #f6f6f6;
  --bkg-color: #000;
  --bkg-logo: #000;
}

b {
  color: var(--text-color);
  letter-spacing: 2px;
}

* {
  font-family: "Nunito Sans", sans-serif;
  box-sizing: border-box;
}

body {
  background: var(--bkg-color);
  padding-left: 25px;
  line-height: 1.55;
}

.logo {
  background-color: var(--bkg-logo);
  color: var(--act-color);
  text-decoration: none;
  display: inline-block;
  vertical-align: middle;
  padding: 15px;
}

#logo_svg {
  height: 42px;
  width: 42px;
  background-color: var(--bkg-logo);
  fill: var(--act-color);
  vertical-align: middle;
}

a {
  color: var(--act-color);
}

h1 {
  font-weight: 400;
  font-style: normal;
  font-size: 50px;
  line-height: 55px;
}

p {
  font-size: 16px;
  line-height: 29px;
  letter-spacing: normal;
  font-weight: 400;
  font-style: normal;
}

.lcs-button {
  cursor: pointer;
  background: transparent;
  color: var(--text-color);
  font-size: 16px;
  line-height: 16px;
  font-weight: 400;
  border-color: var(--text-color);
  border-style: solid;
  border-width: 2px;
  padding: 10px 40px;
  text-transform: uppercase;
}

.lcs-button:hover {
  color: var(--text-color);
  border-color: var(--text-color);
  background-color: var(--act-color);
}

.lcs-button.full {
  color: var(--bkg-color);
  border-color: var(--text-color);
  background-color: var(--text-color);
}

.lcs-button.full:hover {
  color: var(--bkg-color);
  border-color: var(--act-color);
  background-color: var(--act-color);
  transition: all 0.2s linear;
}

.lcs-button.plain {
  color: var(--text-color);
  border-color: var(--bkg-color);
  background-color: var(--bkg-color);
}

h2 {
  font-family: "Poppins", sans-serif;
  font-weight: 200;
  font-size: 2.5rem;
}

h3 {
  font-family: "Poppins", sans-serif;
  font-weight: 100;
  font-size: 2.2rem;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  text-decoration: var(--act-color) underline;
  font-family: "Comfortaa", sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  color: var(--text-color);
}
</style>
