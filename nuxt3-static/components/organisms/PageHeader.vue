<template>
<div class="page-header">
  <template v-if="!isHome">
    <page-header-home-button></page-header-home-button>
  </template>
  <v-spacer></v-spacer>
  <div class="page-header-nav">
    <page-header-nav-button
      to="/about"
    >About</page-header-nav-button>
    <page-header-nav-button
      to="/works"
    >Works</page-header-nav-button>
    <page-header-nav-button
      to="/contact"
    >Contact</page-header-nav-button>
  </div>
</div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import PageHeaderHomeButton from "../atoms/PageHeaderHomeButton.vue";
import PageHeaderNavButton from "../atoms/PageHeaderNavButton.vue";

const props = defineProps({
  isHome: Boolean
});
</script>

<style scoped lang="scss">
.page-header {
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 25px;
}
</style>