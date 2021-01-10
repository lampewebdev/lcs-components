<template>
  <div class="lcs-row" :class="{ 'justify-center': justifyCenter }">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LcsRow",
  props: {
    justifyCenter: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    console.log(props.justifyCenter);
  },
});
</script>

<style></style>
