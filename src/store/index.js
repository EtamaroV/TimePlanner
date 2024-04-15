import Vuex from 'vuex'

const addschedule = {
    namespaced: true,
    state: {
      subject: {
        id: null,
        name: null,
        description: {
            room: null,
            code: null,
            Teacher: null
        }
      },
      timestart: null,
      timeend: null,
    },
    mutations: {
        setSubjectName(state, payload) {
            state.subject.name = payload;
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
          Teacher: 'ครูลองดู'
      }
    },
    {
      id: 'TEST002',
      name: 'ทดสอบวิชา2',
      description: {
          room: '345',
          code: 'ท54321',
          Teacher: 'ครูลองกอง'
      }
    },
    {
      id: 'TEST003',
      name: 'ทดสอบวิชา3',
      description: {
          room: '345',
          code: 'ท54321',
          Teacher: 'ครูลองกอง'
      }
    },
    {
      id: 'TEST004',
      name: 'ทดสอบวิชา4',
      description: {
          room: '345',
          code: 'ท54321',
          Teacher: 'ครูลองกอง'
      }
    },
    {
      id: 'TEST005',
      name: 'ทดสอบวิชา5',
      description: {
          room: '345',
          code: 'ท54321',
          Teacher: 'ครูลองกอง'
      }
    },
    {
      id: 'TEST006',
      name: 'ทดสอบวิชา6',
      description: {
          room: '345',
          code: 'ท54321',
          Teacher: 'ครูลองกอง'
      }
    },
    {
      id: 'TEST007',
      name: 'ทดสอบวิชา7',
      description: {
          room: '345',
          code: 'ท54321',
          Teacher: 'ครูลองกอง'
      }
    },
    {
      id: 'TEST008',
      name: 'ทดสอบวิชา8',
      description: {
          room: '345',
          code: 'ท54321',
          Teacher: 'ครูลองกอง'
      }
    },
    {
      id: 'TEST009',
      name: 'ทดสอบวิชา9',
      description: {
          room: '345',
          code: 'ท54321',
          Teacher: 'ครูลองกอง'
      }
    },
    {
      id: 'TEST010',
      name: 'ทดสอบวิชา10',
      description: {
          room: '345',
          code: 'ท54321',
          Teacher: 'ครูลองกอง'
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