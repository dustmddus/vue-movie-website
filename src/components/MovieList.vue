<template>
  <ul>
    <div class="nonResult" v-if="isShow">검색 결과가 없습니다.</div>
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
  <div class="moreBtn" @click="moreList" v-if="fetchMovie">
    <i class="fa-solid fa-angles-right"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: this.$store.state.movie.page,
      isShow: false,
    };
  },
  computed: {
    fetchMovie() {
      if (this.$store.state.movie.movieList.Response === "False") {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
      return this.$store.state.movie.movieList.Search;
    },
  },

  methods: {
    moreList() {
      this.page = this.$store.state.movie.page;
      this.page = parseInt(this.page, 10) + 1;
      this.$store.dispatch("movie/fetchMovie", {
        value: this.$store.state.movie.query,
        page: this.page,
      });
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
        font-size: 20px;
        padding: 15px;
      }
    }
  }
  .nonResult {
    color: white;
    margin-left: 70%;
    width: 500px;
    height: 30px;
    font-size: 50px;
  }
}
img {
  width: 200px;
  border-radius: 5px;
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
