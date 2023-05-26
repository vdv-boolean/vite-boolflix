<script>
import Result from './Result.vue'
import { store } from '../store';

    export default {
        data() {
            return {
                store,
            };
        },
        components: {
            Result,     
        },
     } 
 
</script>

<template>

    <h1>Film</h1>
    

    <ul class="result" v-for="movie, i in store.movieCatalog">
        <li>
            Titolo: {{ this.store.movieCatalog[i].title }}
       </li>
       <li>
            Titolo originale: {{ this.store.movieCatalog[i].original_title }}
       </li>
       <li>
            Lingua: {{ this.store.movieCatalog[i].original_language }}
       </li>
       <li>
            Voto: {{ Math.ceil((this.store.movieCatalog[i].vote_average) / 10 * 5) }}
       </li>
       <img :src="this.store.imageLink + this.store.movieCatalog[i].poster_path" alt="">
    </ul>
    
</template>

<style>
.result {
    border: 1px solid black;
}
</style>