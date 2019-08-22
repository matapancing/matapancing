import Vue from 'vue';
import Vuex from 'vuex';
import axMath from '../apis/math'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mathquestions: []
  },
  mutations: {
    FETCHQUESTION(state, payload){
      state.mathquestions = payload
    }
  },
  actions: {
    putMath(context){
      axMath({
        method: 'get',
        url: 'https://opentdb.com/api.php?amount=10&category=19&type=multiple'
      })
      .then(({data}) => {
        console.log(data)
        context.commit('FETCHQUESTION', data)
      }).catch(err => {
        console.log(err)
      })

    }

  },
});
