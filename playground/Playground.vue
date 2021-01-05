<template>
  <div data-theme="default">
    <h1>LampeCodeSchool</h1>
    <br /><br />
    <div>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <hr />
      <lcs-button> Primary </lcs-button>
      <lcs-button type="full"> Full </lcs-button>
      <lcs-button type="plain"> Plain </lcs-button>
      <h2>Buttons block</h2>
      <lcs-button block> Primary Block </lcs-button>
      <lcs-button type="full" block> Full Block</lcs-button>
      <lcs-button type="plain" block> Plain Block</lcs-button>
    </div>
    <br /><br />

    <div data-theme="dark">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <lcs-button> Primary </lcs-button>
      <lcs-button type="full"> Full </lcs-button>
      <lcs-button type="plain"> Plain </lcs-button>
      <h2>Buttons block</h2>
      <lcs-button block> Primary Block </lcs-button>
      <lcs-button type="full" block> Full Block</lcs-button>
      <lcs-button type="plain" block> Plain Block</lcs-button>
    </div>
    <br /><br />

    <div data-theme="oled">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <lcs-button> Primary </lcs-button>
      <lcs-button type="full"> Full </lcs-button>
      <lcs-button type="plain"> Plain </lcs-button>
      <h2>Buttons block</h2>
      <lcs-button block> Primary Block </lcs-button>
      <lcs-button type="full" block> Full Block</lcs-button>
      <lcs-button type="plain" block> Plain Block</lcs-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LcsButton from "@lcs-components/button";

export default defineComponent({
  name: "Playground",
  components: {
    LcsButton,
  },
});
</script>

<style lang="scss">
// b {
//   color: var(--text-color);
//   letter-spacing: 2px;
// }

// a {
//   color: var(--act-color);
// }

// .logo {
//   background-color: var(--bkg-logo);
//   color: var(--act-color);
//   text-decoration: none;
//   display: inline-block;
//   vertical-align: middle;
//   padding: 15px;
// }

// #logo_svg {
//   height: 42px;
//   width: 42px;
//   background-color: var(--bkg-logo);
//   fill: var(--act-color);
//   vertical-align: middle;
// }
</style>
