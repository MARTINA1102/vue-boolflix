<template>
  <div class="main_page">
    <h2 v-if="arrMovie.lenght">Movies</h2>
    <FixCard
      v-for="objMovie in arrMovie"
      :key="objMovie.id"
      :title="objMovie.title"
      :original-title="objMovie.original_title"
      :language="objMovie.original_language"
      :overview="objMovie.overview"
      :score="convertScore(objMovie.vote_average)"
      :imgUrl="generateUrl(objMovie.poster_path)"
    />
    <h2 v-if="arrSeries.length">Series</h2>
    <FixCard
      v-for="objSerie in arrSeries"
      :key="objSerie.id"
      :title="objSerie.name"
      :original-title="objSerie.original_name"
      :language="objSerie.original_language"
      :overview="objSerie.overview"
      :score="convertScore(objSerie.vote_average)"
      :imgUrl="generateUrl(objSerie.poster_path)"
    />
  </div>
</template>

<script>
import FixCard from '@/components/FixCard.vue';

export default {
  components: { FixCard },
  name: 'MainPage',
  props: {
    arrMovie: Array,
    arrSeries: Array,
  },
  data() {
    return {
      baseImgUrl: 'https://image.tmdb.org/t/p/',
      imgSize: 'w342',
    };
  },
  methods: {
    generateUrl(path) {
      if (path) {
        return this.baseImgUrl + this.imgSize + path;
      }
      return null;
    },
    convertScore(score) {
      const maxScore = 5;
      const originalMaxScore = 10;
      return {
        score: Math.ceil((score * maxScore) / originalMaxScore),
        maxScore,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.main_page{
  background-color: gray;
  padding-top: 10rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  flex-direction: row;
  gap: 4rem;
}
li{
  color: black;
}
h2{
  color: black;
}

</style>
