<script setup>
import { ref, reactive, onMounted } from "vue";
import View from "./View.vue";

let details = ref([
  {
    employee_id: 105,
    name: "Joey",
    DOB: "1988-06-01",
    Age: 32,
    DOJ: "01-06-1998",
    email_id: "joey@abc.com",
    experiance: "10+ years ",
    designation: "Product Owner",
    skills: ["Azure", "JavaScript", "AWS"],
    contact_details: [
      "3960 Portola Dr",
      "Santa Cruz",
      "California",
      "Pin : 692357",
    ],
  },
  {
    employee_id: 102,
    name: "Rachel",
    DOB: "1988-09-12",
    Age: 36,
    DOJ: "14-07-2000",
    email_id: "rachel@abc.com",
    experiance: "9+ years ",
    designation: "Senior Architect",
    skills: ["JavaScript", "AWS"],
    contact_details: [
      "3960 Portola Dr",
      "Santa Cruz",
      "California",
      "Pin : 692357",
    ],
  },
  {
    employee_id: 103,
    name: "Chandler",
    DOB: "1995-01-25",
    Age: 30,
    DOJ: "25-01-2002",
    email_id: "chandler@abc.com",
    experiance: "8+ years ",
    designation: "Project Manager",
    skills: ["Linux", "Firebase"],
    contact_details: [
      "3960 Portola Dr",
      "Santa Cruz",
      "California",
      "Pin : 692357",
    ],
  },
  {
    employee_id: 104,
    name: "Ross",
    DOB: "1994-03-27",
    Age: 27,
    DOJ: "05-04-2004",
    email_id: "ross@abc.com",
    experiance: "7+ years ",
    designation: "Associate Architect",
    skills: ["GraphQL", "Linux"],
    contact_details: [
      "3960 Portola Dr",
      "Santa Cruz",
      "California",
      "Pin : 692357",
    ],
  },
  {
    employee_id: 101,
    name: "Monica",
    DOB: "1996-08-08",
    Age: 38,
    DOJ: "15-10-2006",
    email_id: "monica@abc.com",
    experiance: "6+ years ",
    designation: "DevOps Lead",
    skills: ["Node", "GraphQL"],
    contact_details: [
      "3960 Portola Dr",
      "Santa Cruz",
      "California",
      "Pin : 692357",
    ],
  },
]);
let showViewModal = ref(false);
let employeeObj = ref(null);
const viewDetails = () => {
  details._rawValue.forEach((element) => {
    if (+element.employee_id === +event.target.id) {
      showViewModal.value = !showViewModal.value;
      employeeObj = element;
    }
  });
};
</script>
<template>
  <table id="main_table">
    <thead>
      <tr class="tableRow">
        <th id="empIDhead">Employee ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Skills</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr
        :key="element.employee_id"
        class="tableRow"
        v-for="element in details"
      >
        <td class="right-align">{{ element.employee_id }}</td>
        <td>{{ element.name }}</td>
        <td>{{ element.email_id }}</td>
        <td :key="element.employee_id">
          <p
            :key="index"
            class="inline_prop"
            v-for="(element, index) in element.skills"
          >
            <button class="allSkillBtnStyle">{{ element }}</button>
          </p>
        </td>
        <td>
          <div id="button_div">
            <button :id="element.employee_id" @click="viewDetails">
              View details
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <View
    :boolCondition="showViewModal"
    heading="View"
    :employeeObj="employeeObj"
    @close-view-modal="() => (showViewModal = false)"
  />
</template>
<style scoped>
#main_table {
  width: 100%;
  margin: 0 auto;
}
th {
  background-color: #357266;
  color: white;
  border: 1px solid whitesmoke;
  padding: 16px;
  box-sizing: border-box;
  font-size: 1.2rem;
}
td {
  background-color: rgb(151, 189, 98);
  opacity: 0.9;
  padding: 10px;
  box-sizing: border-box;
}
#empIDhead {
  padding: 0px;
}
.right-align {
  text-align: right;
  padding-right: 40px;
}
.inline_prop {
  display: inline;
}
.allSkillBtnStyle {
  border-radius: 4px;
  padding: 2px 6px;
  margin-right: 3px;
  margin-left: 5px;
}
.allSkillBtnStyle:hover {
  cursor: default;
}
#button_div {
  display: flex;
  justify-content: center;
}
#button_div button {
  padding: 3px 8px 3px 8px;
  border-radius: 11px;
  background-color: #357266;
  color: white;
}
</style>
