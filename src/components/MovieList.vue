<script>
    import { store } from '../store';

    export default {
        data() {
            return {
                store,
            };
        },
    }
</script>

<template>
    <h1
        v-for="movie, i in store.movieCatalog"
    >
        {{ this.store.movieCatalog[i].title }}
    </h1>
</template>

<style>

</style>