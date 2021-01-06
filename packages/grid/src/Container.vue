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
$grid-columns: 12;
$grid-gutter: 24px !default;

.lcs-container {
  display: flex;
  .lcs-row {
    flex: 1 1 100%;
    max-width: calc(100% + #{$grid-gutter});

    .lcs-column {
      flex-direction: column;
      float: left;
      $n: $grid-columns;
      @while $n > 0 {
        &.col-#{$n} {
          width: calc(100% / #{$grid-columns} * #{$n});
        }
        $n: $n - 1;
      }
    }
  }
}
</style>
