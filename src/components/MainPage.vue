<template>
  <div class="main_page">
    <ul v-for="objMovie in arrMovie" :key="objMovie.id">
      <li>{{objMovie.title}}</li>
      <li>{{objMovie.original_title}}</li>
      <li>{{objMovie.original_language}}</li>
      <li>{{objMovie.vote_average}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  props: {
    arrMovie: Array,
  },
};
</script>

<style lang="scss" scoped>
.main_page{
  height: 100vh;
  background-color: gray;
  padding-top: 5rem;
}

</style>
