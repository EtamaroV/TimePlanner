<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue';

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

    <RouterView />

  </div>
  
  <NavBar/>
</template>


<style>
.ContentZone {
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-content: center;
  max-width: 62.5rem;
  width: calc(100% - 1.5rem);
}
</style>