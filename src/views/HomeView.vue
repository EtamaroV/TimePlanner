<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<router-view v-slot="{ Component }">
  <transition name="slide" mode="out-in">
    <component :is="Component" />
  </transition>
</router-view>
<div class="main-home">
    <div class="header-home">
        <div class="zonetop-home">
            <div class="datelabel-home">วันจันทร์</div>
            <div class="topbtnzone-home">

                <div class="deletebtn-home">
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
                <div class="subjectinfo-home" style="background-color: #DBEEFF;">
                    <div class="subjectinfotop-home">ภาษาอังกฤษ</div>
                    <div class="subjectinfobottom-home">725</div>
                </div>
                <div class="labelsubject-home">ขณะนี้</div>
            </div>
            <div class="timersubject-home">
                <div class="cdtimer-home">15:30</div>
                <div class="iconcdtimer-home">
                    <svg height="100%" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5569 8.5572C11.4891 8.6268 11.2331 8.9244 10.9946 9.1692C9.59649 10.7088 5.94915 13.2288 4.04014 13.998C3.75022 14.1216 3.01724 14.3832 2.62562 14.4C2.25037 14.4 1.89265 14.3136 1.55129 14.1384C1.12577 13.8936 0.784413 13.5084 0.59737 13.0536C0.476961 12.738 0.289917 11.7936 0.289917 11.7768C0.102874 10.7436 0 9.0648 0 7.2096C0 5.442 0.102874 3.8316 0.256016 2.7828C0.273551 2.766 0.460594 1.5924 0.665173 1.1904C1.04043 0.456 1.7734 0 2.55782 0H2.62562C3.13648 0.018 4.21081 0.474 4.21081 0.4908C6.01695 1.2612 9.58013 3.6576 11.0122 5.25C11.0122 5.25 11.4155 5.6592 11.5908 5.9148C11.8644 6.282 12 6.7368 12 7.1916C12 7.6992 11.8469 8.172 11.5569 8.5572Z" fill="#484C52"/>
                    </svg>
                </div>
            </div>
            <div class="nextsubject-home">
                <div class="subjectinfo-home" style="background-color: #EFFFDB;">
                    <div class="subjectinfotop-home">คณิตศาสตร์</div>
                    <div class="subjectinfobottom-home">725</div>
                </div>
                <div class="labelsubject-home">ถัดไป</div>
            </div>
        </div>
    </div>
    <div class="content-home">
        <div class="nowdot-content-home"></div>
        <div class="schedulesubject-home">
            <div class="subject-home" style="background-color: #DBEEFF;">
                <div class="subjecttime-home">08:00-08:50</div>
                <div class="subjectname-home">ภาษาอังกฤษ</div>
                <div class="subjectbar-home"></div>
                <div class="subjectdescriptionTitle-home">
                    <div class="subjectdescriptionI-home">ห้อง</div>
                    <div class="subjectdescriptionII-home">รหัสวิชา</div>
                    <div class="subjectdescriptionIII-home">คุณครู</div>
                </div>
                <div class="subjectdescriptionValue-home">
                    <div class="subjectdescriptionValueI-home">725</div>
                    <div class="subjectdescriptionValueII-home">อ32102</div>
                    <div class="subjectdescriptionValueIII-home">ณวริญญ์</div>
                </div>
                <div class="subjectperiod-home">1</div>
            </div>

            <div class="subject-home" style="background-color: #DBEEFF;">
                <div class="subjecttime-home">08:00-08:50</div>
                <div class="subjectname-home">ภาษาอังกฤษ</div>
                <div class="subjectbar-home"></div>
                <div class="subjectdescriptionTitle-home">
                    <div class="subjectdescriptionI-home">ห้อง</div>
                    <div class="subjectdescriptionII-home">รหัสวิชา</div>
                    <div class="subjectdescriptionIII-home">คุณครู</div>
                </div>
                <div class="subjectdescriptionValue-home">
                    <div class="subjectdescriptionValueI-home">725</div>
                    <div class="subjectdescriptionValueII-home">อ32102</div>
                    <div class="subjectdescriptionValueIII-home">ณวริญญ์</div>
                </div>
                <div class="subjectperiod-home">1</div>
            </div>

            <div class="subject-home" style="background-color: #DBEEFF;">
                <div class="subjecttime-home">08:00-08:50</div>
                <div class="subjectname-home">ภาษาอังกฤษ</div>
                <div class="subjectbar-home"></div>
                <div class="subjectdescriptionTitle-home">
                    <div class="subjectdescriptionI-home">ห้อง</div>
                    <div class="subjectdescriptionII-home">รหัสวิชา</div>
                    <div class="subjectdescriptionIII-home">คุณครู</div>
                </div>
                <div class="subjectdescriptionValue-home">
                    <div class="subjectdescriptionValueI-home">725</div>
                    <div class="subjectdescriptionValueII-home">อ32102</div>
                    <div class="subjectdescriptionValueIII-home">ณวริญญ์</div>
                </div>
                <div class="subjectperiod-home">1</div>
            </div>

            <div class="subject-home" style="background-color: #DBEEFF;">
                <div class="subjecttime-home">08:00-08:50</div>
                <div class="subjectname-home">ภาษาอังกฤษ</div>
                <div class="subjectbar-home"></div>
                <div class="subjectdescriptionTitle-home">
                    <div class="subjectdescriptionI-home">ห้อง</div>
                    <div class="subjectdescriptionII-home">รหัสวิชา</div>
                    <div class="subjectdescriptionIII-home">คุณครู</div>
                </div>
                <div class="subjectdescriptionValue-home">
                    <div class="subjectdescriptionValueI-home">725</div>
                    <div class="subjectdescriptionValueII-home">อ32102</div>
                    <div class="subjectdescriptionValueIII-home">ณวริญญ์</div>
                </div>
                <div class="subjectperiod-home">1</div>
            </div>
            
            <div class="subject-home" style="background-color: #DBEEFF;">
                <div class="subjecttime-home">08:00-08:50</div>
                <div class="subjectname-home">ภาษาอังกฤษ</div>
                <div class="subjectbar-home"></div>
                <div class="subjectdescriptionTitle-home">
                    <div class="subjectdescriptionI-home">ห้อง</div>
                    <div class="subjectdescriptionII-home">รหัสวิชา</div>
                    <div class="subjectdescriptionIII-home">คุณครู</div>
                </div>
                <div class="subjectdescriptionValue-home">
                    <div class="subjectdescriptionValueI-home">725</div>
                    <div class="subjectdescriptionValueII-home">อ32102</div>
                    <div class="subjectdescriptionValueIII-home">ณวริญญ์</div>
                </div>
                <div class="subjectperiod-home">1</div>
            </div>
            
            <div class="subject-home" style="background-color: #DBEEFF;">
                <div class="subjecttime-home">08:00-08:50</div>
                <div class="subjectname-home">ภาษาอังกฤษ</div>
                <div class="subjectbar-home"></div>
                <div class="subjectdescriptionTitle-home">
                    <div class="subjectdescriptionI-home">ห้อง</div>
                    <div class="subjectdescriptionII-home">รหัสวิชา</div>
                    <div class="subjectdescriptionIII-home">คุณครู</div>
                </div>
                <div class="subjectdescriptionValue-home">
                    <div class="subjectdescriptionValueI-home">725</div>
                    <div class="subjectdescriptionValueII-home">อ32102</div>
                    <div class="subjectdescriptionValueIII-home">ณวริญญ์</div>
                </div>
                <div class="subjectperiod-home">1</div>
            </div>
            
            <div class="subject-home" style="background-color: #DBEEFF;">
                <div class="subjecttime-home">08:00-08:50</div>
                <div class="subjectname-home">ภาษาอังกฤษ</div>
                <div class="subjectbar-home"></div>
                <div class="subjectdescriptionTitle-home">
                    <div class="subjectdescriptionI-home">ห้อง</div>
                    <div class="subjectdescriptionII-home">รหัสวิชา</div>
                    <div class="subjectdescriptionIII-home">คุณครู</div>
                </div>
                <div class="subjectdescriptionValue-home">
                    <div class="subjectdescriptionValueI-home">725</div>
                    <div class="subjectdescriptionValueII-home">อ32102</div>
                    <div class="subjectdescriptionValueIII-home">ณวริญญ์</div>
                </div>
                <div class="subjectperiod-home">1</div>
            </div>
            
            <div class="subject-home" style="background-color: #DBEEFF;">
                <div class="subjecttime-home">08:00-08:50</div>
                <div class="subjectname-home">ภาษาอังกฤษ</div>
                <div class="subjectbar-home"></div>
                <div class="subjectdescriptionTitle-home">
                    <div class="subjectdescriptionI-home">ห้อง</div>
                    <div class="subjectdescriptionII-home">รหัสวิชา</div>
                    <div class="subjectdescriptionIII-home">คุณครู</div>
                </div>
                <div class="subjectdescriptionValue-home">
                    <div class="subjectdescriptionValueI-home">725</div>
                    <div class="subjectdescriptionValueII-home">อ32102</div>
                    <div class="subjectdescriptionValueIII-home">ณวริญญ์</div>
                </div>
                <div class="subjectperiod-home">1</div>
            </div>
            
            <div class="subject-home" style="background-color: #DBEEFF;">
                <div class="subjecttime-home">08:00-08:50</div>
                <div class="subjectname-home">ภาษาอังกฤษ</div>
                <div class="subjectbar-home"></div>
                <div class="subjectdescriptionTitle-home">
                    <div class="subjectdescriptionI-home">ห้อง</div>
                    <div class="subjectdescriptionII-home">รหัสวิชา</div>
                    <div class="subjectdescriptionIII-home">คุณครู</div>
                </div>
                <div class="subjectdescriptionValue-home">
                    <div class="subjectdescriptionValueI-home">725</div>
                    <div class="subjectdescriptionValueII-home">อ32102</div>
                    <div class="subjectdescriptionValueIII-home">ณวริญญ์</div>
                </div>
                <div class="subjectperiod-home">1</div>
            </div>
            
            <div class="subject-home" style="background-color: #DBEEFF;">
                <div class="subjecttime-home">08:00-08:50</div>
                <div class="subjectname-home">ภาษาอังกฤษ</div>
                <div class="subjectbar-home"></div>
                <div class="subjectdescriptionTitle-home">
                    <div class="subjectdescriptionI-home">ห้อง</div>
                    <div class="subjectdescriptionII-home">รหัสวิชา</div>
                    <div class="subjectdescriptionIII-home">คุณครู</div>
                </div>
                <div class="subjectdescriptionValue-home">
                    <div class="subjectdescriptionValueI-home">725</div>
                    <div class="subjectdescriptionValueII-home">อ32102</div>
                    <div class="subjectdescriptionValueIII-home">ณวริญญ์</div>
                </div>
                <div class="subjectperiod-home">1</div>
            </div>
            
            <div class="subject-home" style="background-color: #EFFFDB;">
                <div class="subjecttime-home">08.50-09.40</div>
                <div class="subjectname-home">คณิตศาสตร์</div>
                <div class="subjectbar-home"></div>
                <div class="subjectdescriptionTitle-home">
                    <div class="subjectdescriptionI-home">ห้อง</div>
                    <div class="subjectdescriptionII-home">รหัสวิชา</div>
                    <div class="subjectdescriptionIII-home">คุณครู</div>
                </div>
                <div class="subjectdescriptionValue-home">
                    <div class="subjectdescriptionValueI-home">725</div>
                    <div class="subjectdescriptionValueII-home">ค32102</div>
                    <div class="subjectdescriptionValueIII-home">มินตรา</div>
                </div>
                <div class="subjectperiod-home">10</div>
            </div>
        </div>
        <div class="safearea-content-home"></div>
    </div>
 </div>
</template>

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

    color: #000000;
    opacity: 70%;

}
.subjectname-home {
    grid-area: subject;

    font-size: 20px;
    font-weight: 500;
    font-family: "Prompt", sans-serif;

    color: #000000;
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

    color: #000000;

    display: flex;
    flex-direction: column;
    line-height: 20px;
}
.subjectdescriptionValue-home {
    grid-area: descriptionV;

    font-size: 16px;
    font-weight: 300;
    font-family: "Prompt", sans-serif;

    color: #000000;
    opacity: 70%;

    display: flex;
    flex-direction: column;
    line-height: 20px;
}
.subjectperiod-home {
    grid-area: period;
    
    font-size: 36px;
    font-weight: 700;
    font-family: "Prompt", sans-serif;

    color: #000000;
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