<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { Label } from 'radix-vue'
</script>

<template>
    
    <div class="backdrop-homeadd">
        <div class="main-homeadd">
            <RouterLink class="closebtn-homeadd" to="/">
                <svg height="100%" viewBox="0 0 20 21"  xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.711 12.9237L12.65 13.9847L10.249 11.5857L7.849 13.9817L6.789 12.9207L9.188 10.5257L6.789 8.1277L7.85 7.06667L10.25 9.4657L12.651 7.06867L13.711 8.1307L11.311 10.5257L13.711 12.9237ZM10.25 0.784668C4.874 0.784668 0.5 5.15867 0.5 10.5347C0.5 15.9107 4.874 20.2847 10.25 20.2847C15.626 20.2847 20 15.9107 20 10.5347C20 5.15867 15.626 0.784668 10.25 0.784668Z"/>
                </svg>
            </RouterLink>

            <div class="header-homeadd">เพิ่มคาบเรียน</div>

              <Label class="Label" for="name">วิชา</Label>
              <input
                id="name"
                class="Input"
                defaultValue="Pedro Duarte"
              >


        </div>
    </div>
</template>

<style scoped>


.backdrop-homeadd {
    position: fixed;

    background-color: rgba(0, 0, 0, 0.6);

    bottom: 0;
    left: 0;
    height: 200vh;
    width: 100vw;
    z-index: 10;

    display: flex;
    justify-content: center;
    align-items: end;

}
.main-homeadd {
    margin: 0 auto;
    position: absolute;
    max-width: 62.5rem;
    width: 100vw;
    height: 90vh;
    background-color: #ffffff;
    bottom: 0;
    border-top-left-radius: 39px;
    border-top-right-radius: 39px;

    -webkit-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
    -moz-box-shadow: rgba(0,0,0,0.3) 0 1px 3px;
    box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;

    padding: 20px 23px 0 23px;
}
.closebtn-homeadd {
    position: absolute;
    top: 20px;
    right: 23px;
    height: 26px;
    fill: #d1d1d1;
    border-radius: 100%;

    z-index: 12;
}

.header-homeadd {
    text-align: center;
    font-size: 24px;
    font-weight: 500;
    font-family: "Prompt", sans-serif;
    line-height: 24px;
}

.Input {
  width: 200px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 10px;
  height: 35px;
  font-size: 15px;
  line-height: 1;

  background-color: rgba(0, 0, 0, 0);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
}
.Input:focus {
  box-shadow: 0 0 0 2px black;
}
.Input::selection {
  background-color: rgba(0, 0, 0, 0.9);

}
</style>