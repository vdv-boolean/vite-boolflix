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

    <h1>Serie Tv</h1>

    <ul class="result" v-for="movie, i in store.showCatalog">
       <li>
            Titolo: {{ store.showCatalog[i].name }}
       </li>
       <li>
            Titolo originale: {{ store.showCatalog[i].original_name }}
       </li>
       <li>
            Lingua: {{ store.showCatalog[i].original_language }}
       </li>
       <li>
            Voto: {{ Math.ceil((this.store.showCatalog[i].vote_average) / 10 * 5) }}
       </li>
       <img :src="store.imageLink + store.showCatalog[i].poster_path" alt="">
    </ul>
    
</template>

<style>
.result {
    border: 1px solid black;
}
</style>