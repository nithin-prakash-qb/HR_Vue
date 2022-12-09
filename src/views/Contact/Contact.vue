<script setup>
import Address from "./Address.vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <h1>Contact Page</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non ligula
    luctus, commodo sapien eget, rutrum justo. Phasellus quis dui urna. Interdum
    et malesuada fames ac ante ipsum primis in faucibus. Vestibulum rutrum felis
    sit amet lorem vulputate, et sodales quam vehicula. Sed at malesuada sem,
    sed mattis massa. Suspendisse faucibus quam risus, a dictum ligula finibus
    eget. Pellentesque ac eros ut nulla dapibus fringilla ut ut purus. Class
    aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
    himenaeos. Suspendisse vitae vestibulum felis. Morbi tincidunt libero ac
    egestas cursus. Nulla lacinia luctus eros eleifend mattis. Duis vitae eros
    est. Nunc imperdiet laoreet tortor sed faucibus. Class aptent taciti
    sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In
    elit neque, commodo et risus eget, rutrum vestibulum arcu. Mauris interdum
    vel justo quis pharetra. In hac habitasse platea dictumst.
  </p>
  <RouterLink :to="{ name: 'address' }"
    ><button id="ShowAddress">Show Address</button></RouterLink
  >
  <br>
  
</template>
<style scoped>
h1 {
  text-align: center;
  padding-bottom: 31px;
  color: #357266;
  font-size: 3rem;
}
#ShowAddress{
  padding: 4px 7px 4px 7px;
  border-radius: 6px;
  background-color:#357266;;
  color: white;
}
</style>
