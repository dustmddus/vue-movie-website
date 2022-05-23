export default {
  namespaced: true,
  state() {
    return {
      query: "",
      page: "1",
      movieList: {},
      movieDetail: {},
    };
  },
  mutations: {
    assignState(state, payload) {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },
    query(state, newQuery) {
      state.query = newQuery;
    },
    page(state, newPage) {
      state.page = newPage;
      console.log("새로", state.page);
    },
    newMovieList(state, newList) {
      state.movieList = newList;
    },
  },
  actions: {
    async fetchMovie({ commit }, options) {
      const movieListAdd = await fetch("/.netlify/functions/MovieListSearch", {
        method: "POST",
        body: JSON.stringify(options),
      }).then((res) => res.json());
      commit("query", options.value);
      commit("page", options.page);
      // 밑에 이어서 출력 안됨 수정필요
      commit("newMovieList", {
        ...this.state.movieList,
        ...movieListAdd,
      });
    },
    async fetchMovieDetail({ commit }, options) {
      const movieDetail = await fetch("/.netlify/functions/MovieInfoSearch", {
        method: "POST",
        body: JSON.stringify(options),
      }).then((res) => res.json());
      commit("assignState", {
        movieDetail,
      });
    },
  },
};
