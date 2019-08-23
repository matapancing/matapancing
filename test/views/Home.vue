<template>
  <div class="home">
    <Login/>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
import Start from '@/components/Start.vue';

export default {
  name: 'home',
  data() {
    return {
      Start: false,
      login: true
    }
  },
  components: {
    Start,
    Login,
  },
  methods: {
    login(){
      if(localStorage){
        this.login = false
        this.Start = false
      }
    }
  }
};
</script>
<style scoped>

</style>
