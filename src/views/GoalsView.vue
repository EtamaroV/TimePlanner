<script setup>
import { useStore } from 'vuex'
import Chart from 'primevue/chart';

const store = useStore()
</script>

<template>
    <div class="goals-main">
      <div class="goals-top">
        <div class="goals-allring">

          <div class="goals-dayring">
            <svg width="38" height="38" viewBox="0 0 38 38" class="goalds-ringprogressbar" :style="{'--dayringprogressbar-progress': `${(allring[0]*100)/18000}`, '--dayringprogressbar-stroke-width': '5px', '--dayringprogressbar-size': '38px'}">
              <circle class="bg"
                cx="125" cy="125" r="115" fill="none" stroke="#ddd" stroke-width="20"
              ></circle>
              <circle class="fg" :style="{'stroke': daycolor[0]}"
                cx="125" cy="125" r="115" fill="none" stroke="#5394fd" stroke-width="20"
              ></circle>
            </svg>
            
            <div class="goals-dayringlabel">อา</div>
          </div>

          <div class="goals-dayring">
            <svg width="38" height="38" viewBox="0 0 38 38" class="goalds-ringprogressbar" :style="{'--dayringprogressbar-progress': `${(allring[1]*100)/18000}`, '--dayringprogressbar-stroke-width': '5px', '--dayringprogressbar-size': '38px'}">
              <circle class="bg"
                cx="125" cy="125" r="115" fill="none" stroke="#ddd" stroke-width="20"
              ></circle>
              <circle class="fg" :style="{'stroke': daycolor[1]}"
                cx="125" cy="125" r="115" fill="none" stroke="#5394fd" stroke-width="20"
              ></circle>
            </svg>
            <div class="goals-dayringlabel">จ</div>
          </div>

          <div class="goals-dayring">
            <svg width="38" height="38" viewBox="0 0 38 38" class="goalds-ringprogressbar" :style="{'--dayringprogressbar-progress': `${(allring[2]*100)/18000}`, '--dayringprogressbar-stroke-width': '5px', '--dayringprogressbar-size': '38px'}">
              <circle class="bg"
                cx="125" cy="125" r="115" fill="none" stroke="#ddd" stroke-width="20"
              ></circle>
              <circle class="fg" :style="{'stroke': daycolor[2]}"
                cx="125" cy="125" r="115" fill="none" stroke="#5394fd" stroke-width="20"
              ></circle>
            </svg>
            <div class="goals-dayringlabel">อ</div>
          </div>

          <div class="goals-dayring">
            <svg width="38" height="38" viewBox="0 0 38 38" class="goalds-ringprogressbar" :style="{'--dayringprogressbar-progress': `${(allring[3]*100)/18000}`, '--dayringprogressbar-stroke-width': '5px', '--dayringprogressbar-size': '38px'}">
              <circle class="bg"
                cx="125" cy="125" r="115" fill="none" stroke="#ddd" stroke-width="20"
              ></circle>
              <circle class="fg" :style="{'stroke': daycolor[3]}"
                cx="125" cy="125" r="115" fill="none" stroke="#5394fd" stroke-width="20"
              ></circle>
            </svg>
            <div class="goals-dayringlabel">พ</div>
          </div>

          <div class="goals-dayring">
            <svg width="38" height="38" viewBox="0 0 38 38" class="goalds-ringprogressbar" :style="{'--dayringprogressbar-progress': `${(allring[4]*100)/18000}`, '--dayringprogressbar-stroke-width': '5px', '--dayringprogressbar-size': '38px'}">
              <circle class="bg"
                cx="125" cy="125" r="115" fill="none" stroke="#ddd" stroke-width="20"
              ></circle>
              <circle class="fg" :style="{'stroke': daycolor[4]}"
                cx="125" cy="125" r="115" fill="none" stroke="#5394fd" stroke-width="20"
              ></circle>
            </svg>
            <div class="goals-dayringlabel">พฤ</div>
          </div>

          <div class="goals-dayring">
            <svg width="38" height="38" viewBox="0 0 38 38" class="goalds-ringprogressbar" :style="{'--dayringprogressbar-progress': `${(allring[5]*100)/18000}`, '--dayringprogressbar-stroke-width': '5px', '--dayringprogressbar-size': '38px'}">
              <circle class="bg"
                cx="125" cy="125" r="115" fill="none" stroke="#ddd" stroke-width="20"
              ></circle>
              <circle class="fg" :style="{'stroke': daycolor[5]}"
                cx="125" cy="125" r="115" fill="none" stroke="#5394fd" stroke-width="20"
              ></circle>
            </svg>
            <div class="goals-dayringlabel">ศ</div>
          </div>

          <div class="goals-dayring">
            <svg width="38" height="38" viewBox="0 0 38 38" class="goalds-ringprogressbar" :style="{'--dayringprogressbar-progress': `${(allring[6]*100)/18000}`, '--dayringprogressbar-stroke-width': '5px', '--dayringprogressbar-size': '38px'}">
              <circle class="bg"
                cx="125" cy="125" r="115" fill="none" stroke="#ddd" stroke-width="20"
              ></circle>
              <circle class="fg" :style="{'stroke': daycolor[6]}"
                cx="125" cy="125" r="115" fill="none" stroke="#5394fd" stroke-width="20"
              ></circle>
            </svg>
            <div class="goals-dayringlabel">ส</div>
          </div>

        </div>

        <div class="goals-todayring">
          
          <div class="goals-streak">
            การต่อเนื่อง<br><span class="goals-streakdaylabel">{{store.state.GoalTimer.streak}}</span> วัน
          </div>

          <div class="goals-todayprogress">
              
            <svg width="253" height="253" viewBox="0 0 253 253" class="goalds-todayringprogressbar" :style="{'--dayringprogressbar-progress': (allring[new Date().getDay()]*100)/18000, '--dayringprogressbar-stroke-width': '15px','--dayringprogressbar-size': '253px'}">
              <circle class="bg"
                cx="125" cy="125" r="115" fill="none" stroke="#ddd" stroke-width="20"
              ></circle>
              <circle class="fg" :style="{'stroke': daycolor[new Date().getDay()]}"
                cx="125" cy="125" r="115" fill="none" stroke="#5394fd" stroke-width="20"
              ></circle>
            </svg>

            <div class="goals-progresslabel">
              <div class="goals-progresstimer">{{timer.time}}</div>
              <div class="goals-goal">เป้าหมาย 5 ชั่วโมง</div>
              <div>{{ `${String(new Date().getFullYear())}-${String(new Date().getMonth()+1).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')}` }}</div>
            </div>

          </div>
          <div v-ripple class="p-ripple goals-readtogglebtn" :class="{'goals-isrunning': timer.running}" @click="readbtn">{{ timer.timeBegan === null ? 'เริ่มอ่าน' : timer.running ? 'หยุดอ่าน' : 'อ่านต่อ'}}</div>
        </div>
        
        
      </div>
      <div class="goals-bottom">
        <Chart type="bar"  :data="chart" :options="options" />
      </div>
    </div>
