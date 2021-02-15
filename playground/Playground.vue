<template>
  <lcs-container data-theme="default">
    <lcs-navbar class="m-b-lg">
      <lcs-navbar-item> HOME </lcs-navbar-item>
      <lcs-navbar-item> COURSES </lcs-navbar-item>
      <lcs-navbar-item> BLOG </lcs-navbar-item>
      <lcs-navbar-item>
        <lcs-button> Login </lcs-button>
      </lcs-navbar-item>
      <lcs-navbar-item>
        <lcs-button type="full"> Sing Up </lcs-button>
      </lcs-navbar-item>
    </lcs-navbar>
    <lcs-row class="m-l-md m-r-md">
      <H3> Learn Professions that are in High-deamend right now! </H3>
    </lcs-row>
    <lcs-course-card-list>
      <lcs-course-card />
      <lcs-course-card />
    </lcs-course-card-list>

    <!-- <lcs-row>
      <lcs-column col="12">
        <h1>Heading 1</h1>
      </lcs-column>
      <lcs-column>
        <h2>Heading 2</h2>
      </lcs-column>
    </lcs-row>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>

    <lcs-button class="m-a-xxl elevation-5"> Primary </lcs-button>
    <lcs-button type="full"> Full </lcs-button>
    <lcs-button type="plain"> Plain </lcs-button>
    <h2>Buttons block</h2>
    <lcs-button block> Primary Block </lcs-button>
    <lcs-button type="full" block> Full Block</lcs-button>
    <lcs-button type="plain" block> Plain Block</lcs-button>

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
    </div> -->
  </lcs-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LcsButton from "@lcs-components/button";
import { LcsContainer, LcsRow, LcsColumn } from "@lcs-components/grid";
import { LcsNavbar, LcsNavbarItem } from "@lcs-components/navbar";
import { LcsCourseCard, LcsCourseCardList } from "@lcs-components/course-card";

export default defineComponent({
  name: "Playground",
  components: {
    LcsButton,
    LcsContainer,
    LcsRow,
    LcsColumn,
    LcsNavbar,
    LcsNavbarItem,
    LcsCourseCardList,
    LcsCourseCard,
  },
});
</script>
