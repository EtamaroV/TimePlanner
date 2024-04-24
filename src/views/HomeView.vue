<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useStore } from 'vuex'

import { Swiper, SwiperSlide } from 'swiper/vue'



import 'swiper/css';

import ConfirmDialog from 'primevue/confirmdialog';
import { useConfirm } from "primevue/useconfirm";

const confirm = useConfirm();


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
<ConfirmDialog></ConfirmDialog>
<router-view v-slot="{ Component }">
  <transition name="slide" mode="out-in">
    <component :is="Component" />
  </transition>
</router-view>
<div class="main-home">
    <div class="header-home">
        <div class="zonetop-home">
            <div class="datelabel-home">{{ day[currentSlide] }}</div>
            <div class="topbtnzone-home">

                <div class="deletebtn-home" @click="binmode = !binmode">
                    <svg height="100%" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.4225 7.36685C15.6154 7.36685 15.7905 7.46255 15.9288 7.62424C16.0577 7.79694 16.1227 8.01144 16.1038 8.23804C16.1038 8.31284 15.5881 15.7268 15.2936 18.8474C15.1092 20.7625 14.0232 21.9252 12.3943 21.9571C11.1418 21.989 9.91747 22 8.712 22C7.4322 22 6.18062 21.989 4.96574 21.9571C3.39139 21.9142 2.3045 20.7306 2.12947 18.8474C1.82645 15.7158 1.32018 8.31284 1.31077 8.23804C1.30136 8.01144 1.36535 7.79694 1.49521 7.62424C1.62319 7.46255 1.80763 7.36685 2.00149 7.36685H15.4225ZM10.7061 0C11.5615 0 12.3257 0.678693 12.5468 1.64668L12.7049 2.44968C12.8329 3.10417 13.3316 3.56726 13.9057 3.56726H16.7269C17.1033 3.56726 17.4167 3.92256 17.4167 4.37466V4.79265C17.4167 5.23375 17.1033 5.60004 16.7269 5.60004H0.690719C0.313364 5.60004 0 5.23375 0 4.79265V4.37466C0 3.92256 0.313364 3.56726 0.690719 3.56726H3.51194C4.08503 3.56726 4.58378 3.10417 4.7127 2.45078L4.86044 1.70058C5.09006 0.678693 5.84571 0 6.71052 0H10.7061Z" fill="#484C52"/>
                    </svg>
                </div>

                <RouterLink class="addbtn-home" to="/add">
                    <svg height="100%" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.6923 1.69231C12.6923 0.75625 11.9361 0 11 0C10.0639 0 9.30769 0.75625 9.30769 1.69231V9.30769H1.69231C0.75625 9.30769 0 10.0639 0 11C0 11.9361 0.75625 12.6923 1.69231 12.6923H9.30769V20.3077C9.30769 21.2437 10.0639 22 11 22C11.9361 22 12.6923 21.2437 12.6923 20.3077V12.6923H20.3077C21.2437 12.6923 22 11.9361 22 11C22 10.0639 21.2437 9.30769 20.3077 9.30769H12.6923V1.69231Z" fill="#484C52"/>
                    </svg>
                </RouterLink>

            </div>
            
        </div>
        <div class="zonebottom-home">
            <div class="nowsubject-home">
                <div class="subjectinfo-home" :style="{'background-color': store.state.SubjectList.find(({ id }) => id === timer.currentSubject) ? store.state.SubjectList.find(({ id }) => id === timer.currentSubject).color : '#DBEEFF'}">
                    <div class="subjectinfotop-home">{{store.state.SubjectList.find(({ id }) => id === timer.currentSubject) ? store.state.SubjectList.find(({ id }) => id === timer.currentSubject).name : "ว่าง"}}</div>
                    <div class="subjectinfobottom-home">{{store.state.SubjectList.find(({ id }) => id === timer.currentSubject) ? store.state.SubjectList.find(({ id }) => id === timer.currentSubject).description.room : ""}}</div>
                </div>
                <div class="labelsubject-home">ขณะนี้</div>
            </div>
            <div class="timersubject-home">
                <div class="cdtimer-home">{{ timer.countdown }}</div>
                <div class="iconcdtimer-home">
                    <svg height="100%" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5569 8.5572C11.4891 8.6268 11.2331 8.9244 10.9946 9.1692C9.59649 10.7088 5.94915 13.2288 4.04014 13.998C3.75022 14.1216 3.01724 14.3832 2.62562 14.4C2.25037 14.4 1.89265 14.3136 1.55129 14.1384C1.12577 13.8936 0.784413 13.5084 0.59737 13.0536C0.476961 12.738 0.289917 11.7936 0.289917 11.7768C0.102874 10.7436 0 9.0648 0 7.2096C0 5.442 0.102874 3.8316 0.256016 2.7828C0.273551 2.766 0.460594 1.5924 0.665173 1.1904C1.04043 0.456 1.7734 0 2.55782 0H2.62562C3.13648 0.018 4.21081 0.474 4.21081 0.4908C6.01695 1.2612 9.58013 3.6576 11.0122 5.25C11.0122 5.25 11.4155 5.6592 11.5908 5.9148C11.8644 6.282 12 6.7368 12 7.1916C12 7.6992 11.8469 8.172 11.5569 8.5572Z" fill="#484C52"/>
                    </svg>
                </div>
            </div>
            <div class="nextsubject-home">
                <div class="subjectinfo-home" :style="{'background-color': store.state.SubjectList.find(({ id }) => id === timer.nextSubject) ? store.state.SubjectList.find(({ id }) => id === timer.nextSubject).color : '#DBEEFF'}">
                    <div class="subjectinfotop-home">{{store.state.SubjectList.find(({ id }) => id === timer.nextSubject) ? store.state.SubjectList.find(({ id }) => id === timer.nextSubject).name : "ว่าง"}}</div>
                    <div class="subjectinfobottom-home">{{store.state.SubjectList.find(({ id }) => id === timer.nextSubject) ? store.state.SubjectList.find(({ id }) => id === timer.nextSubject).description.room : ""}}</div>
                </div>
                <div class="labelsubject-home">ถัดไป</div>
            </div>
        </div>
    </div>
    <div class="content-home">
        <swiper class="swiper" :slides-per-view="1" :space-between="30" :loop="true" @swiper="onSwiper" ref="mySwiper">

            <swiper-slide v-for="n in 7">
                
                <div class="schedulesubject-home">
                    <div class="subject-home" v-for="subject,subjectindex  in store.state.ScheduleList[n-1]" :style="{'background-color': store.state.SubjectList.find(({ id }) => id === subject.id).color, 'color': 'black'}">
                        
                        <div class="inclass-home" :style="{'background-color': store.state.SubjectList.find(({ id }) => id === subject.id).color}" v-if="(( new Date(`1970-01-01T${nowtime}`) >= new Date(`1970-01-01T${subject.startPeriod}:00`) ) && ( new Date(`1970-01-01T${nowtime}`) < new Date(`1970-01-01T${subject.endPeriod}:00`)) && (currentSlide == new Date().getDay()))">
                        </div>

                        <div class="subjecttime-home">{{subject.startPeriod}} - {{subject.endPeriod}}</div>
                        <div class="subjectname-home">{{store.state.SubjectList.find(({ id }) => id === subject.id).name}}</div>
                        <div class="subjectbar-home"></div>
                        <div class="subjectdescriptionTitle-home">
                            <div class="subjectdescriptionI-home">ห้อง</div>
                            <div class="subjectdescriptionII-home">รหัสวิชา</div>
                            <div class="subjectdescriptionIII-home">คุณครู</div>
                        </div>
                        <div class="subjectdescriptionValue-home">
                            <div class="subjectdescriptionValueI-home">{{store.state.SubjectList.find(({ id }) => id === subject.id).description.room}}</div>
                            <div class="subjectdescriptionValueII-home">{{store.state.SubjectList.find(({ id }) => id === subject.id).description.code}}</div>
                            <div class="subjectdescriptionValueIII-home">{{store.state.SubjectList.find(({ id }) => id === subject.id).description.teacher}}</div>
                        </div>
                        <div class="subjectperiod-home">
                            <div v-if="!binmode" class="text-subjectperiod-home">{{ subjectindex+1 }}</div>
                            <div v-if="binmode" class="bin-subjectperiod-home" @click="removeSchedule(n-1, subjectindex)">
                                <svg height="100%" viewBox="0 0 18 22" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.4225 7.36685C15.6154 7.36685 15.7905 7.46255 15.9288 7.62424C16.0577 7.79694 16.1227 8.01144 16.1038 8.23804C16.1038 8.31284 15.5881 15.7268 15.2936 18.8474C15.1092 20.7625 14.0232 21.9252 12.3943 21.9571C11.1418 21.989 9.91747 22 8.712 22C7.4322 22 6.18062 21.989 4.96574 21.9571C3.39139 21.9142 2.3045 20.7306 2.12947 18.8474C1.82645 15.7158 1.32018 8.31284 1.31077 8.23804C1.30136 8.01144 1.36535 7.79694 1.49521 7.62424C1.62319 7.46255 1.80763 7.36685 2.00149 7.36685H15.4225ZM10.7061 0C11.5615 0 12.3257 0.678693 12.5468 1.64668L12.7049 2.44968C12.8329 3.10417 13.3316 3.56726 13.9057 3.56726H16.7269C17.1033 3.56726 17.4167 3.92256 17.4167 4.37466V4.79265C17.4167 5.23375 17.1033 5.60004 16.7269 5.60004H0.690719C0.313364 5.60004 0 5.23375 0 4.79265V4.37466C0 3.92256 0.313364 3.56726 0.690719 3.56726H3.51194C4.08503 3.56726 4.58378 3.10417 4.7127 2.45078L4.86044 1.70058C5.09006 0.678693 5.84571 0 6.71052 0H10.7061Z"/>
                                 </svg>
                            </div>
                        </div>
                    </div>
                

                </div>
                
                <div class="forswipe-home" :style="{height: 'calc(100vh - 191px - 52px - env(safe-area-inset-top) - 72px - env(safe-area-inset-bottom) - ' + (store.state.ScheduleList[n-1].length * 72) + 'px )'}" >
                    <div v-if="store.state.ScheduleList[n-1].length<1">
                        <svg width="100%"  viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g id="Iconly/Bold/Calendar" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Calendar" transform="translate(3.000000, 2.000000)" fill="#000000"  fill-rule="nonzero">
                                    <path d="M12.6496583,2.25524422e-06 C13.0742093,-0.000994978687 13.4099008,0.32883983 13.4108881,0.768619575 L13.4108881,0.768619575 L13.4118754,1.51824414 C16.1665203,1.73413601 17.9861656,3.61119592 17.9891276,6.48975425 L17.9891276,6.48975425 L17.9999941,14.9155344 C18.0039375,18.0539625 16.0322437,19.9849954 12.8718071,19.9899929 L12.8718071,19.9899929 L5.15189025,20.0000023 C2.0112002,20.0039859 0.0148231956,18.0269761 0.010873884,14.8795524 L0.010873884,14.8795524 L6.62739655e-06,6.55272272 C-0.00393603445,3.6551739 1.75153297,1.78311149 4.5061778,1.53023813 L4.5061778,1.53023813 L4.50519047,0.780613568 C4.50420314,0.340833823 4.83002135,0.00999951493 5.26444563,0.00999951493 C5.6988699,0.00900001551 6.02468811,0.338834824 6.02567543,0.778614569 L6.02567543,0.778614569 L6.02666276,1.47826416 L11.8913905,1.47026817 L11.8904031,0.770618574 C11.8894158,0.330838829 12.215234,0.00100402015 12.6496583,2.25524422e-06 Z M13.0524881,14.1918968 L13.0426148,14.1918968 C12.588444,14.2028913 12.22412,14.5837006 12.2339933,15.0434703 C12.2349806,15.50324 12.6012792,15.8820503 13.0554501,15.8920453 C13.5185068,15.8910458 13.8936914,15.5102365 13.8927061,15.0404718 C13.8927061,14.5707071 13.5165322,14.1918968 13.0524881,14.1918968 L13.0524881,14.1918968 Z M4.91690621,14.1928941 C4.46273537,14.2128863 4.10729733,14.5936956 4.10828261,15.0534653 C4.12901854,15.513235 4.50420314,15.8730548 4.95837398,15.8520653 C5.40365886,15.8320753 5.75810957,15.4512661 5.73737569,14.9914963 C5.72750241,14.5417216 5.36120376,14.1918968 4.91690621,14.1928941 Z M8.98469714,14.1878967 C8.53052631,14.2088883 8.1760756,14.5886981 8.1760756,15.0484678 C8.19680948,15.5082375 8.57199408,15.8670578 9.02616491,15.8470678 C9.47046247,15.8260783 9.82590051,15.4462686 9.80516663,14.9854993 C9.79529335,14.5367241 9.4289947,14.1868993 8.98469714,14.1878967 Z M4.91196957,10.5946962 C4.45779873,10.6146884 4.10334802,10.9954976 4.10433329,11.4552674 C4.1240819,11.9150371 4.50025383,12.2748569 4.95442467,12.2538674 C5.39872222,12.2338774 5.75317294,11.8530681 5.73243905,11.3932984 C5.72256577,10.9435237 5.35725445,10.5936989 4.91196957,10.5946962 Z M8.98074783,10.5597138 C8.526577,10.5797059 8.17113896,10.9605152 8.17212423,11.4202849 C8.19187284,11.8800546 8.56804477,12.2388749 9.0222156,12.2188849 C9.46651316,12.1978954 9.82096387,11.8180857 9.80121731,11.3583159 C9.79035671,10.9085412 9.42504539,10.5587164 8.98074783,10.5597138 Z M13.0485388,10.5647113 C12.5943679,10.5747084 12.2389299,10.9445232 12.2399152,11.4042929 L12.2399152,11.4042929 L12.2399152,11.4152874 C12.2497905,11.8750571 12.6249751,12.2238824 13.0801333,12.2138874 C13.5244308,12.2028929 13.8788815,11.8220837 13.8690083,11.3623139 C13.8482744,10.9225342 13.491849,10.5637139 13.0485388,10.5647113 Z M11.8933651,3.00949727 L6.02863742,3.01749327 L6.02962475,3.8260883 C6.02962475,4.25687255 5.70479387,4.59670235 5.27036959,4.59670235 C4.83594532,4.59770185 4.50913978,4.25887155 4.50913978,3.8280873 L4.50913978,3.8280873 L4.50815246,3.05847275 C2.58286306,3.25137613 1.51753626,4.38280948 1.52049208,6.55072372 L1.52049208,6.55072372 L1.52148557,6.86156804 L16.4696299,6.84157805 L16.4696299,6.49175325 C16.4271748,4.3428295 15.3490128,3.21539415 13.4138501,3.04747825 L13.4138501,3.04747825 L13.4148374,3.81709281 C13.4148374,4.24687756 13.0801333,4.58770686 12.6555823,4.58770686 C12.221158,4.58870636 11.8943525,4.24887655 11.8943525,3.8190918 L11.8943525,3.8190918 L11.8933651,3.00949727 Z"></path>
                                </g>
                            </g>
                        </svg>
                        <br>
                        ไม่มีคาบเรียน
                    </div>
                </div>
                <div class="safearea-content-home"></div>
            </swiper-slide>
            
        </swiper>
        
    </div>
 </div>
