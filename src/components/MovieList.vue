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
    
    <div class="result">
        <ul class="info" v-for="movie, i in store.movieCatalog">
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
            Voto: 
            <span
                    v-for="star in Math.ceil((this.store.movieCatalog[i].vote_average) / 2)"
                >
                <i class="fa-solid fa-star"></i>
            </span>
            <span
                    v-for="star in (5 - Math.ceil((this.store.movieCatalog[i].vote_average) / 2))"
                >
                <i class="fa-regular fa-star"></i>
            </span>
       </li>
       <img :src="this.store.imageLink + this.store.movieCatalog[i].poster_path" alt="">
    </ul>
    </div>
    
    
</template>

<style>
  .info {
    flex: 0 0 25%;
    }
    img {
    border: 1px solid white;
}
li {
    /* display: none; */
}
</style>