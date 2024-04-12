<template>
  <div>
    <!-- แสดงค่าที่ป้อนไว้ก่อน -->
    <div v-if="!showBar" class="submitted-values">
      <p class="submitted-value">วันที่ส่ง: {{ textInput1 }}</p>
      <p class="submitted-value">ชื่อการบ้าน: {{ textInput2 }}</p>
      <p class="submitted-value">วิชา: {{ textInput3 }}</p>
      <p class="submitted-value">ลายละเอียด: {{ textInput4 }}</p>
    </div>

    <button class="add-button" @click="toggleBar">+</button>
    <div v-if="showBar" class="black-bar">
      <div class="row">
        <div class="text-container">
          <input type="text" v-model="textInput1" class="text-input" placeholder="วันที่ส่ง" @keyup.enter="submitForm">
        </div>
      </div>
      <div class="row">
        <div class="text-container">
          <input type="text" v-model="textInput2" class="text-input" placeholder="ชื่อการบ้าน" @keyup.enter="submitForm">
        </div>
      </div>
      <div class="row">
        <div class="text-container">
          <input type="text" v-model="textInput3" class="text-input" placeholder="วิชา" @keyup.enter="submitForm">
        </div>
      </div>
      <div class="row">
        <div class="text-container">
          <input type="text" v-model="textInput4" class="text-input" placeholder="ลายละเอียด" @keyup.enter="submitForm">
        </div>
      </div>
    </div>
    <p class="larger-text">การบ้าน</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showBar = ref(false);
const textInput1 = ref('');
const textInput2 = ref('');
const textInput3 = ref('');
const textInput4 = ref('');

function toggleBar() {
  showBar.value = !showBar.value;
}

function submitForm() {
  console.log("Form submitted");
}
</script>

<style>
.larger-text {
  font-size: 55px; 
}

.add-button {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px;
  font-size: 18px;
}

.black-bar {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  max-width: 10000px; 
  height: 350px;
  background-color: #000; 
  padding: 20px;
  overflow-y: auto;
}

.row {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.text-container {
  width: 80%; 
  margin: 0 auto;
}

.text-input {
  width: 100%; 
  padding: 10px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
}

.submitted-values {
  padding: 20px;
  margin-bottom: 20px;
  width: auto;
  background-color: #f0f0f0;
  border-radius: 20px;
  position: fixed;
  top: 15%;
}

.submitted-value {
  font-size: 18px;
  margin-bottom: 10px;
}
</style>
