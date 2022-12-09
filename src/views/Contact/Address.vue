<script setup>
import { ref, reactive, onMounted } from "vue";
let addressDetails = ref([
  {
    heading: "Address 1",
    address: [
      "7th Floor, Ganga",
      "Phase III Campus, Technopark",
      "Trivandrum - 695583",
    ],
  },
  {
    heading: "Address 2",
    address: [
      "3rd Floor, SM Towers, 2/88",
      "OMR, Seevaram, Perungudi",
      "Chennai - 600096",
    ],
  },
  {
    heading: "Address 3",
    address: [
      "6th Floor, Tower B ",
      "A-8A, Knowledge Boulevard",
      "Sector 62, Noida - 201301",
    ],
  },
  {
    heading: "Address 4",
    address: [
      "7th Floor, Ganga",
      "Phase III Campus, Technopark",
      "Trivandrum - 695583",
    ],
  },
  {
    heading: "Address 5",
    address: [
      "10th Floor, Tower A",
      "Prestige Shantiniketan,",
      "Whitefield",
      "Bangalore - 560048",
    ],
  },
]);
</script>

<template>
  <section>
    <div :key="index" v-for="(element, index) in addressDetails" >
      <h1>{{ element.heading }}</h1>
      <p :key="index" v-for="(elements,index) in element.address">
        {{elements}}
      </p>
    </div>
  </section>
</template>
<style scoped>
h1 {
  color: #357266;
  font-size: 3rem;
  text-align: start;
  padding-bottom: 0px;
  padding-left: 20px;
}
section {
  display: flex;
  flex-wrap: wrap;
}
div {
  width: 33%;
  /* border: 1px solid red; */
}
p {
  padding-left: 20px;
  margin-top: 0px;
  margin-bottom: 8px;
}
</style>
