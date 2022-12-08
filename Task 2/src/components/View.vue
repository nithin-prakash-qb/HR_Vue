<script setup>
const props = defineProps(["boolCondition", "heading", "employeeObj"]);
console.log("*", props.boolCondition);
</script>
<template>
  <div
    id="modal_box_view"
    v-if="props.boolCondition"
    @click.self="$emit('closeViewModal')"
  >
    <table id="modal_table">
      <tr id="caption">
        <td colspan="2">
          {{ props.heading }}<i class="fa-solid fa-xmark" id="view_cross"></i>
        </td>
      </tr>
      <tr>
        <td class="col_1"><label for="employee_id_v">Employee ID :</label></td>
        <td class="col_2">
          <input
            type="text"
            id="employee_id_v"
            :value="props.employeeObj.employee_id"
          />
        </td>
      </tr>
      <tr>
        <td class="col_1"><label for="name_v">Name :</label></td>
        <td class="col_2">
          <input type="text" id="name_v" :value="props.employeeObj.name" />
        </td>
      </tr>
      <tr>
        <td class="col_1"><label for="DOB_v">Date Of Birth :</label></td>
        <td class="col_2">
          <input type="text" id="DOB_v" :value="props.employeeObj.DOB" />
        </td>
      </tr>
      <tr>
        <td class="col_1"><label for="age_v">Age :</label></td>
        <td class="col_2">
          <input type="text" id="age_v" :value="props.employeeObj.Age" />
        </td>
      </tr>
      <tr>
        <td class="col_1"><label for="email_v">Email ID :</label></td>
        <td class="col_2">
          <input
            type="email"
            id="email_v"
            :value="props.employeeObj.email_id"
          />
        </td>
      </tr>
      <tr>
        <td class="col_1"><label for="experiance_v">Experience :</label></td>
        <td class="col_2">
          <input
            type="text"
            id="experiance_v"
            :value="props.employeeObj.experiance"
          />
        </td>
      </tr>
      <tr>
        <td class="col_1"><label for="DOJ_v">Date of Joining :</label></td>
        <td class="col_2">
          <input type="text" id="DOJ_v" :value="props.employeeObj.DOJ" />
        </td>
      </tr>
      <tr>
        <td class="col_1"><label for="designation_v">Designation :</label></td>
        <td class="col_2">
          <input
            type="text"
            id="designation_v"
            :value="props.employeeObj.designation"
          />
        </td>
      </tr>
      <tr id="skill_row">
        <td class="col_1"><label for="skills_v">Skills :</label></td>
        <td id="outer_skill_div_v" class="col_2">
          <p
            :key="index"
            class="inline_prop"
            v-for="(element, index) in props.employeeObj.skills"
          >
            <button class="allSkillBtnStyle">{{ element }}</button>
          </p>
        </td>
      </tr>
      <tr>
        <td class="col_1">
          <label for="location_detail_v">Location Detail :</label>
        </td>
        <td class="col_2">
          <input
            type="text"
            id="location_detail_v"
            :value="props.employeeObj.contact_details"
          />
        </td>
      </tr>
    </table>
  </div>
</template>
<style scoped>
#modal_box_view {
      /* display: none; */
    /* margin: 0 auto; */
    /* position: absolute; */
    z-index: 1;
    padding-top: 65px;
    /* top: -67px; */
    /* width: 100%; */
    width: 100%;
    height: 100vh;
    /* overflow-y: scroll; */
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    left: 0;
    top: 0;
}
#modal_box_view::-webkit-scrollbar {
  display: none;
}
#modal_table {
  width: 60%;
  margin: 0 auto;
  padding: 10px;
  background-color: #d4eac8;
  position: relative;
}
#caption {
  font-size: 2em;
  font-weight: 800;
  letter-spacing: 1.5px;
}
#caption td {
  text-align: center;
  background-color: #214e34;
  color: white;
  padding: 15px;
  opacity: 0.9;
}
.col_1 {
  background-color: darkolivegreen;
  opacity: 0.8;
  font-weight: 600;
  padding: 14px 0px 14px 24px;
  width: 20%;
  padding-left: 24px;
}
.col_2 {
  width: 22%;
  padding: 0px;
}
input[type="text"],
input[type="email"],
input[type="date"] {
  width: 96%;
  border: none;
  padding: 13px 0px 16px 15px;
  font-size: 16px;
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
#outer_skill_div_v {
  background-color: white;
}
</style>
