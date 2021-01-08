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
      required: false,
      default: null,
    },
  },
  setup(props): { classList: string } {
    let classList = "";
    if (props.col) {
      classList += `col-${props.col}`;
    }
    if (props.md) {
      classList += ` col-md-${props.md}`;
    }
    console.log(props.xl);
    if (props.xl) {
      classList += ` col-xl-${props.xl}`;
    }
    return {
      classList,
    };
  },
});
</script>

<style></style>
