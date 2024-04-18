<script setup>
import { RouterLink, RouterView, useRouter} from 'vue-router'
import { useStore } from 'vuex'

import Divider from 'primevue/divider';

const router = useRouter()
const store = useStore()

</script>

<template>
    
    <div class="flexcenter-color">
        <Divider align="center" type="dotted">
            <b>เลือกสี</b>
        </Divider>
        <div class="grid-color">
            <button class="colorbtn-color" v-for="color in colorList" @click="store.commit('addschedule/setColor', color);router.push({ path: '/add' });" :class="{ active: color==store.state.addschedule.color }" :style="{backgroundColor:color}"></button>
        </div>
    </div>
</template>

<script scoped>
export default {
    data() {
        return {
            colorList: [
                '#8979ba','#9b74b3','#b890cc','#c5a1d1','#cdb3d9',
                '#bf7eb8','#e085b9','#ec8ebe','#e2a5c6','#deb4c8',
                '#f497a9','#f59b9b','#f8a690','#f8b28c','#f2ac86',
                '#f9bc87','#fccd7d','#fbe283','#fcf69f','#fff8b2',
                '#9dd87e','#a6df8e','#bae1a8','#c8e7bb','#ddf7d1',
                '#c7d290','#b2ca8c','#93c5a0','#a1c9a7','#b5d7be',
                '#82ccb3','#a0d8c5','#75cbca','#90dbd6','#6ec7cf',
                '#7b89c6','#72a8dc','#b0cee8','#b0cee8','#c5e3fd',
                '#e27582','#e6929a','#eab6c0','#f2c9cf','#ffd7df',
            ]
        }
    }
}
</script>

<style scoped>
.flexcenter-color {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 20px;
    margin-top: 10px;
    margin-bottom: 25px;
}
.grid-color {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 15px;
    width: 90%;
}
.colorbtn-color {
    width: 0;
    height: 0;
    padding: 50%;
    border: none;
    border-radius: 17px;

    cursor: pointer;
    transition: filter 0.1s ease;
}
.colorbtn-color:hover {

    filter: brightness(85%);
}
.colorbtn-color.active {
    padding: calc(50% - 3px);
    border: 3px solid #61666d;
}

</style>