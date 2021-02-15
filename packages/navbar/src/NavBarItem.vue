<template>
  <ul class="lcs-Navbar-item" @click="closeMenu">
    <slot />
  </ul>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";

export default defineComponent({
  name: "LcsNavbarItem",
  props: {},
  setup() {
    const closeMenu = inject("closeMenu");
    return {
      closeMenu,
    };
  },
});
</script>

<style lang="scss" scoped>
.lcs-Navbar-item {
  padding: 10px 20px;
  width: auto;
  order: 1;
  position: relative;
  display: flex;
  width: auto;
  font-size: 18px;
  font-weight: lighter;
  color: var(--text-color);
  user-select: none;
  cursor: pointer;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: var(--act-color);
  text-decoration-thickness: 1px;
  transition: text-decoration-thickness 0.25s ease;

  &:hover {
    text-decoration-thickness: 6px;
    transition: text-decoration-thickness 0.25s ease;
  }
}
</style>
