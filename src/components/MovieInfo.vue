<template>
  <div v-if="$route.params.id" :key="$route.params.id" class="infoModal">
    <img
      :src="
        movieDetail.Poster ? movieDetail.Poster.replace('SX300', 'SX700') : null
      "
      alt=""
    />
    <div class="info">
      <h1>Title : {{ movieDetail.Title }}</h1>
      <h2>Year:{{ movieDetail.Year }}</h2>
      <span><b>Genre</b> : {{ movieDetail.Genre }}</span>
      <span><b>Actors</b> : {{ movieDetail.Actors }}</span>
      <span><b>Director</b> : {{ movieDetail.Director }}</span>
      <span><b> Writer</b> : {{ movieDetail.Writer }}</span>
      <span><b>Rated</b>:{{ movieDetail.Rated }}</span>
      <span><b>Released</b>:{{ movieDetail.Released }}</span>
      <span><b>Runtime</b>:{{ movieDetail.Runtime }}</span>
      <span><b>Language</b> : {{ movieDetail.Language }}</span>
      <span><b>Country </b>: {{ movieDetail.Country }}</span>
      <span><b>Awards</b> : {{ movieDetail.Awards }}</span>
      <span><b>Plot</b> : {{ movieDetail.Plot }}</span>
    </div>
    <button class="closeBtn" @click="onClose">X</button>
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
  methods: {
    onClose() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="scss" scoped>
.infoModal {
  margin: auto;
  padding: 30px;
  display: flex;
  width: 80%;
  background-color: rgb(80, 103, 216);
  img {
    height: 500px;
    margin-right: 30px;
  }
  .info {
    display: flex;
    flex-direction: column;
    font-size: 15px;
    span {
      margin-bottom: 10px;
    }
  }
  .closeBtn {
    width: 90px;
    height: 40px;
  }
}
</style>
