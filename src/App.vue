<template>
  <div>
    <HeaderPage @queryChange = " search "/>
    <MainPage :arr-movie = " arrMovie "/>
  </div>
</template>

<script>
import axios from 'axios';
import HeaderPage from './components/HeaderPage.vue';
import MainPage from './components/MainPage.vue';

export default {
  name: 'App',
  components: {
    HeaderPage,
    MainPage,
  },
  data() {
    return {
      baseApi: 'https://api.themoviedb.org/3',
      apiKey: '07f8adb8a80647ce73267621c81dedf5',
      resultsLanguage: ' it-IT ',
      arrMovie: [],
    };
  },
  methods: {
    search(queryString) {
      // chiamata axios all'url
      // base + end point + query string
      axios.get(`${this.baseApi}/search/movie`, {
        // parametri delle variabili per le richieste dell'URL
        params: {
          api_key: this.apiKey,
          query: queryString,
          language: this.resultsLanguage,
        },
      })
      // risposta di axios
        .then((responseAxios) => {
          this.arrMovie = responseAxios.data.results;
          console.log(this.arrMovie);
        });
    },
  },
};

</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
