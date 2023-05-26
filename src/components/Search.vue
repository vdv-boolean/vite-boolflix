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
    <nav>
        <h1>BOOLFLIX</h1>
        <div>
            <input
                type="text"
                placeholder="Cerca"
                v-model="store.searchText"
                @keyup.enter="emitSearchEvent"
            >
            <button @click="emitSearchEvent">
                Cerca
            </button>
        </div>
        
    </nav>
    
</template>

<style scoped>
    nav {
        width: 100%;
        height: 80px;
        background-color: black;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-inline: 1rem;
    }
    h1 {
        color: red;
    }
</style>