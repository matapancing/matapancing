import Vue from 'vue';
import Vuex from 'vuex';
import shuffle from '../helper/shuffle'
import Axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mathquestions: [],
  },
  mutations: {
    FETCHQUESTION(state, payload) {
      state.mathquestions = payload;
    },
  },
  actions: {
    putMath(context) {
      Axios({
        method: 'get',
        url: 'https://opentdb.com/api.php?amount=10&category=19&type=multiple',
      })
      .then(({data}) => {
        let quiz = data.results
        let kumpulKuis = []
        for(let i = 0; i < quiz.length;i++){
          let kuis = quiz[i]
          let kumpulQuiz = {}
          kumpulQuiz['question'] = kuis.question
          kumpulQuiz['answers'] = shuffle([kuis.correct_answer,...kuis.incorrect_answers])
          kumpulQuiz['correctAnswer'] = kuis.correct_answer
          kumpulKuis.push(kumpulQuiz)
        }
        context.commit('FETCHQUESTION', kumpulKuis)
      }).catch(err => {
        console.log(err)
      })

    }

  },
});
