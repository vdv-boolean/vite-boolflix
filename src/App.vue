<script>
import Search from './components/Search.vue'
import MovieList from './components/MovieList.vue'
import ShowList from './components/ShowList.vue'
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
    MovieList,
    ShowList,
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
     },
     getShow() {
      axios
          .get(
            "https://api.themoviedb.org/3/search/tv", {
              params: {
                api_key: "e99307154c6dfb0b4750f6603256716d",
                query: this.store.searchText,
              
            },
          })
          .then((response) => (this.store.showCatalog = response.data.results));
      },
     getBoth() {
      this.getMovie();
      this.getShow();
     }
  
  },
  created() {
    this.getMovie();
    this.getShow();
  },

}

</script>

<template>
		
 <Search @performSearch="getBoth()"/>

 <MovieList />
 <ShowList />


 <!-- <img src="https://image.tmdb.org/t/p/w342/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg" alt=""> -->
</template>

<style scoped>

</style>
