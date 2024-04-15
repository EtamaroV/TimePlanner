<script setup>
import { RouterLink, RouterView, useRouter} from 'vue-router'
import { useStore } from 'vuex'

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import InputGroup from 'primevue/inputgroup';
import SelectButton from 'primevue/selectbutton';
import Listbox from 'primevue/listbox';

const router = useRouter()
const store = useStore()

</script>

<template>
    
    <div>
        <div class="allinput-homeadd">


            
            <SelectButton class="subjectexistswitch-homeadd" v-model="subjectExistswitchValue" :options="subjectExistswitch" optionLabel="name" optionValue="value" :allowEmpty="false" aria-labelledby="basic" />

            <label v-if="subjectExistswitchValue == 'EXIST'"  for="subjectname">วิชา</label>
            <Listbox v-if="subjectExistswitchValue == 'EXIST'" v-model="subjectExistSelect" :options="store.state.SubjectList" optionLabel="name" optionValue="id" listStyle="height:250px" :virtualScrollerOptions="{ itemSize: 38 }"/>
            
            <div class="createsubject-homeadd" v-else-if="subjectExistswitchValue == 'CREATE'">
                
                <div class="inputgroup-homeadd">
                    <label for="subjectname">ชื่อวิชา</label>
                    <InputText/>
                </div>
                
                <div class="inputgroup-homeadd">
                    <label for="subjectname">รหัสวิชา</label>
                    <InputText/>
                </div>

                <div class="inputgroup-homeadd">
                    <label for="subjectname">ห้อง</label>
                    <InputText/>
                </div>

                <div class="inputgroup-homeadd">
                    <label for="subjectname">ครูผู้สอน</label>
                    <InputText/>
                </div>

            </div>

            <br>

            <Button label="TEST" @click="store.commit('addschedule/setSubjectName', 'ทดสอบระบบ');"  />
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            subjectExistSelect: null,

            subjectExistswitchValue: "CREATE",
            subjectExistswitch: [
                {name: 'สร้างวิชาใหม่', value: "CREATE"},
                {name: 'เลือกวิชาที่มีอยู่', value: "EXIST"},
            ]
        }
    }
}
</script>

<style scoped>
.allinput-homeadd {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 2px;
}
.subjectexistswitch-homeadd {
    margin-bottom: 5px;
    align-self: center;
}
.subjectexistswitch-homeadd .p-button {
    height: 5px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {

    opacity: 0;
        
}

.createsubject-homeadd {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 15px;
}

.inputgroup-homeadd {
    display: flex;
    flex-direction: column;
    row-gap: 2px;
}
</style>