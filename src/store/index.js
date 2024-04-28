import Vuex from 'vuex'

const addschedule = {
    namespaced: true,
    state: {
      subjectExist: false,
      subject: {
        id: null,
        name: null,
        description: {
            room: null,
            code: null,
            teacher: null
        }
      },
      time: {
        day: null,
        startPeriod: null,
        endPeriod: null,
      },
      color: null
    },
    mutations: {
      setsubjectExist(state, payload) {
        state.subjectExist = payload
      },
      setSubject(state, payload) {
        state.subject.id = payload.id;
        state.subject.name = payload.name;
        state.subject.description.room = payload.description.room;
        state.subject.description.code = payload.description.code;
        state.subject.description.teacher = payload.description.teacher;
      },
      setTime(state, payload) {
        state.time.day = payload.day;
        state.time.startPeriod = payload.startPeriod;
        state.time.endPeriod = payload.endPeriod;
      },
      setColor(state, payload) {
        state.color = payload;
      },

      clearState(state) {
        state.subjectExist = false
        state.subject.id = null;
        state.subject.name = null;
        state.subject.description.room = null;
        state.subject.description.code = null;
        state.subject.description.teacher = null;
        state.time.day = null;
        state.time.startPeriod = null;
        state.time.endPeriod = null;
        state.color = null;
      }
    },
}

const SubjectList = {
  namespaced: true,
  state: [
  ],
  mutations: {
    initialiseSubjectList(state) {
			// Check if the ID exists
			if(localStorage.getItem('SubjectList')) {

        const storedData = JSON.parse(localStorage.getItem('SubjectList'))

        state.splice(0, state.length, ...storedData);
        //console.log(state)
        state.push({"id":"TEST001","name":"Test555","description":{"room":"123","code":"55555","teacher":"TEACHERTEST  EIEI"},"color":"#f8b28c"})
			}
		},

    addSubject(state, payload) {
      state.push(payload)

      localStorage.setItem('SubjectList', JSON.stringify(state));
    },
  },
}


const ScheduleList = {
  namespaced: true,
  state: {
    0: [
      
    ],
    1: [

    ],
    2: [

    ],
    3: [

    ],
    4: [

    ],
    5: [

    ],
    6: [

    ]
  },
  mutations: {
    initialiseScheduleList(state) {
			// Check if the ID exists
			if(localStorage.getItem('ScheduleList')) {

        const storedData = JSON.parse(localStorage.getItem('ScheduleList'))

        for (let x in storedData) {
          if (storedData[x].length > 1) {
            storedData[x].sort((a, b) => {
              const timeA = new Date(`1970-01-01T${a.startPeriod}:00`);
              const timeB = new Date(`1970-01-01T${b.startPeriod}:00`);
              return timeA - timeB;
            });
          }
          state[x] = storedData[x]
        }

			}
		},
    addSchedulePeriod(state, payload) {
      state[payload.day].push(payload.detail)

      for (let i in state) {
        if (state[i].length > 1) {
          state[i].sort((a, b) => {
            const timeA = new Date(`1970-01-01T${a.startPeriod}:00`);
            const timeB = new Date(`1970-01-01T${b.startPeriod}:00`);
            return timeA - timeB;
          });
        }
      }

      localStorage.setItem('ScheduleList', JSON.stringify(state));
    },
    removeSchedule(state, payload) {
      state[payload.day].splice(payload.index, 1)

      for (let i in state) {
        if (state[i].length > 1) {
          state[i].sort((a, b) => {
            const timeA = new Date(`1970-01-01T${a.startPeriod}:00`);
            const timeB = new Date(`1970-01-01T${b.startPeriod}:00`);
            return timeA - timeB;
          });
        }
      }

      localStorage.setItem('ScheduleList', JSON.stringify(state));
    },
  },
}

const GoalTimer = {
  namespaced: true,
  state: {
    timerhistory: [],
    timer: {
      timeDay: `${String(new Date().getFullYear())}-${String(new Date().getMonth()+1).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')}`,
      
      timeBegan: null,
      timeStopped: null,
      
      stoppedDuration: 0,
      running: false
    }
  },
  mutations: {
    initialiseGoalTimer(state) {
			// Check if the ID exists
      if(localStorage.getItem('TimerHistory')) {
        const GoalTimerstoredData = JSON.parse(localStorage.getItem('TimerHistory'))
        state.timerhistory = GoalTimerstoredData
      }

			if(localStorage.getItem('GoalTimer')) {

        const storedData = JSON.parse(localStorage.getItem('GoalTimer'))

        state.timer.timeDay = storedData.timeDay

        if (storedData.timeDay === `${String(new Date().getFullYear())}-${String(new Date().getMonth()+1).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')}`) {
          state.timer.timeBegan = new Date(storedData.timeBegan)
          state.timer.timeStopped = storedData.timeStopped === null ? null : new Date(storedData.timeStopped)
          state.timer.stoppedDuration = storedData.stoppedDuration
          state.timer.running = storedData.running
        } else {

          const zeroPrefix = (num, digit) => {
            var zero = '';
            for (var i = 0; i < digit; i++) {
              zero += '0';
            }
            return (zero + num).slice(-digit);
          }
          
          if (storedData.running) {
            var currentTime = new Date(storedData.timeBegan)
            currentTime.setUTCDate(currentTime.getUTCDate() + 1);
            currentTime.setHours(0)
            currentTime.setMinutes(0)
            currentTime.setSeconds(0)
            
            var timeElapsed = new Date(currentTime - new Date(storedData.timeBegan) - storedData.stoppedDuration)
            , hour = timeElapsed.getUTCHours()
            , min = timeElapsed.getUTCMinutes()
            , sec = timeElapsed.getUTCSeconds()
            , ms = timeElapsed.getUTCMilliseconds();

            const time =
              zeroPrefix(hour, 2) + ":" +
              zeroPrefix(min, 2) + ":" +
              zeroPrefix(sec, 2)

            if (state.timerhistory.find(({ date }) => date === storedData.timeDay)) {
              state.timerhistory.find(({ date }) => date === storedData.timeDay).time = time.split(':').reduce((acc, time, index) => acc + (+time) * (60 ** (2 - index)), 0)
            } else {
              state.timerhistory.push({date: storedData.timeDay, time: time.split(':').reduce((acc, time, index) => acc + (+time) * (60 ** (2 - index)), 0)})
            }

          }

        }

        
        
			} 


		},
    setGoalTimer(state, payload) {
      state.timer.timeDay = payload.timeDay
      state.timer.timeBegan = payload.timeBegan
      state.timer.timeStopped = payload.timeStopped
      state.timer.stoppedDuration = payload.stoppedDuration
      state.timer.running = payload.running

      localStorage.setItem('GoalTimer', JSON.stringify(state.timer));
    },
    saveTimerHistory(state, payload) {


      if (state.timerhistory.find(({ date }) => date === payload.timeDay)) {
        state.timerhistory.find(({ date }) => date === payload.timeDay).time = payload.time
      } else {
        state.timerhistory.push({date: payload.timeDay, time: payload.time})
      }


      localStorage.setItem('TimerHistory', JSON.stringify(state.timerhistory));
    },
  },
}




//EXPORT!!!
export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    addschedule,
    SubjectList,
    
    ScheduleList,

    GoalTimer
  }
})