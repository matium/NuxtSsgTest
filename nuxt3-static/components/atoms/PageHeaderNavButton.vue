<template>
  <v-btn
    class="page-header-nav-button"
    variant="text"
    color="#ffffff"
    :to="to ? to : '/'"
  >
    <slot></slot>
  </v-btn>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  to: String
});

</script>

<style scoped lang="scss">
.page-header-nav-button {
  font-size: 16px;
  font-weight: 500;
  text-transform: none;
}
</style>