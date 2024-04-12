<template>
    <div class="goals-main">
      <div class="goals-top">
        <div class="goals-allring">

          <div class="goals-dayring">
            <svg width="38" height="38" viewBox="0 0 38 38" class="goalds-ringprogressbar" style="--dayringprogressbar-progress: 60; --dayringprogressbar-stroke-width: 5px;--dayringprogressbar-size: 38px;">
              <circle class="bg"
                cx="125" cy="125" r="115" fill="none" stroke="#ddd" stroke-width="20"
              ></circle>
              <circle class="fg"
                cx="125" cy="125" r="115" fill="none" stroke="#5394fd" stroke-width="20"
              ></circle>
            </svg>
            
            <div class="goals-dayringlabel">อา</div>
          </div>

          <div class="goals-dayring">
            <svg width="38" height="38" viewBox="0 0 38 38" class="goalds-ringprogressbar" style="--dayringprogressbar-progress: 60; --dayringprogressbar-stroke-width: 5px;--dayringprogressbar-size: 38px;">
              <circle class="bg"
                cx="125" cy="125" r="115" fill="none" stroke="#ddd" stroke-width="20"
              ></circle>
              <circle class="fg"
                cx="125" cy="125" r="115" fill="none" stroke="#5394fd" stroke-width="20"
              ></circle>
            </svg>
            <div class="goals-dayringlabel">จ</div>
          </div>

          <div class="goals-dayring">
            <svg width="38" height="38" viewBox="0 0 38 38" class="goalds-ringprogressbar" style="--dayringprogressbar-progress: 60; --dayringprogressbar-stroke-width: 5px;--dayringprogressbar-size: 38px;">
              <circle class="bg"
                cx="125" cy="125" r="115" fill="none" stroke="#ddd" stroke-width="20"
              ></circle>
              <circle class="fg"
                cx="125" cy="125" r="115" fill="none" stroke="#5394fd" stroke-width="20"
              ></circle>
            </svg>
            <div class="goals-dayringlabel">อ</div>
          </div>

          <div class="goals-dayring">
            <svg width="38" height="38" viewBox="0 0 38 38" class="goalds-ringprogressbar" style="--dayringprogressbar-progress: 60; --dayringprogressbar-stroke-width: 5px;--dayringprogressbar-size: 38px;">
              <circle class="bg"
                cx="125" cy="125" r="115" fill="none" stroke="#ddd" stroke-width="20"
              ></circle>
              <circle class="fg"
                cx="125" cy="125" r="115" fill="none" stroke="#5394fd" stroke-width="20"
              ></circle>
            </svg>
            <div class="goals-dayringlabel">พ</div>
          </div>

          <div class="goals-dayring">
            <svg width="38" height="38" viewBox="0 0 38 38" class="goalds-ringprogressbar" style="--dayringprogressbar-progress: 60; --dayringprogressbar-stroke-width: 5px;--dayringprogressbar-size: 38px;">
              <circle class="bg"
                cx="125" cy="125" r="115" fill="none" stroke="#ddd" stroke-width="20"
              ></circle>
              <circle class="fg"
                cx="125" cy="125" r="115" fill="none" stroke="#5394fd" stroke-width="20"
              ></circle>
            </svg>
            <div class="goals-dayringlabel">พฤ</div>
          </div>

          <div class="goals-dayring">
            <svg width="38" height="38" viewBox="0 0 38 38" class="goalds-ringprogressbar" style="--dayringprogressbar-progress: 60; --dayringprogressbar-stroke-width: 5px;--dayringprogressbar-size: 38px;">
              <circle class="bg"
                cx="125" cy="125" r="115" fill="none" stroke="#ddd" stroke-width="20"
              ></circle>
              <circle class="fg"
                cx="125" cy="125" r="115" fill="none" stroke="#5394fd" stroke-width="20"
              ></circle>
            </svg>
            <div class="goals-dayringlabel">ศ</div>
          </div>

          <div class="goals-dayring">
            <svg width="38" height="38" viewBox="0 0 38 38" class="goalds-ringprogressbar" style="--dayringprogressbar-progress: 60; --dayringprogressbar-stroke-width: 5px;--dayringprogressbar-size: 38px;">
              <circle class="bg"
                cx="125" cy="125" r="115" fill="none" stroke="#ddd" stroke-width="20"
              ></circle>
              <circle class="fg"
                cx="125" cy="125" r="115" fill="none" stroke="#5394fd" stroke-width="20"
              ></circle>
            </svg>
            <div class="goals-dayringlabel">ส</div>
          </div>

        </div>

        <div class="goals-todayring">
          
          <div class="goals-streak">
            การต่อเนื่อง<br><span class="goals-streakdaylabel">155</span> วัน
          </div>

          <div class="goals-todayprogress">
              
            <svg width="253" height="253" viewBox="0 0 253 253" class="goalds-todayringprogressbar" style="--dayringprogressbar-progress: 60; --dayringprogressbar-stroke-width: 15px;--dayringprogressbar-size: 253px;">
              <circle class="bg"
                cx="125" cy="125" r="115" fill="none" stroke="#ddd" stroke-width="20"
              ></circle>
              <circle class="fg"
                cx="125" cy="125" r="115" fill="none" stroke="#5394fd" stroke-width="20"
              ></circle>
            </svg>

            <div class="goals-progresslabel">
              <div class="goals-progresstimer">3:00:00</div>
              <div class="goals-goal">เป้าหมาย 5 ชั่วโมง</div>
            </div>

          </div>
          <div class="goals-readtogglebtn">อ่านต่อ</div>
        </div>
        
        
      </div>
      <div class="goals-bottom"></div>
    </div>
  </template>
  
