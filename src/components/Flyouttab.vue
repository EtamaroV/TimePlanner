<script setup>
import { RouterLink, RouterView, useRouter} from 'vue-router'

const router = useRouter()

import Button from 'primevue/button';

defineProps(['title', 'close_route'])

const goBack = () => {
    // Get the current route path
    let currentPath = router.currentRoute.value.path
    
    // Remove the last segment (directory) from the path
    let segments = currentPath.split('/');
    segments.pop(); // Remove the last segment
    let newPath = segments.join('/') + '/'
    
    // Go to the new path
    router.push({ path: newPath });
}
</script>

<template>
    
    <div class="backdrop-flyouttab">
        <div class="BackClickDetector-flyouttab" @click="router.push({ path: close_route })"></div>
        <div class="main-flyouttab">
            <button class="backbtn-flyouttab" @click="goBack" v-if="router.currentRoute.value.path.split('/').length > 2 && (router.currentRoute.value.path.split('/').slice(-1)[0] !== '')">
                <svg height="100%" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0L10.2798 0.00384421C15.6706 0.152163 20 4.57356 20 10C20 15.51 15.52 20 10 20C4.49 20 0 15.51 0 10C0 4.48 4.49 0 10 0ZM11.98 6C11.68 5.7 11.21 5.7 10.92 6L7.43 9.47C7.29 9.61 7.21 9.8 7.21 10C7.21 10.2 7.29 10.39 7.43 10.53L10.92 14C11.06 14.15 11.25 14.22 11.44 14.22C11.64 14.22 11.83 14.15 11.98 14C12.27 13.7 12.27 13.23 11.97 12.94L9.02 10L11.97 7.06C12.27 6.77 12.27 6.29 11.98 6Z"/>
                </svg>
            </button>
            <RouterLink class="closebtn-flyouttab" :to="close_route">
                <svg height="100%" viewBox="0 0 20 21"  xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.711 12.9237L12.65 13.9847L10.249 11.5857L7.849 13.9817L6.789 12.9207L9.188 10.5257L6.789 8.1277L7.85 7.06667L10.25 9.4657L12.651 7.06867L13.711 8.1307L11.311 10.5257L13.711 12.9237ZM10.25 0.784668C4.874 0.784668 0.5 5.15867 0.5 10.5347C0.5 15.9107 4.874 20.2847 10.25 20.2847C15.626 20.2847 20 15.9107 20 10.5347C20 5.15867 15.626 0.784668 10.25 0.784668Z"/>
                </svg>
            </RouterLink>

            <div class="header-flyouttab">{{title}}</div>

            <div class="content-flyouttab">
                <router-view v-slot="{ Component }">
                  <transition name="fade" mode="out-in">
                    <component :is="Component" />
                  </transition>
                </router-view>
            </div>

        </div>
    </div>
</template>

<style scoped>


.backdrop-flyouttab {
    position: fixed;

    bottom: 0;
    left: 0;
    height: 200vh;
    width: 100vw;
    z-index: 10;

    display: flex;
    justify-content: center;
    align-items: end;

}
.main-flyouttab {

    margin: 0 auto;
    position: absolute;
    max-width: 62.5rem;
    width: 100vw;
    height: calc(100vh - env(safe-area-inset-top) - 20px);
    background-color: #ffffff;
    bottom: 0;
    border-top-left-radius: 39px;
    border-top-right-radius: 39px;

    -webkit-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
    -moz-box-shadow: rgba(0,0,0,0.3) 0 1px 3px;
    box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;

    padding: 23px 0 0 0;
}
.closebtn-flyouttab {
    position: absolute;
    top: 20px;
    right: 23px;
    height: 26px;
    fill: #d1d1d1;
    border-radius: 100%;

    z-index: 12;
}

.backbtn-flyouttab {
    position: absolute;
    top: 20px;
    left: 23px;
    height: 26px;
    fill: #d1d1d1;

    border-radius: 26px;

    z-index: 12;
    padding: 0;
    outline: none;
    border: none;
    cursor: pointer;
    background-color: transparent;
}

.header-flyouttab {
    text-align: center;
    font-size: 24px;
    font-weight: 500;
    font-family: "Prompt", sans-serif;
    line-height: 24px;
}

.BackClickDetector-flyouttab {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.6);
    left: 0;
    top: 0;
}

.allinput-flyouttab {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 2px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {

    opacity: 0;
        
}

.content-flyouttab {
    overflow: auto;
    height: calc(100% - 20px);
    margin-top: 10px;

    padding: 0 23px 0 23px;
}


.content-flyouttab::-webkit-scrollbar {
    width: 15px;
}
.content-flyouttab::-webkit-scrollbar-track {
    background-color: transparent;
}
.content-flyouttab::-webkit-scrollbar-thumb {
    background-color: #d1d1d1;
}
.content-flyouttab::-webkit-scrollbar-thumb {
    background-color: #d1d1d1;
    border-radius: 20px;
    border: 5px solid transparent;
    background-clip: content-box;
}
.content-flyouttab::-webkit-scrollbar-thumb:hover {
    background-color: #c2c2c2;
}
</style>