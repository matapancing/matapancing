<template>
  <div id="app">
    <b-button v-if="$store.state.isLogin" @click="$store.commit('LOGOUT')" class="btn-sm btn-danger" id="logout-button">
      Logout
    </b-button>
    <router-view></router-view>
  </div>
</template>

<script>

import Home from '@/views/Home.vue'

export default {
  mounted() {
    if(localStorage.getItem('username') && !localStorage.getItem('room')){
      this.$router.push('/rooms')
    }
  },  
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#logout-button {
  position: fixed;
  right: 3rem;
  top: 3rem;
}
</style>
