<template>
  <div class="lcs-row" :style="{ justifyContent: justify }">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LcsRow",
  props: {
    justify: {
      type: String,
      validator: (value: string) =>
        [
          "start",
          "center",
          "end",
          "space-between",
          "space-around",
          "space-evenly",
        ].indexOf(value) !== -1,
      required: false,
      default: "start",
    },
  },
  setup() {},
});
</script>
