<script setup>
import { RouterLink, RouterView, useRouter} from 'vue-router'
import { useStore } from 'vuex'

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import InputGroup from 'primevue/inputgroup';
import SelectButton from 'primevue/selectbutton';
import Listbox from 'primevue/listbox';
import Divider from 'primevue/divider';

const router = useRouter()
const store = useStore()

const getContrast = (hexcolor) => {

    if (hexcolor == null) {
        return null
    }

    // If a leading # is provided, remove it
    if (hexcolor.slice(0, 1) === '#') {
        hexcolor = hexcolor.slice(1);
    }

    // Convert to RGB value
    var r = parseInt(hexcolor.substr(0,2),16);
    var g = parseInt(hexcolor.substr(2,2),16);
    var b = parseInt(hexcolor.substr(4,2),16);

    // Get YIQ ratio
    var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

    // Check contrast
    return (yiq >= 180) ? 'black' : 'white';

};

</script>

<template>
    
    <div>
        <div class="allinput-homeadd">

            <SelectButton class="subjectexistswitch-homeadd" v-model="subjectExistswitchValue" :options="subjectExistswitch" optionLabel="name" optionValue="value" :allowEmpty="false" aria-labelledby="basic" />

            <div class="createsubject-homeadd" v-if="subjectExistswitchValue == true" >
                <div class="inputgroup-homeadd">
                    <label>วิชา</label>
                    <Listbox v-model="subject.id" :options="store.state.SubjectList" optionLabel="name" optionValue="id" listStyle="height:293px" :virtualScrollerOptions="{ itemSize: 38 }"/>
                </div>
            </div>

            <div class="createsubject-homeadd" v-else-if="subjectExistswitchValue == false">
                
                <div class="inputgroup-homeadd">
                    <label>ชื่อวิชา</label>
                    <InputText v-model="subject.name" type="text" autocapitalize="off" autocomplete="off" autocorrect="off"/>
                </div>
                
                <div class="inputgroup-homeadd">
                    <label>รหัสวิชา</label>
                    <InputText v-model="subject.description.code" autocapitalize="off" autocomplete="off" autocorrect="off"/>
                </div>

                <div class="inputgroup-homeadd">
                    <label>ห้อง</label>
                    <InputText v-model="subject.description.room" autocapitalize="off" autocomplete="off" autocorrect="off"/>
                </div>

                <div class="inputgroup-homeadd">
                    <label>ครูผู้สอน</label>
                    <InputText v-model="subject.description.teacher" autocapitalize="off" autocomplete="off" autocorrect="off"/>
                </div>

            </div>

            <Divider />

            <div class="timeinput-homeadd">
                <div class="inputgroup-homeadd">
                    <label>เริ่มคาบ</label>
                    <InputText type="time" v-model="timePeriod.startPeriod" :defaultValue="new Date().toTimeString().slice(0, 5)"/>
                </div>
                <div class="inputgroup-homeadd">
                    <label>จบคาบ</label>
                    <InputText type="time" v-model="timePeriod.endPeriod" :defaultValue="new Date(new Date().getTime()+3600000).toTimeString().slice(0, 5)"/>
                </div>

                <Divider />

                <Button class="colorSelectBtn-homeadd" label="เลือกสี" @click="storeDetail();router.push({ path: '/add/color' });" outlined :style="{backgroundColor: store.state.addschedule.color, borderColor: store.state.addschedule.color, color: getContrast(store.state.addschedule.color)}"/>
            </div>

            

            <br>

            <Button label="เพิ่มคาบเรียน" @click="storeDetail();"  />
        </div>
    </div>

</template>

<script scoped>



export default {
    data() {
        return {
            
            subject: this.$store.state.addschedule.subject,
            
            timePeriod: {
                startPeriod: this.$store.state.addschedule.time.startPeriod ? this.$store.state.addschedule.time.startPeriod : new Date().toTimeString().slice(0, 5),
                endPeriod: this.$store.state.addschedule.time.endPeriod ? this.$store.state.addschedule.time.endPeriod : new Date(new Date().getTime()+3600000).toTimeString().slice(0, 5),
            },
            subjectExistSelect: null,

            subjectExistswitchValue: this.$store.state.addschedule.subjectExist ? true : false,
            subjectExistswitch: [
                {name: 'สร้างวิชาใหม่', value: false},
                {name: 'เลือกวิชาที่มีอยู่', value: true},
            ]
        }
    },
    methods: {
        storeDetail() {
            this.$store.commit('addschedule/setTime', this.timePeriod)
            this.$store.commit('addschedule/setsubjectExist', this.subjectExistswitchValue)
            this.$store.commit('addschedule/setSubject', this.subject)
        }
    }
}
</script>

<style scoped>
.allinput-homeadd {
    display: flex;
    flex-direction: column;
    row-gap: 2px;
    margin-bottom: 25px;
}
.subjectexistswitch-homeadd {

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
    margin-bottom: 15px;
}

.timeinput-homeadd {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    margin-bottom: 15px;
    margin-top: 15px;
}

.inputgroup-homeadd {
    display: flex;
    flex-direction: column;
    row-gap: 2px;
}
.colorSelectBtn-homeadd {
    transition: filter 0.1s ease;
}
.colorSelectBtn-homeadd:hover {
    filter: brightness(85%);
}
</style>