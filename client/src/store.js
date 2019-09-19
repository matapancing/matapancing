import Vue from 'vue';
import Vuex from 'vuex';
import shuffle from '../helper/shuffle'
import Axios from 'axios';
import router from './router'
import db from './main'
import firebase from 'firebase'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    username: '',
    room: '',
    rooms: [],
    master: ''
  },
  mutations: {
    LOGIN(state) {
      localStorage.setItem('username', state.username)
      state.username = ''
      router.push('/rooms')
      state.isLogin = true
    },
    LOGOUT(state) {
      state.isLogin = false
      localStorage.clear()
      router.push('/')
    },
    CREATEROOM(state, payload) {
      state.room = payload
      state.master = payload
    },
    SAVEROOMS(state, payload) {
      state.rooms = payload
    },
    JOINROOM(state, payload) {
      localStorage.setItem('room', payload)
    }
  },
  actions: {
    fetchQuestions({ dispatch }) {
      Axios({
        method: 'GET',
        url: 'https://opentdb.com/api.php?amount=10&category=19&type=multiple',
      })
      .then(({ data }) => {
        const quiz = data.results
        let arrayOfQuestions = []

        for(let i = 0; i < quiz.length;i++){
          let q = quiz[i]
          let questionObject = {}

          questionObject['question'] = q.question
          questionObject['answers'] = shuffle([q.correct_answer,...q.incorrect_answers])
          questionObject['solution'] = q.correct_answer

          arrayOfQuestions.push(questionObject)
        }
  
        dispatch('createRoom', arrayOfQuestions)
      })
      .catch(console.log)
    },
    createRoom({ state, commit }, payload) {
      db.collection('rooms').add({
        master: localStorage.getItem('username'),
        players: [{username: localStorage.getItem('username'), score: 0 }],
        name: state.room,
        isPlaying: false,
        onPage: 0,
        questions: payload,
        totalScore: []
      })
      .then(docRef => {
        localStorage.setItem('master', docRef.id)
      })
      .catch(console.log)
    },
    getRooms({ commit }) {
      db.collection("rooms").onSnapshot((querySnapshot) => {
        let allRooms = []
        querySnapshot.forEach((doc) => {
            allRooms.push({ ...doc.data(), id: doc.id })
        })
        commit('SAVEROOMS', allRooms)
      });
    },
    joinRoom({ commit }, payload) {
      db.collection("rooms").doc(payload).update({
        players: firebase.firestore.FieldValue.arrayUnion({ username: localStorage.getItem('username'), score: 0 })
      })
      commit('JOINROOM', payload)
    }
  },
});
