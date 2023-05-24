<script>
import Search from './components/Search.vue'
import axios from 'axios';
import { store } from './store';

export default {
	data() {
		return {
			store,
		};
  },
  components: {
    Search,
  },
  methods: {
    getMovie() {
    axios
        .get(
          "https://api.themoviedb.org/3/search/movie", {
            params: {
              api_key: "e99307154c6dfb0b4750f6603256716d",
						  query: this.store.searchText,
						
					},
        })
        .then((response) => (this.store.movieCatalog = response.data.results));
        console.log(this.store.movieCatalog)
     },
  },
  created() {
    this.getMovie()
  }

}

</script>

<template>
 <Search @performSearch="getMovie"/>
 <h1>{{ this.store.movieCatalog[0].title }}</h1>
 <!-- <img src="https://image.tmdb.org/t/p/w342/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg" alt=""> -->
</template>

<style scoped>

</style>
