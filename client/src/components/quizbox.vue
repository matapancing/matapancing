<template>
  <div class="halo">
    <h1>
      Countdown:
      <countdown ref="sessionTimer" :left-time="11000" @finish="nextPage">
        <!-- 101 seconds -->
        <span slot="process" slot-scope="{ timeObj }">{{ timeObj.ceil.s-1 }}</span>
        <span slot="finish" ref="startCountdown(restart)"></span>
      </countdown>
    </h1>
     <b-row>
      <b-card>
        <b-card-text>{{ quizData.questions[quizData.onPage].question }}</b-card-text>
      </b-card>
    </b-row>

    <b-row class="mt-4">
      <b-col v-for="(a,i) in quizData.questions[quizData.onPage].answers" :key="i" cols="6">
        <b-button @click="sendAnswer()" class="m-2 btn-block">
          <p>{{a}}</p>
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
import db from '../main'
export default {
  data() {
    return {
      quizData: {},
    };
  },
  created() {
    // this.$store.dispatch("putMath");
  },
  computed: mapState({
    questions: "mathquestions"
  }),
  methods: {
    sendAnswer() {
      if (this.$route.params.id < 10) {
        this.$router.push(`/quizzes/${Number(this.$route.params.id) + 1}`);
      } else {
        this.$router.push(`/rank`);
      }
    },
    nextPage() {
      this.$router.push(`/quizzes/${Number(this.$route.params.id) + 1}`);
      this.$refs.sessionTimer.startCountdown(true);
    }
  },
  watch: {
    "$route.params.id": function(val) {
      this.index = val;
    }
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
