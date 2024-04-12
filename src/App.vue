<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue';
</script>

<template>
  <div class="ContentZone">

    <RouterView />

  </div>
  
  <NavBar/>
</template>


<style>
.ContentZone {
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  width: 100%;
  align-content: center;
  max-width: 62.5rem;
  width: calc(100% - 2* 1.5rem);
}
</style>