</template>


<script scoped>
export default {
  data() {
    return {
      interval: null,

      timer: {
        time: "00:00:00",

        timeDay: this.$store.state.GoalTimer.timer.timeDay,

        timeBegan: this.$store.state.GoalTimer.timer.timeBegan,
        timeStopped: this.$store.state.GoalTimer.timer.timeStopped,

        stoppedDuration: this.$store.state.GoalTimer.timer.stoppedDuration,
        running: this.$store.state.GoalTimer.timer.running
      },

      allring: {
        0: this.$store.state.GoalTimer.allring[0],
        1: this.$store.state.GoalTimer.allring[1],
        2: this.$store.state.GoalTimer.allring[2],
        3: this.$store.state.GoalTimer.allring[3],
        4: this.$store.state.GoalTimer.allring[4],
        5: this.$store.state.GoalTimer.allring[5],
        6: this.$store.state.GoalTimer.allring[6]
      },

      daycolor: {
        0: '#ff0000',
        1: '#FFD600',
        2: '#ff8fff',
        3: '#01cc01',
        4: '#ff9900',
        5: '#33ccff',
        6: '#993399',
      },

      chart: {
        labels: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
        datasets: [
            {
                label: 'Sales',
                data: [13, 4.5, 3, 4, 2, 0, 1],

                borderWidth: 1,
                borderRadius: {
                  topLeft: 15,
                  topRight: 15
                }
            }
        ]
      },
      options: {
        interaction: false,
        

        plugins: {
          legend: false,
          tooltip: {
            enabled: false
          }
        },
        responsive: true,
        maintainAspectRatio: true,
        scales: {
         y: {
            ticks: {
              callback: value => `${value}h`
            }
         } 
        }
      }
    };
  },
  beforeDestroy() {
    // prevent memory leak
    clearInterval(this.interval)
  },
  created() {

    if (this.timer.timeBegan !== null && !this.timer.running) {

      var stoppedDuration = this.timer.stoppedDuration + (new Date() - this.timer.timeStopped);

      var currentTime = new Date()
        , timeElapsed = new Date(currentTime - this.timer.timeBegan - stoppedDuration)
        , hour = timeElapsed.getUTCHours()
        , min = timeElapsed.getUTCMinutes()
        , sec = timeElapsed.getUTCSeconds()
        , ms = timeElapsed.getUTCMilliseconds();

      this.timer.time =
        this.zeroPrefix(hour, 2) + ":" +
        this.zeroPrefix(min, 2) + ":" +
        this.zeroPrefix(sec, 2)

      this.allring[currentTime.getDay()] = this.timer.time.split(':').reduce((acc, time, index) => acc + (+time) * (60 ** (2 - index)), 0)

    } else if (this.timer.timeBegan !== null && this.timer.running) {
      var currentTime = new Date()
        , timeElapsed = new Date(currentTime - this.timer.timeBegan - this.timer.stoppedDuration)
        , hour = timeElapsed.getUTCHours()
        , min = timeElapsed.getUTCMinutes()
        , sec = timeElapsed.getUTCSeconds()
        , ms = timeElapsed.getUTCMilliseconds();

      this.timer.time =
        this.zeroPrefix(hour, 2) + ":" +
        this.zeroPrefix(min, 2) + ":" +
        this.zeroPrefix(sec, 2)
      
      this.allring[currentTime.getDay()] = this.timer.time.split(':').reduce((acc, time, index) => acc + (+time) * (60 ** (2 - index)), 0)
    }

    this.interval = setInterval(() => {

      if (this.timer.timeBegan === null) {
        this.timer.time = "00:00:00"
      } else {

        const todayDate = `${String(new Date().getFullYear())}-${String(new Date().getMonth()+1).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')}`
        if (this.timer.timeDay !== todayDate) {

          
          
          this.$store.commit('GoalTimer/saveTimerHistory', {
            timeDay: this.timer.timeDay,

            time: this.timer.time.split(':').reduce((acc, time, index) => acc + (+time) * (60 ** (2 - index)), 0)
          })

          if (this.timer.running) {
            this.timer.timeDay = todayDate

            this.timer.timeBegan = new Date()
            this.timer.timeStopped = null

            this.timer.stoppedDuration = 0
          } else {
            this.timer.timeDay = todayDate

            this.timer.timeBegan = null
            this.timer.timeStopped = null

            this.timer.stoppedDuration = 0
          }

          this.$store.commit('GoalTimer/setGoalTimer', {
            timeDay: this.timer.timeDay,
              
            timeBegan: this.timer.timeBegan,
            timeStopped: this.timer.timeStopped,
              
            stoppedDuration: this.timer.stoppedDuration,
            running: this.timer.running
          })

        }

        if (this.timer.running) {
          var currentTime = new Date()
            , timeElapsed = new Date(currentTime - this.timer.timeBegan - this.timer.stoppedDuration)
            , hour = timeElapsed.getUTCHours()
            , min = timeElapsed.getUTCMinutes()
            , sec = timeElapsed.getUTCSeconds()
            , ms = timeElapsed.getUTCMilliseconds();

          this.timer.time =
            this.zeroPrefix(hour, 2) + ":" +
            this.zeroPrefix(min, 2) + ":" +
            this.zeroPrefix(sec, 2)

            
            this.allring[currentTime.getDay()] = this.timer.time.split(':').reduce((acc, time, index) => acc + (+time) * (60 ** (2 - index)), 0)

          if (this.timer.time.split(':').reduce((acc, time, index) => acc + (+time) * (60 ** (2 - index)), 0) == 18000) {
            this.$store.commit('GoalTimer/setGoalTimer', {
              timeDay: this.timer.timeDay,

              timeBegan: this.timer.timeBegan,
              timeStopped: this.timer.timeStopped,

              stoppedDuration: this.timer.stoppedDuration,
              running: this.timer.running
            })
            this.$store.commit('GoalTimer/saveTimerHistory', {
              timeDay: this.timer.timeDay,

              time: this.timer.time.split(':').reduce((acc, time, index) => acc + (+time) * (60 ** (2 - index)), 0)
            })
            this.$store.commit('GoalTimer/recheckStreak')
          }
        }
      }

    }, 100)
  },
  methods: {
    readbtn() {
      if (!this.timer.running) {

        if (this.timer.timeBegan === null) {
          this.timer.timeBegan = new Date();
        }

        if (this.timer.timeStopped !== null) {
          this.timer.stoppedDuration += (new Date() - this.timer.timeStopped);
        }

        this.timer.running = true;

      } else if (this.timer.running) {
        this.timer.running = false;
        this.timer.timeStopped = new Date();
      }

      this.$store.commit('GoalTimer/setGoalTimer', {
        timeDay: this.timer.timeDay,

        timeBegan: this.timer.timeBegan,
        timeStopped: this.timer.timeStopped,

        stoppedDuration: this.timer.stoppedDuration,
        running: this.timer.running
      })

      this.$store.commit('GoalTimer/saveTimerHistory', {
        timeDay: this.timer.timeDay,

        time: this.timer.time.split(':').reduce((acc, time, index) => acc + (+time) * (60 ** (2 - index)), 0)
      })

      

    },

    zeroPrefix(num, digit) {
      var zero = '';
      for (var i = 0; i < digit; i++) {
        zero += '0';
      }
      return (zero + num).slice(-digit);
    }
  }
};
</script>
  
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
  stroke: #f0ebeb;
}

.goalds-todayringprogressbar circle.fg {
  transform: rotate(-226.4deg);
  transform-origin: var(--dayringprogressbar-half-size) var(--dayringprogressbar-half-size);
  stroke-dasharray: var(--dayringprogressbar-dash) calc(var(--dayringprogressbar-circumference) - var(--dayringprogressbar-dash));
  transition: stroke-dasharray 0.3s linear 0s;
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
  box-shadow: #0003 0px 3px 1px -2px;
  cursor: pointer;
}
.goals-isrunning {
  background-color: #e8ebee;
  color: #020617;
}

.goals-streak {
  margin-top: 7px;
  position: absolute;

  margin-left: 300px;
  
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

.goals-bottom {
  height: 50px;
  width: 100%;
}
</style>
  