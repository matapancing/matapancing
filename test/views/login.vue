<template>
<!-- login -->
<section class="login">
  <h4>Login App</h4>
  <form v-on:submit.prevent="submitLogin" class="mt-3">
    <div class="form-group">
      <input v-model="userForm.email" type="email" class="form-control p-4" placeholder="your email">
    </div>
    <button type="submit" class="btn btn-primary mr-3 mt-2">Login</button>
    <div class="mt-4 g-signin2" data-onsuccess="gauthOption"></div>
  </form>
</section>
</template>

<script>

export default {
  data() {
    return {
      userForm: {
        email: '',
      },
    };
  },
  methods: {
    submitLogin() {
      this.$emit  ('login', this.userForm)
    },
    mounted() {

    },
  },
};
</script>

<style scoped>
.login{
  font-family: 'Kalam', cursive;
  text-align: center; 
  width: 25rem;
  padding: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
};

</style>
