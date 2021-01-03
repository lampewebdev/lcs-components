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

<style scoped>
.lcs-Heading {
  /* your style */
}
</style>
