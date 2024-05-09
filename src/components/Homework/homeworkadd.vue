<script setup>
import { ref } from "vue";
import Editor from 'primevue/editor';

import { useStore } from 'vuex'

import InputText from 'primevue/inputtext';
import Listbox from 'primevue/listbox';
import SelectButton from 'primevue/selectbutton';
import Dropdown from 'primevue/dropdown';

import Calendar from 'primevue/calendar';
import Button from 'primevue/button';

const buttondisplay = ref();
const icondisplay = ref();
const templatedisplay = ref();



const store = useStore()

</script>
<template>
    <div>
        <div class="homeworkadd-allinput">

            <div class="homeworkadd-inputgroup">
                <label for="username">ชื่องาน*</label>
                <InputText id="username" v-model="homeworkdetail.name" />
            </div>

            <div class="homeworkadd-inputgroup">
                <label>เลือกวิชา*</label>
                <Dropdown  v-model="homeworkdetail.subjectid" emptyMessage="ไม่มีตัวเลือกที่ใช้ได้ โปรดสร้างวิชาใหม่" :options="store.state.SubjectList" placeholder="โปรดเลือกวิชา" optionLabel="name" optionValue="id" />
            </div>

            <div class="homeworkadd-inputgroup">
                <label>วันที่กำหนดส่ง*</label>
                <Calendar v-model="homeworkdetail.duedate" dateFormat="dd/mm/yy" showIcon/>
            </div>

            <div class="homeworkadd-inputgroup">
                <label>รายละเอียด</label>
                <Editor class="homeworkadd-Editor" v-model="homeworkdetail.description" editorStyle="height: 320px" >
                    <template v-slot:toolbar>
                        <span class="ql-formats">
                            <select class="ql-size" style="width: 110px;">
                                <option value="huge">Heading</option>
                                <option value="large">Subheading</option>
                                <option selected></option>
                                <option value="small">Small</option>
                            </select>
                        </span>
                        <span class="ql-formats">
                            <button class="ql-bold"></button>
                            <button class="ql-italic"></button>
                            <button class="ql-underline"></button>
                            <button class="ql-strike"></button>
                        </span>
                        <span class="ql-formats">
                          <button class="ql-script" value="sub"></button>
                          <button class="ql-script" value="super"></button>
                        </span>
                        <span class="ql-formats">
                            <button class="ql-blockquote"></button>
                        </span>
                        <span class="ql-formats">
                            <button class="ql-list" value="ordered"></button>
                            <button class="ql-list" value="bullet"></button>
                            <button class="ql-indent" value="-1"></button>
                            <button class="ql-indent" value="+1"></button>
                        </span>
                    </template>
                </Editor>
            </div>
            <Button label="เพิ่มการบ้าน" @click="addHomework();" :disabled="homeworkdetail.name.trim() === '' || homeworkdetail.subjectid === null || homeworkdetail.duedate === null"/>
        </div>
    </div>
</template>

<script>
import { uuid } from 'vue-uuid';

export default {
    data() {
        return {
            
            homeworkdetail: {
                name: '',
                subjectid: null,
                duedate: null,
                description: '',
                finish: false
            },
        }
    },
    methods: {
        addHomework() {
            if (!(this.homeworkdetail.name.trim() === '' || this.homeworkdetail.subjectid === null || this.homeworkdetail.duedate === null)) {
                const generateUUID = uuid.v4()

                const CREATEHOMEWORK = {
                    id: generateUUID,
                    name: this.homeworkdetail.name.trim(),
                    subjectid: this.homeworkdetail.subjectid,
                    duedate: `${String(new Date(this.homeworkdetail.duedate).getFullYear())}-${String(new Date(this.homeworkdetail.duedate).getMonth()+1).padStart(2, '0')}-${String(new Date(this.homeworkdetail.duedate).getDate()).padStart(2, '0')}`,
                    description: this.homeworkdetail.description,
                    finish: false
                }
                //console.log(CREATESUBJECT)

                this.$store.commit('HomeworkList/addHomework', CREATEHOMEWORK)

                this.$router.push({ path: '/homework' });
            }
            
            return true
        }
    }
}
</script>

<style scoped>
.homeworkadd-allinput {
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
    row-gap: 15px;
}
.homeworkadd-inputgroup {
    display: flex;
    flex-direction: column;
    row-gap: 2px;
}
p strong {
    font-weight: 600 !important;
}
</style>


