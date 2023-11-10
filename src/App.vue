<script setup lang="ts">
import { RouterView } from "vue-router";
import Menu from "./components/Menu.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Menu></Menu>
  <router-view></router-view>
  <Footer></Footer>
</template>

<style>

</style>