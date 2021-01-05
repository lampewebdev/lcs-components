<template>
  <div class="lcs-Heading">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "LcsHeading",
  props: {},
  setup() {
    // your code
  },
});
</script>

<style lang="scss">
h1 {
  font-weight: 400;
  font-style: normal;
  font-size: 50px;
  line-height: 55px;
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
