<template>
  <div class="start">
      <h1>Mata Pancing</h1>
      <p>Matetmatika nga bikin pusing</p>
      <button @click="start()" class="mt-4 btn btn-primary">Start</button>
      <!-- <audio id="audioClick" src="../audio/drip.mp3" type="audio/mpeg"></audio> -->

      <audio autoplay loop>
        <source src="../audio/chicken.mp3" type="audio/mp3" />
      </audio>
  </div>
</template>

<script>
export default {
  methods: {
    start(){
      this.$router.push('/login');
    },
  },
};
</script>

<style>
.start h1 {
  font-size: 100px;
  font-family: 'Bangers', cursive;
}
body {
    background-image: url('https://thumbs.gfycat.com/RevolvingAdolescentCougar-size_restricted.gif');
    background-size: cover;
    height: 100vh;
    
}
.start {
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    text-align: center;
}
p {
    font-family: 'Rancho', cursive;
    font-size: 40px;
}
.start .btn {
  padding: 0.5rem;
  padding-right: 5rem;
  padding-left: 5rem;
  font-size: 30px;
  font-family: 'Bangers', cursive;
}
</style>
