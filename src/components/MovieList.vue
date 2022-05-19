<template>
  <ul>
    <li v-for="movie in fetchMovie" :key="movie.imdbID">
      <div class="movieInfo">
        <img :src="movie.Poster" alt="" />
        <span class="title">{{ movie.Title }}</span>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  computed: {
    fetchMovie() {
      return this.$store.state.movie.movieList.Search;
    },
  },
  created() {
    this.$store.dispatch("movie/fetchMovie");
  },
};
</script>
<style lang="scss" scoped>
ul {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 15px;
  grid-column-gap: 5px;
  li {
    list-style: none;
    .movieInfo {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
img {
  width: 60%;
}
</style>
