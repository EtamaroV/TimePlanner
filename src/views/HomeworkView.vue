<script setup>
import { RouterLink, RouterView, useRouter} from 'vue-router'
import { ref } from 'vue';
import { useStore } from 'vuex'

import Editor from 'primevue/editor';
import Button from 'primevue/button';

const router = useRouter()
const store = useStore()

</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="slide" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>

  <div class="homework-main">
    <div class="homework-header">
      <div class="homework-headerlabel">การบ้าน</div>
      <div class="topbtnzone-home">

        <RouterLink class="homework-addbtn" to="homework/add">
          <svg height="100%" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.6923 1.69231C12.6923 0.75625 11.9361 0 11 0C10.0639 0 9.30769 0.75625 9.30769 1.69231V9.30769H1.69231C0.75625 9.30769 0 10.0639 0 11C0 11.9361 0.75625 12.6923 1.69231 12.6923H9.30769V20.3077C9.30769 21.2437 10.0639 22 11 22C11.9361 22 12.6923 21.2437 12.6923 20.3077V12.6923H20.3077C21.2437 12.6923 22 11.9361 22 11C22 10.0639 21.2437 9.30769 20.3077 9.30769H12.6923V1.69231Z"
              fill="#484C52" />
          </svg>
        </RouterLink>

      </div>
    </div>

    <div class="homework-content">

      <div class="homework-dateholder" v-for="hwidarray,date in store.state.HomeworkList.dateseperate" >

        <div class="homework-datelabel">{{new Date(date).toLocaleDateString('th-TH', {year: 'numeric',month: 'short',day: 'numeric'})}}</div>

        <div class="homework-card" v-for="hwid,index in hwidarray" :class="{ 'homework-card-active': opencard_num === hwid }" :style="{'background-color': store.state.SubjectList.find(({ id }) => id === store.state.HomeworkList.List.find(({ id }) => id === hwid).subjectid).color}">
          <div class="homework-cardtop">
            <div class="homework-cardtopleft">
              <div class="homework-name">{{ store.state.HomeworkList.List.find(({ id }) => id === hwid).name }}</div>
              <div class="homework-subject">{{ store.state.SubjectList.find(({ id }) => id === store.state.HomeworkList.List.find(({ id }) => id === hwid).subjectid).name }}</div>
            </div>
            <div class="homework-cardtopright">
              <button class="homework-cardmorebtn" @click="opencard(hwid)">
                <svg width="100%" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.1018 1L8.13672 8L1.17169 1" stroke="#484C52" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </button>

            </div>
          </div>
          <div class="homework-cardmore">
            <div class="homework-descriptiontitle" v-if="store.state.HomeworkList.List.find(({ id }) => id === hwid).description.trim() !== ''">รายละเอียด</div>
            <div class="homework-description" v-if="store.state.HomeworkList.List.find(({ id }) => id === hwid).description.trim() !== ''" v-html="store.state.HomeworkList.List.find(({ id }) => id === hwid).description"></div>

            <Button v-if="!store.state.HomeworkList.List.find(({ id }) => id === hwid).finish" style="float: right" label="ทำเครื่องหมายว่าเสร็จสิ้น" 
              @click="finishmark(hwid, true)"
              :pt="{
                  root: {
                      style: {
                          padding: '0.3rem 0.75rem',
                          'font-size': '14px'
                      }
                  }
              }"
            />
            <Button v-else-if="store.state.HomeworkList.List.find(({ id }) => id === hwid).finish" style="float: right" severity="secondary" label="ยกเลิก" 
              @click="finishmark(hwid, false)"
              :pt="{
                  root: {
                      style: {
                          padding: '0.3rem 0.75rem',
                          'font-size': '14px'
                      }
                  }
              }"
            />
          </div>
        </div>

      </div>

    </div>

  </div>

</template>

<script scoped>
export default {
  data() {
    return {
      opencard_num: null,
      homeworkatdate: null
    }
  },
  beforeDestroy() {

  },
  created() {
 
  },
  methods: {
    opencard(no) {
      if (no === this.opencard_num) {
        this.opencard_num = null
      } else {
        this.opencard_num = no
      }
    },

    finishmark(id, isfinish) {
      this.$store.commit('HomeworkList/setFinish', {
        id: id,
        isfinish: isfinish
      })
    }
  }
};
</script>

<style>
.homework-main {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: calc(60px + env(safe-area-inset-bottom));
}
.homework-header {
  padding: 10px 10px 0 10px;

  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  
  top: env(safe-area-inset-top);
  position: sticky;
}
.homework-headerlabel {
    font-size: 36px;
    font-weight: 500;
    font-family: "Prompt", sans-serif;

}
.homework-deletebtn {
    height: 22px;
}
.homework-addbtn {
    height: 22px;
}

.homework-content {
  display: flex;
  flex-direction: column;
  row-gap: 4px;
}
.homework-dateholder {
  display: flex;
  flex-direction: column;
  row-gap: 4px;
}
.homework-dateholder:not(:first-child) {
  margin-top: 15px;
}

.homework-datelabel {
  padding: 0 10px;
  font-size: 18px;
  font-weight: 300;
  font-family: "Prompt", sans-serif;
  color: #000000;
  opacity: 70%;
}

.homework-card {
  display: flex;
  flex-direction: column;
  padding: 7px 14px 5px 14px;
  border-radius: 9px;
  
}
.homework-cardtop {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

}
.homework-name {
  font-size: 18px;
  font-weight: 400;
  font-family: "Prompt", sans-serif;
}
.homework-subject {
  font-size: 16px;
  font-weight: 300;
  font-family: "Prompt", sans-serif;
  margin-top: -5px;
  opacity: 80%;
}
.homework-cardmore {
  max-height: 0;

  overflow:hidden;
  transition: max-height 0.25s ease;
  margin-bottom: 5px;
}
.homework-card-active .homework-cardmore {

  max-height: none;

}
.homework-cardmorebtn {
  transform: rotate(0deg);
  transition: transform 0.15s ease;

  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
  

  width: 30px;
  height: 30px;
  padding: 0 6px;
  border-radius: 100%;
  align-items: center;

  display: flex;
  align-items: center;
}
.homework-card-active .homework-cardmorebtn {
  transform: rotate(180deg);
  
}








.homework-description {
  background-color: white;
  margin: 5px 0 9px 0;
  padding: 5px 10px;
  border-radius: 4px;

  /*box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;*/
}

.homework-description .ql-size-huge {
    font-size: 2.5rem;
}

.homework-description .ql-size-large {
    font-size: 1.5rem;
}

.homework-description .ql-size-small {
    font-size: 0.75rem;
}

.homework-description blockquote {
    border-left: 4px solid #ccc;
    margin-bottom: 5px;
    margin-top: 5px;
    padding-left: 16px;
}

.homework-description .ql-indent-1 {
    padding-left: 3rem;
}
.homework-description .ql-indent-2 {
    padding-left: 6rem;
}
.homework-description .ql-indent-3 {
    padding-left: 9rem;
}
.homework-description .ql-indent-4 {
    padding-left: 12rem;
}
.homework-description .ql-indent-5 {
    padding-left: 15rem;
}
.homework-description .ql-indent-6 {
    padding-left: 18rem;
}
.homework-description .ql-indent-7 {
    padding-left: 21rem;
}
.homework-description .ql-indent-8 {
    padding-left: 24rem;
}

</style>
