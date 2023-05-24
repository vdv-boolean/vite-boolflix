<script>
    import { store } from '../store';

    export default {
        data() {
            return {
                store,
            };
        },
        methods: {
		emitSearchEvent() {
			this.$emit('performSearch');
		},
    },
}
</script>

<template>
    <input
        type="text"
        placeholder="Cerca"
        v-model="store.searchText"
        @keyup.enter="emitSearchEvent"
    >
</template>

<style>

</style>