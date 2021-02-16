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
@import "~@lcs-components/base/breakpoints/mixin.scss";

.lcs-CourseCardList {
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  display: grid;
}
@include respond-to("sm") {
  .lcs-CourseCardList {
    grid-gap: 10px;
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
