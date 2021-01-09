<template>
  <div class="lcs-container" :class="noGutter ? 'no-gutter' : ''">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LcsContainer",
  props: {
    noGutter: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
