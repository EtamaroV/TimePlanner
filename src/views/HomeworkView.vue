<template>
  <div>
    <button class="add-button" @click="toggleBar">+</button>
    <div v-if="showBar" class="black-bar">
      <div class="row">
        <div class="text-container">
          <input type="text" v-model="textInput1" class="text-input" placeholder="วันที่ส่ง">
        </div>
      </div>
      <div class="row">
        <div class="text-container">
          <input type="text" v-model="textInput2" class="text-input" placeholder="ชื่อการบ้าน">
        </div>
      </div>
      <div class="row">
        <div class="text-container">
          <input type="text" v-model="textInput3" class="text-input" placeholder="วิชา">
        </div>
      </div>
      <div class="row">
        <div class="text-container">
          <input type="text" v-model="textInput4" class="text-input" placeholder="ลายละเอียด">
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
  width: 2111px;
  height: 444px;
  background-color: black;
  padding: 20px;
  overflow-y: auto; 
  display: grid;
  grid-template-rows: repeat(4, auto);
  row-gap: 10px;
}

.row {
  display: flex;
  justify-content: center;
}

.text-container {
  width: 80%; 
  margin: 0 auto;
}

.text-input {
  width: 100%; 
  padding: 5px;
  font-size: 16px;
}
</style>
