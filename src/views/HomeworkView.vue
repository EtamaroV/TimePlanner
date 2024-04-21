<script setup>
import { RouterLink, RouterView, useRouter} from 'vue-router'
import { ref } from 'vue';

const router = useRouter()


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

<template>
  <router-view v-slot="{ Component }">
  <transition name="slide" mode="out-in">
    <component :is="Component" />
  </transition>
</router-view>
  <div>
    

    <button class="add-button larger-button" @click="router.push({ path: '/homework/add' })">+</button>
    
    
    <p class="larger-text">การบ้าน</p>
  </div>
  
</template>

<style>
.larger-text {
  font-size: 55px;
  top: 60px; 
}

.add-button {
  position: absolute ;
  top: 100px;
  right: 10px;
  padding: 20px;
  font-size:20px;
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
