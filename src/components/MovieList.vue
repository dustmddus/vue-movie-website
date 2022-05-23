<template>
  <ul>
    <li v-for="movie in fetchMovie" :key="movie.imdbID">
      <div class="movieInfo">
        <img
          @click="
            $router.push({
              name: 'MovieInfo',
              params: {
                id: movie.imdbID,
              },
            })
          "
          :src="movie.Poster"
          alt=""
        />
        <span class="title">{{ movie.Title }}</span>
      </div>
    </li>
  </ul>
  <div class="moreBtn" v-if="fetchMovie">
    <i class="fa-solid fa-angles-right"></i>
  </div>
</template>

<script>
export default {
  computed: {
    fetchMovie() {
      return this.$store.state.movie.movieList.Search;
    },
  },
};
</script>
<style lang="scss" scoped>
ul {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 15px;
  li {
    list-style: none;
    .movieInfo {
      display: flex;
      flex-direction: column;
      align-items: center;
      .title {
        color: white;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 20px;
        padding: 15px;
      }
    }
  }
}
img {
  width: 70%;
  &:hover {
    transform: scale(1.2);
    transition: transform 0.5s;
  }
}
.moreBtn {
  color: white;
  display: block;
  margin-top: 70px;
  margin-left: 50%;
  width: 100px;
  height: 30px;
  font-size: 50px;
  transform: rotate(90deg);
}
</style>
