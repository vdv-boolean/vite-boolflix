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

    <h1>Film</h1>

    <div class="result" v-for="movie, i in store.movieCatalog">
       <div>
            Titolo: {{ this.store.movieCatalog[i].title }}
       </div>
       <div>
            Titolo originale: {{ this.store.movieCatalog[i].original_title }}
       </div>
       <div>
            Lingua: {{ this.store.movieCatalog[i].original_language }}
       </div>
       <div>
            Voto: {{ this.store.movieCatalog[i].vote_average }}
       </div>
       <img :src="this.store.imageLink + this.store.movieCatalog[i].poster_path" alt="">
    </div>
    
</template>

<style>
.result {
    border: 1px solid black;
}
</style>