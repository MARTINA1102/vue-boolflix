<template>
  <div>
    <HeaderPage/>
    <MainPage/>
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
      arrFilms: null,
      sString: '',
      urlApi: 'https://api.themoviedb.org/3/search/movie?api_key=2e41251ba6af8c59827f3c648b26408b&query=string',
    };
  },
  created() {
    axios.get(this.urlApi)
      .then((axiosResponse) => {
        console.log(axiosResponse);
        this.arrFilms = axiosResponse.data.results;
      });
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
