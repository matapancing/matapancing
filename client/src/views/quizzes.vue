<template>
  <div class="red">
    <quizbox></quizbox>
  </div>
</template>

<script>
import Vue from "vue";
import quizbox from "../components/quizbox";
import { mapState } from "vuex";

export default {
  name: "quizzes",
  components: {
    quizbox
  },
  methods: {
  }
};
</script>

<style>
.red {
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(10, 174, 227, 1) 0%,
    rgba(124, 182, 255, 1) 100.2%
  );
  height: 100vh;
}
.poin {
  height: 15%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

#circle {
  width: 50px;
  height: 50px;
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  border-radius: 10px;
  background: whitesmoke;
  margin-right: 20%;
  text-align: center;
  word-wrap: break-word;
}
</style>