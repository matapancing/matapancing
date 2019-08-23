<template>
  <section class="login">
    <h4>Join Game</h4>
    <form @submit.prevent="$store.commit('LOGIN')" class="mt-3">
      <input v-model="$store.state.username" type="text" class="form-control btn-lg" placeholder="Pick your name...">
      <button type="submit" class="btn btn-primary btn-lg mt-3 btn-block">Let's Rock!</button>
    </form>
    <audio autoplay loop>
      <source src="../audio/chicken.mp3" type="audio/mp3" />
    </audio>
  </section>
</template>

<script>

export default {
  methods: {
    login() {
      if (localStorage){
        
      }
    }
  }
};
</script>

<style scoped>
  .login{
    /* font-family: 'Kalam', cursive; */
    text-align: center; 
    width: 25rem;
    padding: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  font-family: 'Bangers', cursive;
  };

</style>
