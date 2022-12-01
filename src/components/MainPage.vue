<template>
  <div class="main_page">
    <h2 v-if="arrMovie.lenght">Movies</h2>
    <font-awesome-icon icon="fa-solid fa-star" />
    <font-awesome-icon icon="fa-regular fa-star" />
    <ul v-for="objMovie in arrMovie" :key="objMovie.id">
      <li><img :src = "`https://image.tmdb.org/t/p/w342${objMovie.poster_path}`" alt=""></li>
      <li>{{objMovie.title}}</li>
      <li>{{objMovie.original_title}}</li>
      <li><lang-flag :iso="`${objMovie.original_language}`"/></li>
      <li>{{objMovie.vote_average}}</li>
    </ul>
    <h2 v-if="arrSeries.length">Series</h2>
    <ul v-for="objSerie in arrSeries" :key="objSerie.id">
      <li><img :src = "`https://image.tmdb.org/t/p/w342${objSerie.poster_path}`" alt=""></li>
      <li>{{objSerie.title}}</li>
      <li>{{objSerie.original_title}}</li>
      <li>{{objSerie.original_language}}</li>
      <li>{{objSerie.vote_average}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  props: {
    arrMovie: Array,
    arrSeries: Array,
  },
};
</script>

<style lang="scss" scoped>
.main_page{
  height: 100%;
  background-color: gray;
  padding-top: 10rem;
}
li{
  color: black;
}
h2{
  color: black;
}

</style>
