export default ({ newPackageName }: { newPackageName: string }): string => {
  return `<template>
  <div class="lcs-${newPackageName}">
    <!-- your html -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "lcs-${newPackageName}",
  props: {},
  setup() {
    // your code
  },
});
</script>

<style scoped>
.lcs-${newPackageName} {
  /* your style */
}
</style>
`;
};
