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
        console.log(payload)
        state.time.startPeriod = payload.startPeriod;
        state.time.endPeriod = payload.endPeriod;
      },
      setColor(state, payload) {
        state.color = payload;
      },
    },
}

const SubjectList = {
  namespaced: true,
  state: [
    {
      id: 'TEST001',
      name: 'ทดสอบวิชา1',
      description: {
          room: '543',
          code: 'ท12345',
          teacher: 'ครูลองดู'
      }
    },
    {
      id: 'TEST002',
      name: 'ทดสอบวิชา2',
      description: {
          room: '345',
          code: 'ท54321',
          teacher: 'ครูลองกอง'
      }
    },
    {
      id: 'TEST003',
      name: 'ทดสอบวิชา3',
      description: {
          room: '345',
          code: 'ท54321',
          teacher: 'ครูลองกอง'
      }
    },
    {
      id: 'TEST004',
      name: 'ทดสอบวิชา4',
      description: {
          room: '345',
          code: 'ท54321',
          teacher: 'ครูลองกอง'
      }
    },
    {
      id: 'TEST005',
      name: 'ทดสอบวิชา5',
      description: {
          room: '345',
          code: 'ท54321',
          teacher: 'ครูลองกอง'
      }
    },
    {
      id: 'TEST006',
      name: 'ทดสอบวิชา6',
      description: {
          room: '345',
          code: 'ท54321',
          teacher: 'ครูลองกอง'
      }
    },
    {
      id: 'TEST007',
      name: 'ทดสอบวิชา7',
      description: {
          room: '345',
          code: 'ท54321',
          teacher: 'ครูลองกอง'
      }
    },
    {
      id: 'TEST008',
      name: 'ทดสอบวิชา8',
      description: {
          room: '345',
          code: 'ท54321',
          teacher: 'ครูลองกอง'
      }
    },
    {
      id: 'TEST009',
      name: 'ทดสอบวิชา9',
      description: {
          room: '345',
          code: 'ท54321',
          teacher: 'ครูลองกอง'
      }
    },
    {
      id: 'TEST010',
      name: 'ทดสอบวิชา10',
      description: {
          room: '345',
          code: 'ท54321',
          teacher: 'ครูลองกอง'
      }
    },
  ]
}

const ScheduleList = {
  namespaced: true,
  state: {
    sunday: [],
    monday: [
      {
        id: 'TEST001',
        timestart: 0,
        timeend: 1
      },
    ],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: []
  },
  mutations: {
      setSubjectName(state, payload) {
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
    SubjectList
  }
})