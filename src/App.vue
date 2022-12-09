<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <section class="global-width">
    <nav>
      <RouterLink :to="{ name: 'home' }">Home</RouterLink>
      <RouterLink :to="{ name: 'about' }">About</RouterLink>
      <RouterLink :to="{ name: 'contact' }">Contact Us</RouterLink>
    </nav>
    <RouterView />
  </section>
</template>

<style scoped>
nav {
  display: flex;
  margin: 30px 0px 80px 0px;
  width: 23%;
  justify-content: space-between;
}
nav a {
  text-decoration: none;
  color: black;
  font-size: 18px;
}
.global-width {
  width: 80%;
  margin: 0 auto;
}
</style>
