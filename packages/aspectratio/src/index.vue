<template>
  <div class="lcs-Aspectratio">
    <div class="sizer" :style="{ 'padding-bottom': paddingButtom }"></div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";

export default defineComponent({
  name: "LcsAspectratio",
  props: {
    ratio: {
      type: [String, Number],
      validator: (value) => {
        if (typeof value === "number") {
          return true;
        } else if (typeof value === "string") {
          return ["16/9", "4/3", "3/2", "1/1"].indexOf(value) !== -1;
        }
        return false;
      },
      required: true,
    },
  },
  setup(props) {
    let aspectratio = 1;
    if (typeof props.ratio === "string") {
      const splitedRatio: string[] = props.ratio.split(/[/x]/);
      if (splitedRatio.length === 1) {
        aspectratio = Number(splitedRatio[0]) as number;
      } else {
        const [leftSide, rightSide] = splitedRatio;
        const leftNumber = Number(leftSide) as number;
        const rightNumber = Number(rightSide) as number;
        aspectratio = leftNumber / rightNumber;
      }
    }
    let paddingButtom: Ref<string | number> = ref("");
    paddingButtom.value = (1 / aspectratio) * 100 + "%";
    return {
      paddingButtom,
    };
  },
});
</script>

<style lang="scss" scoped>
.lcs-aspecratio {
  position: relative;
  overflow: hidden;
  flex: 1 0 auto;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  .sizer {
    flex: 1 0 0px;
  }
  .content {
    flex: 1 0 0px;
    max-width: 100%;
    max-height: 100%;
    margin-left: -100%;
  }
}
</style>
