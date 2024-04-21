<script setup>
import { RouterLink, RouterView, useRouter} from 'vue-router'
import { useStore } from 'vuex'
import { watch } from 'vue'

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

            <SelectButton class="subjectexistswitch-homeadd" v-on:input="checkInput" v-model="subjectExistswitchValue" :options="subjectExistswitch" optionLabel="name" optionValue="value" :allowEmpty="false" aria-labelledby="basic" />

            <div class="createsubject-homeadd" v-if="subjectExistswitchValue == true" >
                <div class="inputgroup-homeadd">
                    <label>วิชา</label>
                    <Listbox v-model="subject.id" emptyMessage="ไม่มีตัวเลือกที่ใช้ได้ โปรดสร้างวิชาใหม่" :options="store.state.SubjectList" optionLabel="name" optionValue="id" listStyle="height:293px" :virtualScrollerOptions="{ itemSize: 38 }"/>
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
                
                <SelectButton class="subjectexistswitch-homeadd" pt:button:style="padding: 0.4rem 0.95rem !important;" v-model="timePeriod.day" :options="window.width>=600 ? dayselectorFULL : dayselector" optionLabel="name" optionValue="value" :allowEmpty="false" aria-labelledby="basic" />

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

            <Button label="เพิ่มคาบเรียน" @click="storeDetail();addSubject();" :disabled="disabledSubmitBtn || (store.state.addschedule.color == null)"/>
        </div>
    </div>

</template>

<script scoped>

import { uuid } from 'vue-uuid';

export default {
    data() {
        return {
            
            subject: this.$store.state.addschedule.subject,
            
            timePeriod: {
                day: this.$store.state.addschedule.time.day ? this.$store.state.addschedule.time.day : new Date().getDay(),
                startPeriod: this.$store.state.addschedule.time.startPeriod ? this.$store.state.addschedule.time.startPeriod : new Date().toTimeString().slice(0, 5),
                endPeriod: this.$store.state.addschedule.time.endPeriod ? this.$store.state.addschedule.time.endPeriod : new Date(new Date().getTime()+3600000).toTimeString().slice(0, 5),
            },
            subjectExistSelect: null,

            subjectExistswitchValue: this.$store.state.addschedule.subjectExist ? true : false,
            subjectExistswitch: [
                {name: 'สร้างวิชาใหม่', value: false},
                {name: 'เลือกวิชาที่มีอยู่', value: true},
            ],

            dayselector: [
                {name: "อา", value: 0},
                {name: "จ", value: 1},
                {name: "อ", value: 2},
                {name: "พ", value: 3},
                {name: "พฤ", value: 4},
                {name: "ศ", value: 5},
                {name: "ส", value: 6},
            ],
            dayselectorFULL: [
                {name: "อาทิตย์", value: 0},
                {name: "จันทร์", value: 1},
                {name: "อังคาร", value: 2},
                {name: "พุธ", value: 3},
                {name: "พฤหัสบดี", value: 4},
                {name: "ศุกร์", value: 5},
                {name: "เสาร์", value: 6},
            ],

            window: {
                width: 0,
                height: 0
            },

            disabledSubmitBtn: true
        }
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();

        this.checkInput()

        watch([this.subject, this.timePeriod], () => {
            this.checkInput()
        })

    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    watch: {
        subjectExistswitchValue(newValue, oldValue) {
            this.checkInput()

            return true
        },
    },
    methods: {
        storeDetail() {
            this.$store.commit('addschedule/setTime', this.timePeriod)
            this.$store.commit('addschedule/setsubjectExist', this.subjectExistswitchValue)
            this.$store.commit('addschedule/setSubject', this.subject)

            return true
        },
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;

            return true
        },
        checkInput() {
            if (this.subjectExistswitchValue == true ) {
                if (
                    this.subject.id !== null && 
                    this.timePeriod.day !== null && 
                    this.timePeriod.startPeriod !== null && 
                    this.timePeriod.endPeriod !== null
                ) {
                    this.disabledSubmitBtn = false
                    return true
                } else {
                    this.disabledSubmitBtn = true
                    return false
                }

            } else if (this.subjectExistswitchValue == false) {
                if (
                    this.subject.name !== null && this.subject.name !== undefined  && this.subject.name.trim() !== ""  &&
                    this.subject.description.room !== null && this.subject.description.room !== undefined  && this.subject.description.room.trim() !== ""  &&
                    this.subject.description.code !== null && this.subject.description.code !== undefined  && this.subject.description.code.trim() !== ""  &&
                    this.subject.description.teacher !== null && this.subject.description.teacher !== undefined  && this.subject.description.teacher.trim() !== ""  &&

                    this.timePeriod.day !== null &&
                    this.timePeriod.startPeriod !== null &&
                    this.timePeriod.endPeriod !== null
                ) {
                    this.disabledSubmitBtn = false
                    return true
                } else {
                    this.disabledSubmitBtn = true
                    return false
                }
            }
            return false
        },
        addSubject() {
            if (this.checkInput()) {
                if (this.subjectExistswitchValue == true ) {

                    this.$store.commit('ScheduleList/addSchedulePeriod', {
                        day: this.timePeriod.day,
                        detail: {
                            id: this.subject.id,
                            startPeriod: this.timePeriod.startPeriod,
                            endPeriod: this.timePeriod.endPeriod
                        }
                    })
                
                } else if (this.subjectExistswitchValue == false) {

                    const generateUUID = uuid.v4()
                    
                    const CREATESUBJECT = {
                      id: generateUUID,
                      name: this.subject.name.trim(),
                      description: {
                          room: this.subject.description.room.trim(),
                          code: this.subject.description.code.trim(),
                          teacher: this.subject.description.teacher.trim()
                      },
                      color: this.$store.state.addschedule.color
                    }
                    //console.log(CREATESUBJECT)
                    
                    this.$store.commit('SubjectList/addSubject', CREATESUBJECT)

                    //console.log(this.$store.state.SubjectList)

                    this.$store.commit('ScheduleList/addSchedulePeriod', {
                        day: this.timePeriod.day,
                        detail: {
                            id: generateUUID,
                            startPeriod: this.timePeriod.startPeriod,
                            endPeriod: this.timePeriod.endPeriod
                        }
                    })
                }
            }
            this.$router.push({ path: '/' });
            this.$store.commit('addschedule/clearState')
            return true
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
.subjectexistswitch-homeaddbtn{
    padding: 0.2rem 1rem !important;
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

.subjectlistbox-homeadd {
    display: flex;
    align-items: center;
    flex-direction: row;
    column-gap: 5px;
}
</style>