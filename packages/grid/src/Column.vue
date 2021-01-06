<template>
  <div class="lcs-column" :class="classList">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LcsColumn",
  props: {
    col: {
      type: Number,
      required: true,
    },
    xs: {
      type: Number,
      required: false,
      default: null,
    },
    md: {
      type: Number,
      required: false,
      default: null,
    },
    xl: {
      type: Number,
      required: true,
      default: null,
    },
  },
  setup(props): { classList: string } {
    let classList = "";
    if (props.col) {
      classList += `col-${props.col}`;
    }
    return {
      classList,
    };
  },
});
</script>

<style></style>
