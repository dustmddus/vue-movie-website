<template>
  <Home />
  <ul>
    <li v-for="movie in fetchMovie" :key="movie.imdbID">
      {{ movie.Title }}
    </li>
  </ul>
</template>

<script>
import Home from "~/components/Home";

export default {
  components: {
    Home,
  },
  data() {
    return {
      msg: "Home Vue!",
    };
  },
  // store의 state가져올때 computed 씀
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
