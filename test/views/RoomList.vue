<template>
  <b-container class="mt-5">
    <b-row class="justify-content-center">
    </b-row>
    <b-row class="d-flex mt-5">
      <b-col v-for="(a,i) in ['1','2','3','4','5']" :key="i" cols="4" class="px-1" >
        <Room onmouseenter="playClick()"/>
        <!-- <audio id="click" src=""><source src="../audio/drip.mp3" type="audio/mp3"/></audio> -->
    <b-row class="mt-5 cards">
      <b-col v-for="r in $store.state.rooms" cols="3"  :key="r.id" class="px-1">
        <Room :detail="r"></Room>
      </b-col>
    </b-row>
    <CreateRoom></CreateRoom>
  </b-container>
</template>

<script>
import Room from '@/components/Room.vue';
import CreateRoom from '@/components/CreateRoom.vue';

export default {
  components: {
    Room,
    CreateRoom,
  },
  created() {
    this.$store.dispatch('getRooms')
  }
};
</script>

<style>
.cards {
  padding: 2rem;
}
</style>