</template>

<script scoped>


export default {
    data() {
        return {
            currentSlide: 0,
            day: {
                0: "วันอาทิตย์",
                1: "วันจันทร์",
                2: "วันอังคาร",
                3: "วันพุธ",
                4: "วันพฤหัสบดี",
                5: "วันศุกร์",
                6: "วันเสาร์",
            },
            swiper: null,

            interval: null,
            nowtime: null,

            timer: {
                nextTimeCheck: null,
                countdown: "00:00",

                currentSubject: null,
                nextSubject: null,
                
                subjectLength: null
            },

            binmode: false
        };
    },
    beforeDestroy() {
        // prevent memory leak
        clearInterval(this.interval)
    },
    created() {
        this.interval = setInterval(() => {
            this.nowtime = Intl.DateTimeFormat(navigator.language, {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            }).format()

            if (this.subjectLength !== this.$store.state.ScheduleList[this.currentSlide].length) {

                this.timer = {
                    nextTimeCheck: null,
                    countdown: "00:00",

                    currentSubject: null,
                    nextSubject: null,

                    subjectLength: null
                },

                this.subjectLength = this.$store.state.ScheduleList[this.currentSlide].length
            }

            if ((new Date(`1970-01-01T${this.nowtime}`) >= new Date(`1970-01-01T${this.timer.nextTimeCheck}:00`)) || this.timer.nextTimeCheck === null){
                
                for (let i in this.$store.state.ScheduleList[this.currentSlide]) {
                    const SstartPeriod = this.$store.state.ScheduleList[this.currentSlide][i].startPeriod
                    const SendPeriod = this.$store.state.ScheduleList[this.currentSlide][i].endPeriod
                    if ((new Date(`1970-01-01T${this.nowtime}`) >= new Date(`1970-01-01T${SstartPeriod}:00`)) && (new Date(`1970-01-01T${this.nowtime}`) < new Date(`1970-01-01T${SendPeriod}:00`))) {
                        this.timer.nextTimeCheck = SendPeriod
                        this.timer.currentSubject = this.$store.state.ScheduleList[this.currentSlide][i].id

                        if ((Number(i) + 1) < this.$store.state.ScheduleList[this.currentSlide].length && (SendPeriod === this.$store.state.ScheduleList[this.currentSlide][Number(i) + 1].startPeriod)) {
                            this.timer.nextSubject = this.$store.state.ScheduleList[this.currentSlide][Number(i) + 1].id
                        }
                        break
                    } else if ((Number(i) + 1) >= this.$store.state.ScheduleList[this.currentSlide].length) {

                        for (let ii in this.$store.state.ScheduleList[this.currentSlide]) {

                            const SSstartPeriod = this.$store.state.ScheduleList[this.currentSlide][ii].startPeriod
                            if (new Date(`1970-01-01T${this.nowtime}`) < new Date(`1970-01-01T${SSstartPeriod}:00`)) {
                                this.timer.nextTimeCheck = SSstartPeriod
                                this.timer.nextSubject = this.$store.state.ScheduleList[this.currentSlide][ii].id
                                break
                            }
                        }
                    }
                }
            } else {
                const timeinsec = ((new Date(`1970-01-01T${this.timer.nextTimeCheck}:00`) - new Date(`1970-01-01T${this.nowtime}`)) / 1000)
                this.timer.countdown = ((~~(timeinsec / 60)) + ":" + String(timeinsec % 60).padStart(2, '0'))
            }

        }, 100)
    },
    methods: {
        onSwiper(swiper) {
            this.swiper = swiper;
            swiper.on('slideChange', () => {
                this.currentSlide = swiper.realIndex;
            });
            this.swiper.slideToLoop(new Date().getDay(), 0);
        },
        changeToSlide(index) {

            this.swiper.slideToLoop(index);
        },
        removeSchedule(day, index) {
            this.$confirm.require({
                message: 'คุณแน่ใจที่จะลบคาบเรียนนี้หรือไม่',
                header: 'ลบคาบเรียน',
                rejectLabel: 'ยกเลิก',
                acceptLabel: 'ลบ',
                rejectClass: 'p-button-secondary p-button-outlined',
                acceptClass: 'p-button-danger',
                accept: () => {
                    this.$store.commit('ScheduleList/removeSchedule', {
                        'day': day,
                        'index': index
                    })
                },
                reject: () => {
                }
            })

        },
    },
};
</script>


