<template>
  <b-container class="mt-5">
    <b-row class="justify-content-center">
      <b-button class="btn-sm" v-b-modal.modal-create-room>Create Room</b-button>
    </b-row>
    <b-row class="mt-5">
      <b-col v-for="(a,i) in ['1','2','3','4','5']" :key="i" cols="3" class="px-1">
        <Room></Room>
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
};
</script>

<style>

</style>
