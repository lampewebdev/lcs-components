<template>
  <div class="lcs-button" :class="type" :style="{ display: display }">
    <slot> default button text </slot>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

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
    let display = ref("inline-block");

    if (props.block) {
      display.value = "block";
    }

    return {
      display,
    };
  },
});
</script>

<style lang="scss">
.lcs-button {
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  line-height: 16px;
  font-weight: 400;
  border-style: solid;
  border-width: 2px;
  padding: 10px 40px;
  text-transform: uppercase;
  transition: all 0.2s linear;
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
