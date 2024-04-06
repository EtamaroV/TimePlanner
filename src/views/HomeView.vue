<script setup>

</script>

<template>
 <div class="main-home">
    <div class="header-home">
        <div class="zonetop-home">
            <div class="datelabel-home">วันจันทร์</div>
            <div class="deletebtn-home"><svg width="100%" height="100%" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.4225 7.36685C15.6154 7.36685 15.7905 7.46255 15.9288 7.62424C16.0577 7.79694 16.1227 8.01144 16.1038 8.23804C16.1038 8.31284 15.5881 15.7268 15.2936 18.8474C15.1092 20.7625 14.0232 21.9252 12.3943 21.9571C11.1418 21.989 9.91747 22 8.712 22C7.4322 22 6.18062 21.989 4.96574 21.9571C3.39139 21.9142 2.3045 20.7306 2.12947 18.8474C1.82645 15.7158 1.32018 8.31284 1.31077 8.23804C1.30136 8.01144 1.36535 7.79694 1.49521 7.62424C1.62319 7.46255 1.80763 7.36685 2.00149 7.36685H15.4225ZM10.7061 0C11.5615 0 12.3257 0.678693 12.5468 1.64668L12.7049 2.44968C12.8329 3.10417 13.3316 3.56726 13.9057 3.56726H16.7269C17.1033 3.56726 17.4167 3.92256 17.4167 4.37466V4.79265C17.4167 5.23375 17.1033 5.60004 16.7269 5.60004H0.690719C0.313364 5.60004 0 5.23375 0 4.79265V4.37466C0 3.92256 0.313364 3.56726 0.690719 3.56726H3.51194C4.08503 3.56726 4.58378 3.10417 4.7127 2.45078L4.86044 1.70058C5.09006 0.678693 5.84571 0 6.71052 0H10.7061Z" fill="#484C52"/>
</svg>
</div>
            <div class="addbtn-home"><svg width="100%" height="100%" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6923 1.69231C12.6923 0.75625 11.9361 0 11 0C10.0639 0 9.30769 0.75625 9.30769 1.69231V9.30769H1.69231C0.75625 9.30769 0 10.0639 0 11C0 11.9361 0.75625 12.6923 1.69231 12.6923H9.30769V20.3077C9.30769 21.2437 10.0639 22 11 22C11.9361 22 12.6923 21.2437 12.6923 20.3077V12.6923H20.3077C21.2437 12.6923 22 11.9361 22 11C22 10.0639 21.2437 9.30769 20.3077 9.30769H12.6923V1.69231Z" fill="#484C52"/>
            </svg>
            </div>
        </div>
        <div class="zonebottom-home">
            <div class="nowsubject-home">
                <div class="subjectinfo-home"></div>
                <div class="labelsubject-home"></div>
            </div>
            <div class="timersubject-home">
                <div class="cdtimer-home"></div>
                <div class="iconcdtimer-home"></div>
            </div>
            <div class="nextsubject-home">
                <div class="subjectinfo-home"></div>
                <div class="labelsubject-home"></div>
            </div>
        </div>
    </div>
    <div class="content-home"></div>
 </div>
</template>

<style>
.header-home {
    width: 100%;
    padding: 16px;
}

.zonetop-home {
    height:64px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.datelabel-home {
    font-size: 48px;
    font-weight: 500;
    font-family: "Prompt", sans-serif;
}
.deletebtn-home {
    height: 22px;
}
.addbtn-home {
    height: 22px;
}
</style>