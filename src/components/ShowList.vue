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
    <div class="result">
        <ul class="info" v-for="movie, i in store.showCatalog">
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
            Voto: 
            <span
                    v-for="star in Math.ceil((this.store.showCatalog[i].vote_average) / 2)"
                >
                <i class="fa-solid fa-star"></i>
            </span>
            <span
                    v-for="star in (5 - Math.ceil((this.store.showCatalog[i].vote_average) / 2))"
                >
                <i class="fa-regular fa-star"></i>
            </span>
       </li>
       <img :src="store.imageLink + store.showCatalog[i].poster_path" alt="">
    </ul>
    </div>

    
</template>

<style>
  .info {
    flex: 0 0 25%;
}
h1 {
    color: white;
}
img {
    border: 1px solid white;
}
</style>