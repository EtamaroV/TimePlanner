<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue';

import { useStore } from 'vuex'

import BlockUI from 'primevue/blockui';
import Divider from 'primevue/divider';
import Button from 'primevue/button';


const store = useStore()
//store.commit('SubjectList/initialiseSubjectList')

function preventBrowserHistorySwipeGestures() {
  function touchStart(ev) {
    if (ev.touches.length === 1) {
      const touch = ev.touches[0];
      if (
        touch.clientX < window.innerWidth * 0.05 ||
        touch.clientX > window.innerWidth * 0.95
      ) {
        ev.preventDefault();
      }
    }
  }

  // Safari defaults to passive: true for the touchstart event, so we need  to explicitly specify false
  // See https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
  const options= { passive: false };

  window.addEventListener("touchstart", touchStart, options);

  return () => window.removeEventListener("touchstart", touchStart, options);
  
}

preventBrowserHistorySwipeGestures();


</script>

<template>
  
  <div class="ContentZone">

    <BlockUI :blocked="isInstalled===false" fullScreen pt:mask:style="border-radius: 0px; !important;" />
    
    <RouterView />

  </div>

  <div class="installtutorial" v-if="isInstalled===false">

    <div class="topzone">
      <div class="leftzone">
        <h1>TimePlanner</h1>
        <h3>ไทม์แพลนเนอร์</h3>
      </div>
      <div class="rightzone" v-if="(os !== 'iOS' && os !== 'iPadOS') || showbtn ">
        <Button label="ติดตั้ง" id="installPWABTN" pt:root:style="padding: 0.3rem 1rem !important;" />
      </div>
    </div>

    <div v-if="os === 'iOS' || os === 'iPadOS'">
      <br>
      <Divider />
      <br>
      
      <p style="font-size: 16px;">
        วิธีติดตั้งแอป "TimePlanner" จาก Safari บน {{os}}
      </p>

      <br>

      <p style="font-size: 16px;">
      <svg width="16" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.3684 6.79411C5.7824 6.79411 6.1184 7.13011 6.1184 7.54411C6.1184 7.95811 5.7824 8.29411 5.3684 8.29411H4.4354C2.8164 8.29411 1.5004 9.61011 1.5004 11.2281V16.1031C1.5004 17.7221 2.8164 19.0381 4.4354 19.0381H15.5654C17.1834 19.0381 18.5004 17.7221 18.5004 16.1031V11.2191C18.5004 9.60611 17.1884 8.29411 15.5764 8.29411H14.6334C14.2194 8.29411 13.8834 7.95811 13.8834 7.54411C13.8834 7.13011 14.2194 6.79411 14.6334 6.79411H15.5764C18.0154 6.79411 20.0004 8.77911 20.0004 11.2191V16.1031C20.0004 18.5491 18.0104 20.5381 15.5654 20.5381H4.4354C1.9904 20.5381 0.000396729 18.5491 0.000396729 16.1031V11.2281C0.000396729 8.78311 1.9904 6.79411 4.4354 6.79411H5.3684ZM10.531 0.22171L13.447 3.14971C13.739 3.44371 13.738 3.91771 13.445 4.20971C13.151 4.50171 12.677 4.50171 12.385 4.20771L10.7494 2.56646L10.75 13.541H9.25L9.2494 2.56646L7.616 4.20771C7.47 4.35571 7.277 4.42871 7.085 4.42871C6.894 4.42871 6.702 4.35571 6.556 4.20971C6.263 3.91771 6.261 3.44371 6.554 3.14971L9.469 0.22171C9.75 -0.0612895 10.25 -0.0612895 10.531 0.22171Z" fill="black"/>
      </svg>
      1. กดปุ่มแชร์
      </p>

      <p style="font-size: 16px;">
      <svg width="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 7.3273V14.6537" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.6667 10.9905H7.33334" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6857 1H6.31429C3.04762 1 1 3.31208 1 6.58516V15.4148C1 18.6879 3.0381 21 6.31429 21H15.6857C18.9619 21 21 18.6879 21 15.4148V6.58516C21 3.31208 18.9619 1 15.6857 1Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      2.เลื่อนขึ้น และกดเพิ่มไปยังหน้าจอโฮม 
      </p>
    </div>

  </div>
  
  <NavBar/>
</template>

<script scope>
export default {
  data() {
    return {
      isInstalled: null,
      os: null,
      showbtn: false
    };
  },
  beforeCreate() {
		this.$store.commit('SubjectList/initialiseSubjectList');

    this.$store.commit('ScheduleList/initialiseScheduleList');

    this.$store.commit('HomeworkList/initialiseHomeworkList');

    this.$store.commit('GoalTimer/initialiseGoalTimer');
	},
  mounted() {
    if (window.matchMedia('(display-mode: standalone)').matches) {
      this.isInstalled = true;
    } else {
      this.isInstalled = false;
    }

    window.matchMedia('(display-mode: standalone)').addEventListener('change', (event) => {
      this.isInstalled = event.matches;
    });

    const platform = window.navigator.platform,
          macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
          windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
          iosPlatforms = ['iPhone', 'iPod'],
          ipadosPlatforms = ['iPad']

    if (macosPlatforms.indexOf(platform) !== -1) {
      this.os = 'macOS';
    } else if (ipadosPlatforms.indexOf(platform) !== -1) {
      this.os = 'iPadOS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      this.os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      this.os = 'Windows';
    } else if (/Android/.test(userAgent)) {
      this.os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
      this.os = 'Linux';
    } else {
      this.os = platform;
    }


    window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();

            const deferredPrompt = e;

            const installButton = document.getElementById('installPWABTN')

            installButton.addEventListener('click', () => {

                deferredPrompt.prompt();

                deferredPrompt.userChoice.then(choiceResult => {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('App installed');
                        
                    } else {
                        console.log('App installation declined');
                    }

                    installButton.style.display = 'none';
                });

            });
            this.showbtn = true
            
        });

  }
}
</script>


<style scoped>
.ContentZone {
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-content: center;
  max-width: 62.5rem;
  width: calc(100% - 1.5rem);
  padding-top: env(safe-area-inset-top);
}

.installtutorial {
  position: fixed;
  background-color: white;
  z-index: 2000;
  
  width: 100%;
  max-width: 62.5rem;

  padding: 23px 30px 50px 30px;

  border-top-left-radius: 39px;
  border-top-right-radius: 39px;


  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.topzone {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  height: 80px;
}
</style>