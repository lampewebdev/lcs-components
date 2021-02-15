<template>
  <div class="lcs-CourseCard" :style="{ backgroundColor: bgColor }">
    <div class="information">
      <div class="subtext">Profession</div>
      <div class="course">Frontend Developer</div>
      <div class="duration">24 months</div>
    </div>
    <div class="illustration">
      <img src="/courseImages/frontend.svg" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "LcsCourseCard",
  props: {
    bgColor: {
      type: String,
      default: "#AAD9CD",
    },
  },
  setup() {
    // your code
  },
});
</script>

<style lang="scss" scoped>
.lcs-CourseCard {
  cursor: pointer;

  position: relative;
  padding: 30px;

  display: flex;
  flex: 1 0 auto;
  justify-content: space-between;

  & .course {
    padding-top: 10px;
    font-size: 32px;
    font-weight: 900;
  }

  & .duration {
    position: absolute;
    bottom: 20px;
  }

  .illustration {
    display: flex;
  }

  .illustration img {
    width: 250px;
    height: 100%;
  }
}
</style>
