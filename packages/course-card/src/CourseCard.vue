<template>
  <div
    class="lcs-CourseCard pa-5 pa-sm-4 rounded-3"
    :style="{ backgroundColor: course.color }"
  >
    <div class="information">
      <div class="subtext">Profession</div>
      <div class="course pt-4 pt-sm-1">{{ course.name }}</div>
      <div class="duration pt-4 pt-sm-1">{{ course.duration }}</div>
    </div>
    <div class="illustration pb-sm-4">
      <img :src="course.image" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

type Course = {
  name: string;
  duration: string;
  image: string;
  color: string;
};
export default defineComponent({
  name: "LcsCourseCard",
  props: {
    course: {
      type: Object,
      required: true,
      validator: function (course: Course) {
        return typeof course.name === "string";
      },
    },
  },
});
</script>

<style lang="scss" scoped>
@import "~@lcs-components/base/breakpoints/mixin.scss";

.lcs-CourseCard {
  cursor: pointer;
  position: relative;
  display: flex;
  flex: 1 0 auto;
  justify-content: space-between;

  & .course {
    font-size: 32px;
    font-weight: 900;
  }

  .illustration {
    display: flex;
  }

  .illustration img {
    width: 100%;
    max-width: 250px;
    height: 100%;
  }
}
@include respond-to("sm") {
  .lcs-CourseCard {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}
</style>
