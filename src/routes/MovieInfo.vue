<template>
  <div v-if="$route.params.id" :key="$route.params.id" class="infoModal">
    <img :src="movieDetail.Poster" alt="" />
    <div class="info">
      <h1>Title : {{ movieDetail.Title }}</h1>
      <h2>Year:{{ movieDetail.Year }}</h2>
      <span><b>Genre</b> : {{ movieDetail.Genre }}</span>
      <span><b>Actors</b> : {{ movieDetail.Actors }}</span>
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
  width: 70%;
  background-color: rgb(80, 103, 216);
  img {
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
