export default ({ packageName }: { packageName: string }): string => {
  return `<template>
  <div class="lcs-${packageName}">
    <!-- your html -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Lcs${packageName}",
  props: {},
  setup() {
    // your code
  },
});
</script>

<style scoped>
.lcs-${packageName} {
  /* your style */
}
</style>
`;
};
