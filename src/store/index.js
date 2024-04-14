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
    addschedule
  }
})