<template>
  <ul class="lcs-navBar" :class="{ active: active }">
    <li class="logo-wrapper">
      <div class="logo">Skillcrate</div>
    </li>
    <slot />
    <li class="menu" @click="onToggleMenu">
      <span class="material-icons"> menu </span>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, provide } from "vue";
export default defineComponent({
  name: "LcsNavbar",
  props: {},
  setup() {
    let active: Ref<boolean> = ref(false);

    function onToggleMenu() {
      active.value = !active.value;
    }

    provide("closeMenu", function closeMenu() {
      if (active.value === true) {
        active.value = false;
      }
    });

    return { active, onToggleMenu };
  },
});
</script>

<style lang="scss" scoped>
@import "~@lcs-components/base/breakpoints/mixin.scss";

.lcs-navBar {
  height: 60px;
  padding: 0 15px;
  list-style-type: none;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;

  & .logo-wrapper {
    font-family: "Space Grotesk", sans-serif;
    font-weight: 400;
    font-size: 30px;
    letter-spacing: 1px;
    flex: 1;
    order: 0;
    padding: 10px;
    & .logo {
      user-select: none;
      cursor: pointer;
      text-decoration: var(--act-color) underline;
      text-decoration-line: underline;
      text-decoration-style: solid;
      text-decoration-color: var(--act-color);
      text-decoration-thickness: 5px;
    }
  }
  & .lcs-Navbar-item {
    display: none;
  }
  > .menu {
    order: 2;
    user-select: none;
    cursor: pointer;
  }
}
@include respond-to("sm") {
  .lcs-navBar {
    &.active {
      flex-wrap: wrap;
      background-color: white;
      height: auto;
      z-index: 2;
      position: fixed;
      width: 100%;
      height: 100%;
      align-content: flex-start;

      .lcs-Navbar-item {
        display: block;
        order: 4;
        width: 100%;
      }
    }
  }
}
@include respond-from("sm") {
  .lcs-navBar {
    & .menu {
      display: none;
    }
    & .lcs-Navbar-item {
      display: block;
    }
  }
}
</style>
