<template>
    <b-modal id="modal-create-room" centered title="Create Room">
        <b-form>
            <label>Room Name</label>
            <b-input type="text" placeholder="Enter your room name..."></b-input>
            <label class="mt-2">Max Players</label>
            <b-input type="number" min="2" max="8"></b-input>
        </b-form>
            <div slot="modal-footer" class="w-100">
            <b-button
            variant="primary"
            class="btn-block"
            >
            Close
            </b-button>
        </div>
    </b-modal>
</template>

<script>
export default {

}
</script>

<style>

</style>