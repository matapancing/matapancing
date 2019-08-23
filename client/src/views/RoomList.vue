<template>
  <b-container class="mt-5">
    <b-row class="justify-content-center">
      <b-button class="btn-sm" v-b-modal.modal-create-room>Create Room</b-button>
    </b-row>
    <b-row class="mt-5">
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

</style>