<style>
.header-home {
    width: 100%;
    padding: 20px 10px;
}

.zonetop-home {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    
}
.datelabel-home {
    font-size: 42px;
    font-weight: 500;
    font-family: "Prompt", sans-serif;

}
.deletebtn-home {
    height: 22px;
}
.addbtn-home {
    height: 22px;
}

.topbtnzone-home {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 30px;

    justify-self: right;
}

.zonebottom-home {
    padding: 5px 0;
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    justify-content: center;
    flex: 1;
}

.subjectinfo-home {
    background-color: #EAEAEA;
    padding: 3px 7px;
    text-align: center;
    border-radius: 12px;
}
.subjectinfotop-home {
    font-size: 15px;
    font-weight: 500;
    font-family: "Prompt", sans-serif;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden; 
}
.subjectinfobottom-home {
    font-size: 15px;
    font-weight: 400;
    font-family: "Prompt", sans-serif;
}
.labelsubject-home {
    padding-top: 1px;
    font-size: 12px;
    font-weight: 600;
    font-family: "Prompt", sans-serif;
    text-align: center;
    opacity: 70%;
}

.timersubject-home {
    max-width: 100px;
    text-align: center;
    width: 50vw;
    padding: 7px 7px;
    display: flex;
    flex-direction: column;
}
.cdtimer-home {
    font-size: 15px;
    font-weight: 600;
    font-family: "Prompt", sans-serif;
}
.iconcdtimer-home {
    line-height: 15px;
    height: 15px;
}

