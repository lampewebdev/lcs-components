<template>
  <div class="lcs-container">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LcsContainer",
});
</script>

<style lang="scss">
@import "@lcs-components/base/breakpoints.scss";

$grid-columns: 12;
$grid-gutter: 6px !default;

.lcs-container {
  display: block;
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
          // margin-right: #{$grid-gutter / 2};
          // margin-left: #{$grid-gutter / 2};
        }

        @include respond-from("md") {
          &.col-md-#{$n} {
            flex: 0 0 calc(((100% / #{$grid-columns}) * #{$n}));
            max-width: calc(((100% / #{$grid-columns}) * #{$n}));
            // margin-right: #{$grid-gutter / 2};
            // margin-left: #{$grid-gutter / 2};
          }
        }

        $n: $n - 1;
      }
    }
  }
}
</style>
