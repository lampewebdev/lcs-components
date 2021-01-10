<template>
  <div class="lcs-column" :class="classList">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import breakpoints from "../../base/breakpoints/exports.scss";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const props: any = {
  col: {
    type: String,
    required: true,
  },
};
Object.keys(breakpoints).forEach((breakpoint) => {
  props[breakpoint] = {
    type: String,
    required: false,
    default: null,
  };
});
console.log(props);
export default defineComponent({
  name: "LcsColumn",
  props,
  setup(props) {
    type Breakpoint = keyof typeof props | "col";
    let classList: Ref<string> = ref("");
    const breakpointKeys = Object.keys(breakpoints);
    const propKeys = Object.keys(props);

    propKeys.forEach((propKey: string) => {
      if (breakpointKeys.includes(propKey)) {
        const point = props[propKey as Breakpoint];
        if (point !== null) {
          classList.value += ` col-${propKey}-${point}`;
        }
      } else if (propKey === "col") {
        classList.value += ` col-${props.col}`;
      }
    });

    return {
      classList,
    };
  },
});
</script>

<style></style>
