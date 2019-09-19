<template>
  <div class="bodi">
      <div class="rank">
          <h1>Ranking</h1>
      </div>
    <div class="format">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Username</th>
            <th scope="col">Point</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(p,i) in players" :key="i">
            <th scope="row">{{ p.username }}</th>
            <td>{{ p.score }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import db from '../main.js'
import { setTimeout } from 'timers';
export default {
  data() {
    return {
      players: []
    }
  },
  mounted() {
    db.collection('rooms').doc(this.$route.params.qid).onSnapshot(docRef => {
        let data = docRef.data().totalScore
        console.log(data)
        this.players = data.sort(function(a, b){return b.score - a.score})
      })
  }
};
</script>

<style>
.bodi {
    height:100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.rank {
    margin-bottom: 2%;
}
</style>
