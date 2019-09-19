<template>
  <div class="halo">
    <h1>Score: {{score}}</h1>
    <h1>
      <countdown ref="sessionTimer" :left-time="11000" @finish="nextPage">
        <span slot="process" slot-scope="{ timeObj }">{{ timeObj.ceil.s-1 }}</span>
        <span slot="finish" ref="startCountdown(restart)"></span>
      </countdown>
    </h1>

    <div v-if="showQA">
        <b-row>
          <b-card>
            <b-card-text>{{ quizData.questions[index].question }}</b-card-text>
          </b-card>
        </b-row>

        <b-row class="mt-4">
          <b-col v-for="(a,i) in quizData.questions[index].answers" :key="i" cols="6">
            <b-button @click="sendAnswer(a)" class="m-2 btn-block">
              <p>{{a}}</p>
            </b-button>
          </b-col>
        </b-row>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import db from '../main'
import firebase from 'firebase'
import Swal from 'sweetalert2'
export default {
  data() {
    return {
      quizData: {},
      score: 0,
      showQA: true,
      index: 0
    };
  },
  methods: {
    sendAnswer(a) {
     if(this.quizData.questions[this.index].solution == a){
       Swal.fire({
         type: 'success',
         text: 'Correct!'
       })
       this.score++
     } else {
       Swal.fire({
         type: 'error',
         text: 'Wrong Answer!'
       })
     }
     this.showQA = false
    },
    nextPage() {
      if(Number(this.index) > 6){
        db.collection('rooms').doc(this.$route.params.qid).update({
          totalScore: firebase.firestore.FieldValue.arrayUnion({
            username: localStorage.getItem('username'),
            score: this.score
          })
        })
        this.$router.push(`/rank/${this.$route.params.qid}`)
      } else {
            this.index++
            this.showQA = true
            this.$refs.sessionTimer.startCountdown(true);
      }
    }
  },
  mounted() {
    db.collection('rooms')
      .doc(this.$route.params.qid)
      .onSnapshot(docRef => {
        this.quizData = docRef.data()
      })
  }
};
</script>

<style>
.atas {
  background: whitesmoke;
  width: 50%;
  height: 30%;
  margin-bottom: 5%;
  padding: 3%;
}
.bawah {
  width: 50%;
  height: 30%;
}
.halo {
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.up {
  height: 40%;
  width: 100%;
  margin-bottom: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.down {
  height: 40%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.satu {
  height: 100%;
  width: 40%;
  background: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2%;
}
.satu:hover {
  height: 100%;
  width: 40%;
  background: whitesmoke;
  -webkit-box-shadow: 0px 7px 13px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 7px 13px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 7px 13px 0px rgba(0, 0, 0, 0.75);
}
.dua:hover {
  height: 100%;
  width: 40%;
  background: whitesmoke;
  -webkit-box-shadow: 0px 7px 13px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 7px 13px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 7px 13px 0px rgba(0, 0, 0, 0.75);
}
.tiga:hover {
  height: 100%;
  width: 40%;
  background: whitesmoke;
  -webkit-box-shadow: 0px 7px 13px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 7px 13px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 7px 13px 0px rgba(0, 0, 0, 0.75);
}
.empat:hover {
  height: 100%;
  width: 40%;
  background: whitesmoke;
  -webkit-box-shadow: 0px 7px 13px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 7px 13px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 7px 13px 0px rgba(0, 0, 0, 0.75);
}
.dua {
  height: 100%;
  width: 40%;
  background: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2%;
}
.tiga {
  height: 100%;
  width: 40%;
  background: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2%;
}
.empat {
  height: 100%;
  width: 40%;
  background: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2%;
}
</style>
