<template>
  <div class="lcs-CourseCardList">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "LcsCourseCardList",
});
</script>

<style lang="scss" scoped>
.lcs-CourseCardList {
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  display: grid;
}
</style>
