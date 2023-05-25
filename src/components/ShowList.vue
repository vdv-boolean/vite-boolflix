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
            Titolo: {{ this.store.showCatalog[i].name }}
       </li>
       <li>
            Titolo originale: {{ this.store.showCatalog[i].original_name }}
       </li>
       <li>
            Lingua: {{ this.store.showCatalog[i].original_language }}
       </li>
       <li>
            Voto: {{ this.store.showCatalog[i].vote_average }}
       </li>
       <img :src="this.store.imageLink + this.store.showCatalog[i].poster_path" alt="">
    </ul>
    
</template>

<style>
.result {
    border: 1px solid black;
}
</style>