<template>
<!-- login -->
<section class="login">
  <h4>Login App</h4>
  <form v-on:submit.prevent="submitLogin" class="mt-3">
    <div class="form-group">
      <input v-model="name" type="text" class="form-control p-4" placeholder="your name">
    </div>
    <button type="submit" class="btn btn-primary mr-3 mt-2">Login</button>
  </form>
</section>
</template>

<script>

export default {
  data() {
    return {
      name: '',
    };
  },
  methods: {
    submitLogin() {
      if(localStorage){
        this.$router.push('/room')
      } else {
        localStorage.setItem('name', this.name)
      }
    },

    mounted() {

    },
  },
};
</script>

<style scoped>
body {
  background-color: aqua;
}
.login{
  /* font-family: 'Kalam', cursive; */
  text-align: center; 
  width: 25rem;
  padding: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
};

</style>
