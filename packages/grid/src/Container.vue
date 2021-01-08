<template>
  <div class="lcs-container" :class="noGutter ? 'no-gutter' : '' ">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LcsContainer",
  props: {
    noGutter: {
      type: Boolean,
      default: false
    }
  },
});
</script>

<style lang="scss">
@import "@lcs-components/base/breakpoints.scss";

$grid-columns: 12;
$grid-gutter: 12px !default;

.lcs-container {
  max-width: 100%;
  flex: 1 1 100%;
  margin: auto;
  width: 100%;

  &.no-gutter .lcs-row .lcs-column {
    padding-left: 0px !important;
    padding-right: 0px !important;
  }

  .lcs-row {
    display: flex;
    flex-wrap: wrap;
    .lcs-column {
      display: flex;
      flex: 0 0 100%;
      width: 100%;

      $n: $grid-columns;
      @while $n > 0 {
        &.col-#{$n} {
          flex: 0 0 calc(((100% / #{$grid-columns}) * #{$n}));
          max-width: calc(((100% / #{$grid-columns}) * #{$n}));
          padding-right: #{$grid-gutter / 2};
          padding-left: #{$grid-gutter / 2};
        }

        @include respond-from("md") {
          &.col-md-#{$n} {
            flex: 0 0 calc(((100% / #{$grid-columns}) * #{$n}));
            max-width: calc(((100% / #{$grid-columns}) * #{$n}));
            padding-right: #{$grid-gutter / 2};
            padding-left: #{$grid-gutter / 2};
          }
        }

        $n: $n - 1;
      }
    }
  }
}
</style>
