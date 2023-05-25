import { reactive } from 'vue';

export const store = reactive({
	movieCatalog: [],
    showCatalog: [],
    searchText: "",
    imageLink: "https://image.tmdb.org/t/p/w342"
});