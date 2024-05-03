<script setup>
import { ref } from "vue";
import Editor from 'primevue/editor';

import { useStore } from 'vuex'

import InputText from 'primevue/inputtext';
import Listbox from 'primevue/listbox';

import Calendar from 'primevue/calendar';
import Button from 'primevue/button';
const buttondisplay = ref();
const icondisplay = ref();
const templatedisplay = ref();



const store = useStore()

</script>
<template>
    <div class="card flex flex-wrap gap-3 p-fluid">
        <div class="flex-auto">
            <label for="buttondisplay" class="font-bold block mb-2"> ใส่วันที่กำหนดส่ง </label>
            <Calendar v-model="buttondisplay" showIcon :showOnFocus="false" inputId="buttondisplay" />
            <br>
            <label for="username">ใส่ชื่อวิชา</label>
                <InputText id="username" v-model="value" />
            <br>
            <br> <label for="username">ใส่ชื่องาน</label>
                <InputText id="username" v-model="value" />
        </div>
    </div>
       
    <div>
        <br>
        <label for="username">ใส่ลายละเอียด</label>
        <Editor v-model="value" editorStyle="height: 320px" />
    </div>
        
    <div class="card flex flex-wrap gap-3 p-fluid">
        <div class="flex-auto">
        <br><Button label="เพิ่มการบ้าน" />
        </div>
    </div>
      
</template>

<script>
export default {
    data() {
        return {
            
            subjectid: null
        }
    },
}
</script>

