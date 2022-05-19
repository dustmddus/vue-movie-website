<template>
  <div v-if="$route.params.id" :key="$route.params.id" class="infoModal">
    <img :src="movieDetail.Poster" alt="" />
    <div class="info">
      <h1>Title : {{ movieDetail.Title }}</h1>
      <h2>Year:{{ movieDetail.Year }}</h2>
      <span>Genre : {{ movieDetail.Genre }}</span>
      <span>Actors : {{ movieDetail.Actors }}</span>
      <span>Director : {{ movieDetail.Director }}</span>
      <span>Writer : {{ movieDetail.Writer }}</span>
      <span>Rated:{{ movieDetail.Rated }}</span>
      <span>Released:{{ movieDetail.Released }}</span>
      <span>Runtime:{{ movieDetail.Runtime }}</span>
      <span>Language : {{ movieDetail.Language }}</span>
      <span>Country : {{ movieDetail.Country }}</span>
      <span>Awards : {{ movieDetail.Awards }}</span>
      <span>Plot : {{ movieDetail.Plot }}</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    movieDetail() {
      return this.$store.state.movie.movieDetail;
    },
  },
  watch: {
    $route() {
      this.$store.dispatch("movie/fetchMovieDetail", {
        id: this.$route.params.id,
      });
    },
  },
  created() {
    this.$store.dispatch("movie/fetchMovieDetail", {
      id: this.$route.params.id,
    });
  },
};
</script>
<style lang="scss" scoped>
.infoModal {
  background-color: rgb(80, 103, 216);
}
</style>
