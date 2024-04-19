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
    0: [],
    1: [
      {
        id: 'TEST001',
        startPeriod: 0,
        endPeriod: 1
      },
    ],
    2: [],
    3: [],
    4: [],
    5: [],
    6: []
  },
  mutations: {
    addSchedulePeriod(state, payload) {
      state[payload.day].push(payload.detail)
      //console.log(state)
    },
    setLocalStorage(state, payload) {
        state.subject.name = payload;
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
    ScheduleList
  }
})