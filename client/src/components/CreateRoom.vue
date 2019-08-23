<template>
    <b-modal id="modal-create-room" centered title="Create Room">
        <b-form @submit.prevent="createRoom()">
            <label>Room Name</label>
            <b-input v-model="room" type="text" placeholder="Enter your room name..."></b-input>
        </b-form>
            <div slot="modal-footer" class="w-100">
            <b-button
            variant="primary"
            class="btn-block"
            @click="createRoom()"
            >
            Create
            </b-button>
        </div>
    </b-modal>
</template>

<script>
export default {
    data() {
        return {
            room: ''
        }
    },
    methods: {
        createRoom() {
            this.$store.commit('CREATEROOM', this.room)
            this.$store.dispatch('fetchQuestions')
            this.room = ''
            this.$bvModal.hide('modal-create-room')
        }
    }
}
</script>

<style>

</style>