.schedulesubject-home {
    padding: 0 0;
    display: flex;
    flex-direction: column;
    row-gap: 7px;
}

.subject-home {
    display: grid;
    grid-template-areas:
    'time bar descriptionT descriptionV period'
    'subject bar descriptionT descriptionV period';
    grid-template-columns: 130px 10px 65px calc(100% - 265px) 60px;
    padding: 8px 5px 8px 16px;
    border-radius: 17px;
    background-color: #EAEAEA;

    height: 76px;

}

.subjecttime-home {
    grid-area: time;

    font-size: 16px;
    font-weight: 400;
    font-family: "Prompt", sans-serif;

    /*color: #000000;*/
    opacity: 70%;

    text-overflow: ellipsis; 
    overflow: hidden;
    white-space: nowrap; 

}
.subjectname-home {
    grid-area: subject;

    font-size: 20px;
    font-weight: 500;
    font-family: "Prompt", sans-serif;

    text-overflow: ellipsis; 
    overflow: hidden;
    white-space: nowrap; 

    /*color: #000000;*/
}
.subjectbar-home {
    grid-area: bar;
    width: 1px;
    background-color: #000000;
    opacity: 26%;
}
.subjectdescriptionTitle-home {
    grid-area: descriptionT;

    font-size: 16px;
    font-weight: 300;
    font-family: "Prompt", sans-serif;

    /*color: #000000;*/

    display: flex;
    flex-direction: column;
    line-height: 20px;
}
.subjectdescriptionTitle-home div {
    text-overflow: ellipsis; 
    overflow: hidden;
    white-space: nowrap; 
}
.subjectdescriptionValue-home {
    grid-area: descriptionV;

    font-size: 16px;
    font-weight: 300;
    font-family: "Prompt", sans-serif;

    /*color: #000000;*/
    opacity: 70%;

    display: flex;
    flex-direction: column;
    line-height: 20px;

    
}
.subjectdescriptionValue-home div {
    text-overflow: ellipsis; 
    overflow: hidden;
    white-space: nowrap; 
}
.subjectperiod-home {
    grid-area: period;
    
    font-size: 36px;
    font-weight: 700;
    font-family: "Prompt", sans-serif;

    /*color: #000000;*/
    text-align: center;
    align-self: center;
    width: 50px;
}
.subjectperiod-home .bin-subjectperiod-home {
    line-height: 23px;
    height: 24px;
    width: 24px;
    fill: #484C52;
    transition: all 0.1s ease;
}
.subjectperiod-home .bin-subjectperiod-home:hover {
    fill: red;
}
.subjectperiod-home .text-subjectperiod-home {
    font-size: 36px;
    font-weight: 700;
    font-family: "Prompt", sans-serif;

    /*color: #000000;*/
    text-align: center;
    align-self: center;
    width: 50px;
}

.safearea-content-home {
    height: calc(72px + env(safe-area-inset-bottom));
    width: 100%;
}
.nowdot-content-home {
    background-color: #FFD600;
    height: 20px;
    width: 20px;
    border-radius: 100%;

    left: -10px;

    transform: translate(0, calc(((76px/2)*(1 + ((5 - 1) * 2))) - 10px + ((5 - 1)*7px)));

    position: absolute;
}

.inclass-home {
    position: absolute;
    height: 35px;
    width: 100%;
    margin: 37px -16px;
    border-radius: 17px;
    z-index: -1;
    filter: brightness(70%);
}

.forswipe-home {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;
    
    font-size: 18px;
    opacity: 50%;
    
}

.forswipe-home div svg {
    width: 80px;

    margin-bottom: -5px;
}











.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease-in-out, opacity 0.2s ease;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateY(90vh);
    opacity: 0;
        
}
</style>