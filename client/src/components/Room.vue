<template>
  <div>
      <b-button @click="$store.commit('LOGOUT')" class="btn-sm btn-danger" id="logout-button">
        Logout
      </b-button>
      <b-card no-body class="mt-3">
          <h1 class="text-center pt-2">{{ detail.name }}</h1>
          <b-row>
          <b-col class="text-center">
              {{detail.players.length}} Players Joined
          </b-col>
          <b-col>
          <b-button v-if="!isJoined" class="btn-block btn-primary border-0" @click="joinRoom(detail.id)">
              Join Room
          </b-button>
          <b-button v-if="isJoined && detail.id == joinedRoom && !roomMaster" class="btn-block btn-primary border-0">
              Ready
          </b-button>
          <b-button v-if="roomMaster == detail.id" class="btn-block btn-primary border-0" @click="playGame(detail.id)">
              Play
          </b-button>
          </b-col>
          </b-row>
      </b-card>
  </div>
</template>

<script>
import db from '../main.js';
export default {
  props: ['detail'],
  data() {
    return {
      isJoined: false,
      joinedRoom: '',
      roomMaster: ''
    }
  },
  methods: {
    joinRoom(payload) {
      this.$store.dispatch('joinRoom', payload)
      this.joinedRoom = payload
      this.isJoined = true
      console.log('JOINED', this.joinedRoom)

      if(localStorage.getItem('master')){
        this.roomMaster = localStorage.getItem('master')
      }
    },
    playGame(id) {
      db.collection('rooms').doc(id).update(
        { isPlaying: true })
      this.$router.push(`/quizzes/${id}`)
    },
  },
  created() {
       db.collection('rooms')
        .onSnapshot(() => {
          db.collection('rooms').doc(localStorage.getItem('room')).onSnapshot(docRef => {
            let isPlaying = docRef.data().isPlaying
      
            console.log('ONSNAPSHOT')
      
            if(isPlaying){
              this.$router.push(`/quizzes/${docRef.id}`)
            }
          })
        })

      

    if(localStorage.getItem('master')) {
      this.isJoined = true
      this.roomMaster = localStorage.getItem('master')
      this.joinedRoom = localStorage.getItem('room')
    } else if(localStorage.getItem('room')){
      this.isJoined = true
      this.joinedRoom = localStorage.getItem('room')
    }
  },
}
</script>

<style>
.red {
  background-color: #ea0032;
}

.blue {
  background-color: #4f18d5;
}

.purple {
  background-color: #5e0094;
}

.green {
  background-color: #009e00;
}

.yellow {
  background-color: #fdb200;
}
</style>