<style>

.goals-top {
  padding: 22px 0; 
  display: flex;
  flex-direction: column;
  row-gap: 30px;
}
.goals-allring {
  width: 100%;
  height:38px;

  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.goals-dayring {
  height: 38px;
  width: 38px;
  align-items: center;
}
.goalds-ringprogressbar {
  position: absolute;
  --dayringprogressbar-size: 250px;
  --dayringprogressbar-half-size: calc(var(--dayringprogressbar-size) / 2);
  --dayringprogressbar-stroke-width: 20px;
  --dayringprogressbar-radius: calc((var(--dayringprogressbar-size) - var(--dayringprogressbar-stroke-width)) / 2);
  --dayringprogressbar-circumference: calc(var(--dayringprogressbar-radius) * pi * 2);
  --dayringprogressbar-dash: calc((var(--dayringprogressbar-progress) * var(--dayringprogressbar-circumference)) / 100);
}
.goalds-ringprogressbar circle {
  cx: var(--dayringprogressbar-half-size);
  cy: var(--dayringprogressbar-half-size);
  r: var(--dayringprogressbar-radius);
  stroke-width: var(--dayringprogressbar-stroke-width);
  fill: none;
  stroke-linecap: round;
}

.goalds-ringprogressbar circle.bg {
  stroke: #EAEAEA;
}

.goalds-ringprogressbar circle.fg {
  transform: rotate(-90deg);
  transform-origin: var(--dayringprogressbar-half-size) var(--dayringprogressbar-half-size);
  stroke-dasharray: var(--dayringprogressbar-dash) calc(var(--dayringprogressbar-circumference) - var(--dayringprogressbar-dash));
  transition: stroke-dasharray 0.3s linear 0s;
  stroke: #FFD600;
}

.goals-dayringlabel {
  text-align: center;
  line-height: 38px;
  font-size: 13px;
  font-weight: 400;
  font-family: "Prompt", sans-serif;
  color: #484C52;
}

.goalds-todayringprogressbar {
  position: absolute;
  --dayringprogressbar-size: 250px;
  --dayringprogressbar-half-size: calc(var(--dayringprogressbar-size) / 2);
  --dayringprogressbar-stroke-width: 20px;
  --dayringprogressbar-radius: calc((var(--dayringprogressbar-size) - var(--dayringprogressbar-stroke-width)) / 2);
  --dayringprogressbar-circumference: calc(var(--dayringprogressbar-radius) * pi * 2);
  --dayringprogressbar-dash: calc((var(--dayringprogressbar-progress)*75 * var(--dayringprogressbar-circumference)) / 10000);
}
.goalds-todayringprogressbar circle {
  cx: var(--dayringprogressbar-half-size);
  cy: var(--dayringprogressbar-half-size);
  r: var(--dayringprogressbar-radius);
  stroke-width: var(--dayringprogressbar-stroke-width);
  fill: none;
  stroke-linecap: round;
}

.goalds-todayringprogressbar circle.bg {
  stroke: #EAEAEA;
}

.goalds-todayringprogressbar circle.fg {
  transform: rotate(-225deg);
  transform-origin: var(--dayringprogressbar-half-size) var(--dayringprogressbar-half-size);
  stroke-dasharray: var(--dayringprogressbar-dash) calc(var(--dayringprogressbar-circumference) - var(--dayringprogressbar-dash));
  transition: stroke-dasharray 0.3s linear 0s;
  stroke: #FFD600;
}

.goals-todayring {
  display: flex;
  justify-content: center;
}

.goals-todayprogress {
  display: flex;
  justify-content: center;
  width: 253px;
  align-items: center;
  height: 253px;
}
.goals-progresslabel {

  text-align: center;
}

.goals-progresstimer {
  font-size: 32px;
  font-weight: 600;
  font-family: "Prompt", sans-serif;
  line-height: 27px;
  color: #484C52;
}

.goals-goal {
  font-size: 13px;
  font-weight: 400;
  font-family: "Prompt", sans-serif;
  color: #000000;
  opacity: 70%;
}
.goals-readtogglebtn {
  position: absolute;
  margin-top: 205px;
  width: 195px;
  height: 48px;
  background-color: #539DF3;
  border-radius: 18px;
  text-align: center;

  font-size: 20px;
  font-weight: 600;
  font-family: "Prompt", sans-serif;
  color: #FFFFFF;
  line-height: 48px;
}

.goals-streak {
  margin-top: 7px;
  position: absolute;

  margin-left: 330px;
  
  text-align: center;

  font-size: 13px;
  font-weight: 400;
  font-family: "Prompt", sans-serif;
  color: #484C52;
}

.goals-streakdaylabel {
  font-size: 24px;
  font-weight: 600;
  font-family: "Prompt", sans-serif;
  color: #484C52;
  line-height: 20px
}
</style>
  