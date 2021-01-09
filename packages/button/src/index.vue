<template>
  <button
    class="lcs-button"
    :class="type"
    :style="{ display: display, width: width }"
  >
    <slot> default button text </slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";

export default defineComponent({
  name: "LcsButton",
  props: {
    type: {
      type: String,
      default: "primary",
    },
    block: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    let display: Ref<string> = ref("inline-block");
    let width: Ref<string> = ref("unset");

    if (props.block) {
      display.value = "block";
      width.value = "100%";
    }

    return {
      display,
      width,
    };
  },
});
</script>

<style lang="scss">
.lcs-button {
  cursor: pointer;
  text-align: center;
  font-size: var(--font-base-size);
  line-height: var(--font-base-size);
  font-weight: 400;
  border-style: solid;
  border-width: 2px;
  padding: 10px 40px;
  text-transform: uppercase;
  transition: all 0.2s ease-out;
}

.lcs-button.primary:hover {
  color: var(--text-color);
  border-color: var(--text-color);
  background-color: var(--act-color);
}

.lcs-button.primary {
  background: transparent;
  color: var(--text-color);
  border-color: var(--text-color);
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
}

.lcs-button.plain {
  color: var(--text-color);
  border-color: var(--bkg-color);
  background-color: var(--bkg-color);
}
</style>
