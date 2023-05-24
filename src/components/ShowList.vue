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

    <div class="result" v-for="movie, i in store.showCatalog">
       <div>
            Titolo: {{ this.store.showCatalog[i].name }}
       </div>
       <div>
            Titolo originale: {{ this.store.showCatalog[i].original_name }}
       </div>
       <div>
            Lingua: {{ this.store.showCatalog[i].original_language }}
       </div>
       <div>
            Voto: {{ this.store.showCatalog[i].vote_average }}
       </div>
    </div>
    
</template>

<style>
.result {
    border: 1px solid black;
}
</style>